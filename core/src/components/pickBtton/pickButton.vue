<script setup lang="ts">
import {Ref, ref} from 'vue'

const props = withDefaults(defineProps<{
  type?:string,
  color?:string,
  textColor?:string,
  lineOrigin?:string,
  linePosition?:string,
  gradientDirection?:string,
  gradientColorSecondary?:string,
  size?:string,
  icon?:string,
  iconPack?:string,
  iconAfter?:boolean,
  radius?:boolean,
  to?:any,
  href?:any,
  target?:boolean | string,
  button?:string
}>(),{
  type:'filled',
  color:'primary',
  textColor:'',
  lineOrigin:'center',
  linePosition:'bottom',
  gradientDirection:'30deg',
  gradientColorSecondary:'primary',
  size:'',
  icon:'',
  iconPack:'material-icons',
  iconAfter:false,
  radius:false,
  to:false,
  href:'',
  target:false,
  button:'button'
})

const isActive = ref<boolean>(false)

const hoverx = ref<boolean>(false)

const leftBackgorund = ref<number>(20)

const topBackgorund = ref<number>(20)

const radio = ref<number>(0)

const time = ref<number>(0.3)

const timeOpacity = ref<number>(0.3)

const opacity = ref<number>(1)

</script>

<template>

</template>

<style scoped>

</style>
