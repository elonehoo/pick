<script setup lang="ts">
import {computed, StyleValue} from 'vue'
import {isColor,getColor} from '../../util/color'

const props = withDefaults(defineProps<{
  badge?: boolean | string | number,
  badgeColor?: string,
  size?: string,
  src?: string,
  textColor?:string,
  text?: string,
  color?:string
}>(),{
  badge: false,
  badgeColor: 'danger',
  size:'',
  src:'',
  textColor:'rgb(255, 255, 255)',
  text:'PICK',
  color:'rgb(195, 195, 195)'
})


const avatarClass = computed(()=>{
  let classes:any = {}
  if(props.size !== ''){
    classes[props.size] = true
  }
  if(isColor(props.color)){
    classes[`con-pick-avatar-${props.color}`] = true
  }
  return classes
})

const avatarStyle = computed(()=>{
  const style:any = {
    width: /[px]/.test(props.size) ? props.size : null,
    height: /[px]/.test(props.size) ? props.size : null,
  }
  if (!isColor(props.color)) {
    style.background = getColor(props.color)
  }
  return style
})

const badgeClass = computed(()=>{
  const classes:any = {
    badgeNumber: (typeof props.badge != 'boolean')
  }
  if (isColor(props.badgeColor)) {
    classes[`dot-count-${props.badgeColor}`] = true
  }
  return classes
})

const badgeStyle = computed(()=>{
  const style:any = {}
  if (!isColor(props.badgeColor)) {
    style.background = getColor(props.badgeColor)
  }
  return style
})

const textClass = computed(()=>{
  const classes:any = {
    'material-icons': !props.text,
  }
  if (isColor(props.textColor)) {
    classes[`pick-avatar-text-${props.textColor}`] = true
  }
  return classes
})

const textStyle = computed(()=>{
  const style:StyleValue = {
    transform:'',
    color:''
  }
  style.transform = `translate(-50%,-50%) scale(${returnScale.value})`
  if (!isColor(props.textColor)) {
    style.color = getColor(props.textColor)
  }
  return style
})

const returnText:any = computed(()=>{
  if(props.text.length <= 5) {
    return props.text
  }
  let exp = /\s/g
  var letras = ''
  if(exp.test(props.text)) {
    props.text.split(exp).forEach((word:string)=>{
      letras += word[0].toUpperCase()
    })
  } else {
    letras = props.text[0].toUpperCase()
  }
  return letras.length > 5 ? letras[0] : letras
})

const returnScale = computed(()=>{
  if(!props.text) return 1
      let lengthx = returnText.value.length
      if(lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50)
      } else {
        return 1
      }
})
</script>

<template>
  <div
   v-bind="$attrs"
   :style="avatarStyle"
   :class="avatarClass"
   class="con-pick-avatar">
    <div
     v-if="props.badge && props.badge> 0"
     :style="badgeStyle"
     :class="badgeClass"
     class="dot-count pick-avatar--count">
      {{ typeof props.badge != 'boolean' ? props.badge : null }}
    </div>
    <div v-if="props.src" class="con-img pick-avatar--con-img">
      <img :src="props.src" :alt="props.text">
    </div>
    <span
     v-else
     :title="props.text"
     :style="textStyle"
     :class="[props.text ? '' : props.text ? '' : textClass]"
     translate="no"
     class="pick-avatar--text notranslate">
      {{ props.text ? returnText : '' }}
    </span>
  </div>
</template>

<style scoped>
.con-pick-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
}
.con-pick-avatar.large {
  width: 50px;
  height: 50px;
}
.con-pick-avatar.small {
  width: 24px;
  height: 24px;
}
.con-pick-avatar.small .pick-avatar-text {
  font-size: 0.9375em;
}
.pick-avatar--count {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  z-index: 100;
}
.pick-avatar--count.badgeNumber {
  width: auto;
  height: auto;
  top: -3px;
  right: 0px;
  border-radius: 4px;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 0.625em;
  color: #fff;
}
.pick-avatar--text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.pick-avatar--con-img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.pick-avatar--con-img img {
  width: 100%;
}
.con-pick-avatar-primary{
  background: rgb(31, 116, 255,1);
}
.dot-count-primary{
  background: rgb(31, 116, 255,1);
}
.pick-avatar-text-primary{
  background: rgb(31, 116, 255,1);
}
.con-pick-avatar-secondary{
  background: rgb(121, 49, 177,1);
}
.dot-count-secondary{
  background: rgb(121, 49, 177,1);
}
.pick-avatar-text-secondary{
  background: rgb(121, 49, 177,1);
}
.con-pick-avatar-danger{
  background: rgb(255, 71, 87,1);
}
.dot-count-danger{
  background: rgb(255, 71, 87,1);
}
.pick-avatar-text-danger{
  background: rgb(255, 71, 87,1);
}
.con-pick-avatar-success{
  background: rgb(70, 201, 58,1);
}
.dot-count-success{
  background: rgb(70, 201, 58,1);
}
.pick-avatar-text-success{
  background: rgb(70, 201, 58,1);
}
.con-pick-avatar-warning{
  background: rgb(255,186,0,1);
}
.dot-count-warning{
  background: rgb(255,186,0,1);
}
.pick-avatar-text-warning{
  background: rgb(255,186,0,1);
}
.con-pick-avatar-dark{
  background: rgb(30, 30, 30,1);
}
 .dot-count-dark{
  background: rgb(30, 30, 30,1);
}
 .pick-avatar-text-dark{
  background: rgb(30, 30, 30,1);
}
.con-pick-avatar-light{
  background: rgb(245, 245, 245,1);
}
 .dot-count-light{
  background: rgb(245, 245, 245,1);
}
 .pick-avatar-text-light{
  background: rgb(245, 245, 245,1);
}
</style>
