<script setup lang="ts">
  import {getColor} from '../../util/color'
  import {ref,computed} from 'vue'

  const active = ref<boolean>(false)
  const type = ref<string>('default')
  const color = ref<any>(null)
  const background = ref<string>('rgba(255,255,255,0.6)')
  const src = ref<string>('')
  const leftx = ref<number>(0)
  const topx = ref<number>(0)
  const clickEffect = ref<boolean>(false)
  const activeEffectClick = ref<boolean>(false)
  const scale = ref<number>(1)
  const textAfter = ref<boolean>(false)
  const text = ref<any>(null)

  const styleEffectClick = computed(()=>{
    return {
      left: `${leftx.value}px`,
      top: `${topx.value}px`
    }
  })

  const styleEffect1 = computed(()=>{
    let style = {
      borderLeft: `3px solid ${getColor(color.value,1)}`
    }
    if(type.value === 'border'){
      style = {
        borderLeft: `1px solid ${getColor(color.value,1)}`
      }
    }
    if(type.value === 'point'){
      style = {
        background: getColor(color.value,0.4)
      }
    }
    if(type.value === 'radius'){
      style = {
        border: `3px solid ${getColor(color.value,1)}`
      }
    }
    if(type.value === 'corners'){
      style = {
        border: `3px solid ${getColor(color.value,1)}`
      }
    }
    if(type.value === 'sound'){
      style = {
        background: _color.getColor(color.value,1)
      }
    }
    return style
  })

  const styleEffect2 = computed(()=>{
    let style = {
      borderLeft: `3px solid ${getColor(color.value,1)}`
    }
    if(type.value === 'border'){
      style = {
        borderLeft: `1px solid ${getColor(color.value,1)}`
      }
    }
    if(type.value === 'point'){
      style = {
        background: getColor(color.value,0.4)
      }
    }
    if(type.value === 'radius'){
      style = {
        border: `3px solid ${getColor(color.value,1)}`
      }
    }
    if(type.value === 'corners'){
      style = {}
    }
    if(type.value === 'sound'){
      style = {
        background: _color.getColor(color.value,1)
      }
    }
    return style
  })



</script>

<template>
  <transition name="fade">
    <div v-if="active" :style="style" :class="[`vs-loading-background-${background}`,`vs-loading-color-${color}`,{'textAfter':textAfter}]" class="con-vs-loading" @click="effectClick" >
      <transition name="effect-click">
        <div v-if="activeEffectClick&&clickEffect" :style="styleEffectClick" class="effect-click"  />
      </transition>

      <h4 v-if="text" class="title-loading" >
        {{ text }}
      </h4>

      <div
        :style="{
          transform:`scale(${scale})`
        }"
        :class="[type]"
        class="vs-loading"
      >
        <div v-if="type!='material'" :style="styleEffect1" class="effect-1 effects" />
        <div v-if="type!='material'" :style="styleEffect2" class="effect-2 effects" />
        <div v-if="type!='material'" :style="styleEffect3" class="effect-3 effects" />

        <img :src="src">

        <svg v-if="type=='material'" class="spinner" width="50px" height="50px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" >
          <circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    </div>
  </transition>
</template>
