<script setup lang="ts">
import {computed, ref} from 'vue'
import { isColor,getColor,changeColor } from '../../util/color'

const props = withDefaults(defineProps<{
  modelValue:any,
  type:string,
  collapse:boolean,
  color:string,
  activeTextColor:string,
  textColor:string
}>(), {
  type:undefined,
  collapse:false,
  color:'transparent',
  activeTextColor:'primary',
  textColor:'rgb(40,40,40)'
})

const emit = defineEmits(['update:modelValue'])

const activeMenuResponsive = ref<boolean>(false)

const styleNavbar:any = computed(()=>{
  if(isColor(props.color)) {
    return {
      background: `rgb(${changeColor(props.color)})`
    }
  }
  return {
    background: getColor(props.color)
  }
})

function changeIndex(index:any){
  emit('update:modelValue', index)

}
</script>

<template>
  <header :style="[styleNavbar, $attrs.style]" :class="[`pick-navbar-${props.type}`, `pick-navbar-color-${props.color}`, {'collapse':props.collapse}, $attrs.class]" class="pick-navbar">
    <div class="pick-navbar--header">
      <button
        :class="{'active-menu' : activeMenuResponsive}"
        class="pick-navbar--btn-responsive"
        @click="activeMenuResponsive = !activeMenuResponsive"
      >
        <span class="btn-responsive-line line--1" />
        <span class="btn-responsive-line line--2" />
        <span class="btn-responsive-line line--3" />
      </button>
      <slot name="title" />
    </div>
    <div
      :class="{'activeMenuResponsive' : activeMenuResponsive}"
      class="pick-con-items"
    >
      <slot />
    </div>
  </header>
</template>
