<script setup lang="ts">
  import {getColor} from '../../util/color'
  import {ref,computed} from 'vue'

  const props = withDefaults(defineProps<{
    active?:boolean
    type?: 'default' | 'point' | 'radius' | 'border' | 'corners' | 'sound' | 'material',
    color?:any,
    background?:string,
    src?:string,
    scale?:number

  }>(), {
    active: false,
    type:'default',
    color:null,
    background:'rgba(255,255,255,0.6)',
    src:'',
    scale:1
  })


  const leftx = ref<number>(0)
  const topx = ref<number>(0)
  const clickEffect = ref<boolean>(false)
  const activeEffectClick = ref<boolean>(false)
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
      borderLeft: `3px solid ${getColor(props.color,1)}`
    }
    if(props.type === 'border'){
      style = {
        borderLeft: `1px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'point'){
      style = {
        background: getColor(props.color,0.4)
      }
    }
    if(props.type === 'radius'){
      style = {
        border: `3px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'corners'){
      style = {
        border: `3px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'sound'){
      style = {
        background: getColor(props.color,1)
      }
    }
    return style
  })

  const styleEffect2 = computed(()=>{
    let style = {
      borderLeft: `3px solid ${getColor(props.color,1)}`
    }
    if(props.type === 'border'){
      style = {
        borderLeft: `1px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'point'){
      style = {
        background: getColor(props.color,0.4)
      }
    }
    if(props.type === 'radius'){
      style = {
        border: `3px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'corners'){
      style = {}
    }
    if(props.type === 'sound'){
      style = {
        background: getColor(props.color,1)
      }
    }
    return style
  })

  const styleEffect3 = computed(()=>{
    let style = {
      borderLeft: `3px solid ${getColor(props.color,1)}`
    }
    if(props.type === 'border'){
      style = {
        borderLeft: `1px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'point'){
      style = {
        background: getColor(props.color,0.4)
      }
    }
    if(props.type === 'radius'){
      style = {
        border: `3px solid ${getColor(props.color,1)}`
      }
    }
    if(props.type === 'corners'){
      style = {}
    }
    if(props.type === 'sound'){
      style = {
        background: getColor(props.color,1)
      }
    }
    return style
  })

  const style = computed(()=>{
    return {
      background:getColor(props.background,1)
    }
  })

  function effectClick(evt:any){
    leftx.value = evt.offsetX
    topx.value = evt.offsetY
    activeEffectClick.value = true
    setTimeout(()=>{
      activeEffectClick.value = false
    },50)
  }

</script>

<template>
  <transition name="fade">
    <div v-if="props.active" :style="style" :class="[`pick-loading-background-${props.background}`,`pick-loading-color-${props.color}`,{'textAfter':textAfter}]" class="con-pick-loading" @click="effectClick" >
      <transition name="effect-click">
        <div v-if="activeEffectClick&&clickEffect" :style="styleEffectClick" class="effect-click"  />
      </transition>

      <h4 v-if="text" class="title-loading" >
        {{ text }}
      </h4>

      <div
        :style="{
          transform:`scale(${props.scale})`
        }"
        :class="[props.type]"
        class="pick-loading"
      >
        <div v-if="props.type!=='material'" :style="styleEffect1" class="effect-1 effects" />
        <div v-if="props.type!=='material'" :style="styleEffect2" class="effect-2 effects" />
        <div v-if="props.type!=='material'" :style="styleEffect3" class="effect-3 effects" />

        <img :src="props.src">

        <svg v-if="props.type==='material'" class="spinner" width="50px" height="50px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" >
          <circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    </div>
  </transition>
</template>
