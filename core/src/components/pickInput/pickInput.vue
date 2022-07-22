<script setup lang="ts">
  import {ref,inject,Ref,computed,useAttrs} from 'vue'
  import { getColor } from '../../util/color'

  const attrs = useAttrs()

  const pickinput= ref<any>(null)

  const props = withDefaults(defineProps<{
    value?:string | number,
    labelPlaceholder?: string | number,
    label?: string | number,
    autofocus?: boolean,
    icon?: string,
    iconAfter?:boolean | string,
    iconNoBorder?:boolean,
    iconPack?:string,
    color?:string,
    success?:boolean,
    danger?:boolean,
    warning?:boolean,
    successText?:string,
    dangerText?:string,
    warningText?:string,
    descriptionText?:string,
    size?:string,
    valIconPack?:string,
    valIconSuccess?:string,
    valIconDanger?:string,
    valIconWarning?:string,
  }>(), {
    value: '',
    labelPlaceholder:undefined,
    label: undefined,
    autofocus: false,
    icon:undefined,
    iconAfter:false,
    iconNoBorder:false,
    iconPack:'material-icons',
    color:'primary',
    success:false,
    danger:false,
    warning:false,
    successText:undefined,
    dangerText:undefined,
    warningText:undefined,
    descriptionText:undefined,
    size:'normal',
    valIconPack:'material-icons',
    valIconSuccess:undefined,
    valIconDanger:undefined,
    valIconWarning:undefined,
  })

  const emit = defineEmits(['input','focus','blur'])

  const elForm = inject('elForm','')
  const elFormItem = inject('elFormItem','')

  const isFocus:Ref<boolean> = ref<boolean>(false)

  const style = computed(()=>{
    return {
      border: `1px solid ${isFocus.value ? getColor(props.color,1) : 'rgba(0, 0, 0,.2)'}`,
    }
  })

  const styleLabel = computed(()=>{
    return {
      color: isFocus.value ? getColor(props.color,1) : undefined,
    }
  })

  const listeners = computed(()=>{
    return {
      input:(eve:any)=>{
        emit('input',eve.target.value)
      },
      focus: (evt:any) => {
        emit('focus',evt)
        changeFocus(true)
      },
      blur: (evt:any) => {
        emit('blur',evt)
        changeFocus(false)
      }
    }
  })

  const isValue = computed(()=>{
    return props.labelPlaceholder ? true : !props.value
  })

  const getIcon = computed(()=>{
    return props.danger  ? props.valIconDanger
           : props.warning ? props.valIconWarning
           : props.success ? props.valIconSuccess
           : ''
  })

  function changeFocus(booleanx:boolean):void{
    isFocus.value = booleanx
  }

  function beforeEnter(el:HTMLElement):void{
    el.style.height = '0'
  }

  function enter(el:HTMLElement,done:Function):void{
    let h:number = el.scrollHeight
    el.style.height = h + 'px'
    done()
  }

  function leave(el:HTMLElement):void{
    el.style.height = '0px'
  }

  function focusInput():void{
    pickinput.focus()
  }
</script>

<template>
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`vs-input-${props.color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':props.success,
      'input-icon-validate-danger':props.danger,
      'input-icon-validate-warning':props.warning,
      'is-label-placeholder':props.labelPlaceholder
    }]"
    class="vs-component vs-con-input-label vs-input">
    <label
     v-if="props.labelPlaceholder ? false : props.label"
     class="vs-input--label"
     @click="focusInput">{{ props.label }}</label>
    <div class="vs-con-input">
      <input
       ref="pickinput"
       :style="style"
       :autofocus="autofocus"
       :class="[size,{
         'hasValue':value !== '',
         'hasIcon':icon,
         'icon-after-input':iconAfter
       }]"
       :placeholder="undefined"
       :value="value"
       v-bind="attrs"
       :type="attrs.type ? attrs.type : 'text'"
       class="vs-inputx vs-input--input"
       v-on="listeners">
    </div>
  </div>
</template>
