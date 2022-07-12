<script setup lang="ts">
  import {computed,useAttrs} from 'vue'
  import { pickIcon } from '../pickIcon'
  import {getColor} from '../../util/color'

  const props = withDefaults(defineProps<{
    color?: string,
    value?:any,
    icon?:string,
    iconPack?:string,
    pickValue?:any,
    size?:string
  }>(), {
    color: 'primary',
    value:{},
    icon:'check',
    iconPack:'material-icons',
    pickValue:false,
    size:'default'
  })

  const attrs = useAttrs()

  const emit = defineEmits(['input','change'])

  const style_check = computed(()=>{
    return{
      background: isChecked ? getColor(props.color, 1) : undefined,
    }
  })

  const style = computed(()=>{
    return {
      border: `2px solid ${isChecked ? getColor(props.color, 1) : 'rgb(180, 180, 180)'}`,
    }
  })

  const listeners = computed(()=>{
    return {
      change: (evt:any) => {
        toggleValue(evt)
      },
    }
  })

  const isChecked = computed(()=>{
    return isArrayx() ? isArrayIncludes() : props.value
  })

  function toggleValue(evt:any){
    if(isArrayx()){
      setArray()
    } else if(typeof(props.pickValue) === 'string'){
      setValueString()
    } else {
      emit('input',!props.value)
      emit('change',evt)
    }
  }

  function setArray(){
    const value = props.value.slice(0)
    if(isArrayIncludes()){
      value.splice(value.indexOf(props.pickValue), 1)
      emit('input',value)
      emit('change',value)
    }else{
      value.push(props.pickValue)
      emit('input',value)
      emit('change',value)
    }
  }

  function setValueString():void{
    if(props.value === props.pickValue){
      emit('input',null)
      emit('change',null)
    }else{
      emit('input',props.pickValue)
      emit('change',props.pickValue)
    }
  }

  function isArrayIncludes():boolean{
    let modelx = props.value
    let value = props.pickValue
    return modelx.includes(value)
  }

  function isArrayx():boolean{
    return Array.isArray(props.value)
  }
</script>

<template>
  <div
   :class="[`pick-checkbox-${props.color}`, `pick-checkbox-${props.size}`]"
   class="pick-component con-pick-checkbox"
  >
    <input
     v-bind="attrs"
     :checked="isChecked || attrs.checked"
     :value="props.value"
     @input="emit('change',value)"
     type="checkbox"
     class="pick-checkbox--input"
     v-on="listeners">
    <span :style="style" class="checkbox_x pick-checkbox">
      <span :style="style_check" class="pick-checkbox--check">
        <pick-icon style="font-size:1rem;" :icon="props.icon" :icon-pack="props.iconPack" class="pick-checkbox--icon" />
      </span>
    </span>
    <span class="con-slot-label">
      <slot/>
    </span>
  </div>
</template>
