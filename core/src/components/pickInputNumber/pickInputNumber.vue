<script setup lang="ts">
  import {ref,computed,watch} from 'vue'
  import {getColor as getColors} from '../../util/color'
  import { pickIcon } from '../pickIcon'

  const isChangeValue = ref<boolean>(false)

  const emit = defineEmits(['update:modelValue','blur'])

  const props = withDefaults(defineProps<{
    modelValue?:any,
    color?:string,
    label?:string,
    max?:number | string,
    min?:number | string,
    size?:string,
    iconPack?:string,
    iconDec?:string,
    iconInc?:string,
    step?:number | string,
    isDisabled?:boolean
  }>(), {
    color:'primary',
    label:undefined,
    max:undefined,
    min:0,
    size:undefined,
    iconPack:'material-icons',
    iconDec:'remove',
    iconInc:'add',
    step:1,
    isDisabled:false
  })

  const vRepeatClick = {
    beforeMount(el:any, binding:any/*, vnode*/) {
        let intervalx:any = null;
        let startT:any;
        const functionx:any = binding.value;
        const bucle:any = () => {
          if (new Date() - startT < 100) {
            functionx();
          }
          clearInterval(intervalx);
          intervalx = null;
        };
        const eventx:any = (e:any) => {
          if (e.button !== 0) return;
          startT = new Date();
          var escuchando = function() {
            if (bucle) {
              bucle.apply(this, arguments);
            }
            el.removeEventListener('mouseup', escuchando, false);
          };
          el.addEventListener('mouseleave', escuchando ,false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        }
        el.addEventListener('mousedown', eventx ,false);
      }
  }

  const styleInput = computed(()=>{
    return {
        width:`${getLength}px`
      }
  })

  const getLength = computed(()=>{
    if(props.modelValue){
      return props.modelValue.toString().length * 9.1
    } else {
      return 0
    }
  })

  const getColor = computed(()=>{
    return getColors(props.color,1)
  })

  const listeners = computed(()=>{
    return {
        onBlur:(evt:any)=>{
          if(parseFloat(props.modelValue) > parseFloat(props.max.toString())) {
            emit('update:modelValue',props.max. toString())
          } else if (parseFloat(props.modelValue) < parseFloat(props.min.toString())) {
            emit('update:modelValue',props.min)
            emit('blur',evt)
          }
        },
        onInput:(evt:any)=>{
          emit('update:modelValue',evt.target.value)
        }
      }
  })

  watch(()=>props.modelValue,()=>{
    isChangeValue.value = true
    setTimeout(()=>{
      isChangeValue.value = false
    },200)
  })

  function plus():void{
    let newValue
    if(props.modelValue === ''){
      newValue = 0
      emit('update:modelValue',fixPrecision(newValue))
    } else  {
      if(props.max?parseFloat(props.modelValue.toString())<parseFloat(props.max.toString()):true){
        newValue = parseFloat(props.modelValue) + parseFloat(props.step.toString())
        emit('update:modelValue',fixPrecision(newValue))
      }
    }
  }

  function less(){
    let newValue
    if(props.modelValue.toString() === ''){
      newValue = 0
      emit('update:modelValue',fixPrecision(newValue))
    } else  {
      if(props.min?parseFloat(props.modelValue.toString())>parseFloat(props.min.toString()):true){
        newValue = parseFloat(props.modelValue.toString()) - parseFloat(props.step.toString())
        emit('update:modelValue',fixPrecision(newValue))
      }
    }
  }

  function fixPrecision(n:any) {
    const precision = (props.step + '').split('.')[1];
    return n.toFixed(precision ? precision.length : 0);
  }
</script>

<template>
  <div
    :class="[
      `pick-input-number-size-${props.size}`,
      `pick-input-number-${props.color}`,
      {'isChangeValue':isChangeValue}
    ]"
    class="pick-input-number">
    <button
      v-repeat-click="less"
      :disabled="$attrs.disabled ? true : false"
      :class="{
        limit:props.modelValue <= props.min
      }"
      :style="{
        background:getColor
      }"
      class="btn-less pick-input-number--button-less"
      type="button">
      <pick-icon
        :icon-pack="props.iconPack"
        :icon="props.iconDec"
      ></pick-icon>
    </button>
    <span v-if="props.label">{{ props.label }}</span>
    <input
      ref="input"
      :style="styleInput"
      :value="props.modelValue"
      v-bind="$attrs"
      :disabled="props.isDisabled"
      :min="props.min"
      :max="props.max"
      type="number"
      class="pick-input-number--input"
      v-on="listeners">
    <button
      v-repeat-click="plus"
      :disabled="$attrs.disabled ? true : false"
      :class="{
        limit: props.modelValue >= props.max && props.max !== null
      }"
      :style="{
        background: getColor
      }"
      class="btn-plus pick-input-number--button-plus"
      type="button">
      <pick-icon
        :icon-pack="props.iconPack"
        :icon="props.iconInc"
      ></pick-icon>
    </button>
  </div>
</template>
