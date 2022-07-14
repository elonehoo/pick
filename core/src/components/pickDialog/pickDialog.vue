<script setup lang="ts">
  import {ref,computed,watch,nextTick,onMounted,onBeforeUnmount} from 'vue'
  import {getColor} from '../../util/color'
  import { pickIcon } from '../pickIcon'
  import { pickButton } from '../pickButton'

  const emit = defineEmits(['update:active','accept','cancel','close','accept'])

  const props = withDefaults(defineProps<{
    color?:string,
    active?:boolean,
    buttonAccept?:string,
    buttonCancel?:string,
    isValid?:string | boolean,
    buttonsHidden?:boolean,
    acceptText?:string,
    cancelText?:string,
    iconPack?:string,
    closeIcon?:string,
    text?:string,
    title?:string,
    type?:string,
    parent?:any
  }>(), {
    color:'primary',
    active:false,
    buttonAccept:'filled',
    buttonCancel:'flat',
    isValid:'none',
    buttonsHidden:true,
    acceptText:'Accept',
    cancelText:'Cancel',
    iconPack:'material-icons',
    closeIcon:'close',
    text:undefined,
    title:'Dialog',
    type:'alert',
    parent:null
  })

  const isPrompt = ref<boolean>(true)

  const fActive = ref<boolean>(false)

  const parameters = ref<any>(null)

  const con = ref<HTMLDivElement | null>(null)

  const dialogx = ref<HTMLDivElement | null>(null)

  const styleHeader = computed(()=>{
    return {
      color: getColor(props.color,1),
    }
  })

  const styleAfter = computed(()=>{
    return {
      background: getColor(props.color,1)
    }
  })

  watch(()=>props.active,()=>{
    nextTick(()=>{
      if(props.active){
        insertBody()
      }
    })
  })

  watch(fActive,()=>{
    nextTick(()=>{
      if(fActive){
        insertBody()
      }
    })
  })

  onMounted(()=>{
    if (props.active && isPrompt.value) {
      insertBody()
    }
    fActive.value = props.active
  })

  onBeforeUnmount(()=>{

  })

  function acceptDialog(){
    if(!isPrompt.value){
      // accept.value? accept(parameters.value) : null
      fActive.value = false
      emit('update:active',false)
      emit('accept', parameters.value)
    } else {
      if (props.isValid || props.isValid == 'none') {
        // accept? accept() : null
        fActive.value = false
        emit('update:active',false)
        emit('accept', parameters.value)
      }
    }
  }

  function rebound(){
    dialogx.value?.classList.add('locked')
    setTimeout(()=>{
      dialogx.value?.classList.remove('locked')
    },200)
  }

  function handleClose(event:any,con:any){
    if(con){
      if(event.target.className.indexOf('pick-dialog-dark')!=-1 && props.type == 'alert'){
        fActive.value = false
        emit('update:active',false)
      }else if(event.target.className.indexOf('pick-dialog-dark')!=-1){
        rebound()
      }
    }else {
      if(event?event.target.className.indexOf('pick-dialog-cancel')!=-1:event?event.target.className.indexOf('pick-dialog-cancel--icon')!=-1:false){
        fActive.value = false
        emit('update:active',false)
      }
    }
    emit('close')

  }

  function cancelClose(){
    fActive.value = false
    emit('update:active',false)
    emit('cancel')
  }

  function insertBody(){
    let parentx = props.parent ? props.parent : document.body
    parentx.insertBefore(con.value,parentx.firstChild)
  }
</script>

<template>
  <Transition name="dialog-t">
    <div
     ref="con"
     v-if="isPrompt ? props.active : fActive"
     :class="[`pick-dialog-${props.color}`]"
     class="pick-component con-pick-dialog"
    >
      <div
       class="pick-dialog-dark"
       @click="handleClose($event,true)"
      />
      <div ref="dialogx" class="pick-dialog">
        <header :style="styleHeader" class="pick-dialog-header">
          <div class="con-title-after">
            <span :style="styleAfter" class="after"/>
            <h3 class="dialog-title">{{ title }} </h3>
          </div>
          <pick-icon
           v-if="props.type === 'alert'"
           :icon="props.closeIcon"
           :iconPack="props.iconPack"
           class="pick-dialog-cancel pick-dialog-cancel--icon notranslate"
           @click.native="handleClose"
          />
        </header>
        <div class="pick-dialog-text">
          <slot/>
          {{ text }}
        </div>
        <footer v-if="props.buttonsHidden ? false : isPrompt || props.type==='confirm'">
          <pick-button
           :disabled="props.isValid === 'none' ? false : !props.isValid"
           :color="props.color"
           :type="props.buttonAccept"
           class="pick-dialog-accept-button"
           @click="acceptDialog"
          >
            {{ props.acceptText }}
          </pick-button>
          <pick-button
           :textColor="'rgba(0,0,0,.5)'"
           :type="props.buttonCancel"
           class="pick-dialog-cancel-button"
           @click="cancelClose"
          >
            {{ props.cancelText }}
          </pick-button>
        </footer>
        <footer v-if="props.type === 'alert' && !isPrompt" >
          <pick-button
           :color="props.color"
           :type="props.buttonAccept"
           class="pick-dialog-accept-button"
           @click="acceptDialog">
            {{ props.acceptText }}
          </pick-button>
        </footer>
      </div>
    </div>
  </Transition>
</template>
