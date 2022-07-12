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
        <pick-icon :icon="props.icon" :icon-pack="props.iconPack" class="pick-checkbox--icon" />
      </span>
    </span>
    <span class="con-slot-label">
      <slot/>
    </span>
  </div>
</template>

<style>
.con-pick-checkbox {
    position: relative;
    display: block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px
}

.con-pick-checkbox.pick-checkbox-small .pick-checkbox {
    width: 15px;
    height: 15px
}

.con-pick-checkbox.pick-checkbox-small .pick-checkbox .pick-icon {
    font-size: .7rem
}

.con-pick-checkbox.pick-checkbox-large .pick-checkbox {
    width: 24px;
    height: 24px
}

.pick-checkbox--input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 200;
    cursor: pointer;
    background: #55d775
}

.pick-checkbox--input:disabled {
    cursor: default;
    pointer-events: none
}

.pick-checkbox--input:disabled+.pick-checkbox {
    opacity: .5;
    cursor: default;
    pointer-events: none
}

.pick-checkbox--input:disabled+.pick-checkbox .pick-checkbox--check {
    cursor: default;
    pointer-events: none
}

.pick-checkbox--input:active:checked+.pick-checkbox .pick-checkbox--check {
    -webkit-transform: translate(3px);
    transform: translate(3px)
}

.pick-checkbox--input:active:checked+.pick-checkbox .pick-icon {
    -webkit-transform: translate(6px);
    transform: translate(6px)
}

.pick-checkbox--input:checked+.pick-checkbox {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.pick-checkbox--input:checked+.pick-checkbox .pick-checkbox--check {
    -webkit-transform: translate(0);
    transform: translate(0)
}

.pick-checkbox--input:checked+.pick-checkbox .pick-checkbox--icon {
    opacity: 1;
    -webkit-transform: translate(0);
    transform: translate(0);
    color: #fff;
    display: -ms-flexbox;
    display: flex
}

.pick-checkbox,.pick-checkbox--input:checked+.pick-checkbox .pick-checkbox--icon {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.pick-checkbox {
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.pick-checkbox--check {
    -webkit-transform: translate(100%);
    transform: translate(100%);
    -webkit-transform-origin: right;
    transform-origin: right;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    z-index: 10
}

.pick-checkbox--icon {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    z-index: 100;
    font-size: 1.125em;
    opacity: 0;
    -webkit-transform: translate(30px);
    transform: translate(30px);
    -webkit-transform-origin: center;
    transform-origin: center
}

.pick-checkbox-primary .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-primary input:checked+.pick-checkbox {
    border: 2px solid rgba(31, 116, 255,1)!important;
    background: rgba(31, 116, 255,1)
}

.pick-checkbox-secondary .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-secondary input:checked+.pick-checkbox {
    border: 2px solid rgba(121, 49, 177,1)!important;
    background: rgba(121, 49, 177,1)
}

.pick-checkbox-danger .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-danger input:checked+.pick-checkbox {
    border: 2px solid rgba(255, 71, 87,1)!important;
    background: rgba(255, 71, 87,1)
}

.pick-checkbox-success .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-success input:checked+.pick-checkbox {
    border: 2px solid rgba(70, 201, 58,1)!important;
    background: rgba(70, 201, 58,1)
}

.pick-checkbox-warning .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-warning input:checked+.pick-checkbox {
    border: 2px solid rgba(255,186,0,1)!important;
    background: rgba(255,186,0,1)
}

.pick-checkbox-dark .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-dark input:checked+.pick-checkbox {
    border: 2px solid rgba(30, 30, 30,1)!important;
    background: rgba(30, 30, 30,1)
}

.pick-checkbox-light .pick-checkbox {
    border: 2px solid #b4b4b4
}

.pick-checkbox-light input:checked+.pick-checkbox {
    border: 2px solid rgba(245, 245, 245,1)!important;
    background: rgba(245, 245, 245,1)
}

</style>
