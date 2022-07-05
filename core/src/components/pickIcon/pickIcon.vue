<script setup lang="ts">
import { computed } from 'vue'
import {isColor} from '../../util/color'
const props = withDefaults(defineProps<{
  icon?:string,
  iconPack?:string,
  color?:string,
  bg?:string,
  size?:string,
  round?:boolean
}>(),{
  icon:'',
  iconPack:'material-icons',
  color:'',
  bg:'',
  size:'',
  round:false
})

const iconClass = computed(()=>{
  const classes:any = {}
  classes[props.size] = true
  if (isColor(props.color)) {
    classes[`pick-icon-${props.color}`] = true
  }
  return classes
})

const iconStyle = computed(()=>{
  const style = {
    width: /(px)/.test(props.size) ? props.size : /(em)/.test(props.size) ? props.size : undefined,
    height: /(px)/.test(props.size) ? props.size : /(em)/.test(props.size) ? props.size : undefined,
    'font-size': /(px)/.test(props.size) ? props.size : /(em)/.test(props.size) ? props.size : undefined,
    color: getColor.value,
    background: getBgColor.value
  }
  return style
})

const getBg = computed(()=>{
  const classes:any = {}
  if (isColor(props.bg)) {
    classes[`con-pick-icon-bg-${props.bg}`] = true
  }
  return classes
})

const getBgSize = computed(()=>{
  const classes:any = {}
  if(['small','medium','large'].includes(props.size))  {
    classes[`bg-${props.size}`] = true;
    classes['pick-icon-bg'] = true;
  }
  return classes
})

const getColor = computed(()=>{
  return isColor(props.color) ? props.color : props.color
})

const getBgColor = computed(()=>{
  return isColor(props.bg) ? props.bg : props.bg
})
</script>

<template>
  <i
   :style="iconStyle"
   :class="[iconPack, iconPack !='material-icons' ? icon : '',iconClass,getBg,getBgSize,{'round':round}]"
   class="pick-icon notranslate icon-scale"
   v-bind="$attrs"
  >
    <slot>{{ iconPack == 'material-icons' ? icon : '' }}</slot>
  </i>
</template>

<style scoped>
.pick-icon {
  color: inherit;
  text-align: center;
  font-size: 1rem;
}
.pick-icon.large {
  font-size: 3.125rem;
  width: 3.125rem;
  height: 3.125rem;
}
.pick-icon.medium {
  font-size: 2.31rem;
  width: 2.31rem;
  height: 2.31rem;
}
.pick-icon.small {
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
.pick-icon-bg {
  width: 1rem;
  height: 1rem;
}
.pick-icon-bg.bg-large {
  width: 3.125rem;
  height: 3.125rem;
}
.pick-icon-bg.bg-medium {
  width: 2.31rem;
  height: 2.31rem;
}
.pick-icon-bg.bg-small {
  width: 1.5rem;
  height: 1.5rem;
}
.round {
  border-radius: 50%;
}
.con-pick-icon-bg-primary{
  background: rgb(31, 116, 255,1)
}
.dot-count-primary{
  background: rgb(31, 116, 255,1)
}
.pick-icon-primary{
  color: rgb(31, 116, 255,1)
}

.con-pick-icon-bg-secondary{
  background: rgb(121, 49, 177,1)
}
.dot-count-secondary{
  background: rgb(121, 49, 177,1)
}
.pick-icon-secondary{
  color: rgb(121, 49, 177,1)
}

.con-pick-icon-bg-danger{
  background: rgb(255, 71, 87,1)
}
.dot-count-danger{
  background: rgb(255, 71, 87,1)
}
.pick-icon-danger{
  color: rgb(255, 71, 87,1)
}

.con-pick-icon-bg-success{
  background: rgb(70, 201, 58,1)
}
.dot-count-success{
  background: rgb(70, 201, 58,1)
}
.pick-icon-success{
  color: rgb(70, 201, 58,1)
}

.con-pick-icon-bg-warning{
  background: rgb(255,186,0,1)
}
.dot-count-warning{
  background: rgb(255,186,0,1)
}
.pick-icon-warning{
  color: rgb(255,186,0,1)
}

.con-pick-icon-bg-dark{
  background: rgb(30, 30, 30,1)
}
.dot-count-dark{
  background: rgb(30, 30, 30,1)
}
.pick-icon-dark{
  color: rgb(30, 30, 30,1)
}

.con-pick-icon-bg-light{
  background: rgb(245, 245, 245,1)
}
.dot-count-light{
  background: rgb(245, 245, 245,1)
}
.pick-icon-light{
  color: rgb(245, 245, 245,1)
}
</style>
