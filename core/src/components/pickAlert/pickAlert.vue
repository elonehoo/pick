<script setup lang="ts">
import { computed,onMounted,ref,nextTick } from 'vue'
import { pickIcon } from '../pickIcon'
import {getColor} from '../../util/color'

const props = withDefaults(defineProps<{
  active?: boolean | string,
  title?: string,
  closable?:boolean,
  color?:string,
  margin?:string | boolean,
  icon?:string,
  closeIcon?:string,
  iconPack:string
}>(),{
  active:true,
  title:'',
  closable:false,
  color:'primary',
  margin:'10px',
  icon:'',
  closeIcon:'close',
  iconPack:'material-icons'
})


const styleAlert = computed(()=>{
  return {
    background: getColor(props.color,.15),
    boxShadow: `0px 0px 25px 0px ${getColor(props.color,.15)}`,
    color: getColor(props.color,1)
  }
})

const styleTitle = computed(()=>{
  return {
    boxShadow: `0px 6px 15px -7px ${getColor(props.color,.4)}`
  }
})

const alerts:any = ref()

onMounted(()=>{
  if(alerts) {
      nextTick(() => {
        let h = alerts.value.scrollHeight
        alerts.value.style.height = h + 'px'
      })
    }
})

function beforeEnter(el:any){
  el.style.height = 0
  el.style.opacity = 0
}

function enter(el:any,done:any){
  let h:any = alerts.value.scrollHeight
  alerts.value.style.height = h + 'px'
  el.style.opacity = 1
  done()
}

function leave(el:any){
  alerts.value.style.height = 0
  el.style.opacity = 0
}

</script>

<template>
  <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div
     v-show="props.active"
     ref="alerts"
     :class="[`con-pick-alert-${props.color}`,{'con-icon':props.icon,}]"
     :style="styleAlert"
     class="con-pick-alert"
     v-on="$attrs">
      <div
       v-if="props.closable"
       class="con-x pick-alert--close"
       @click="$emit('update:active',false)">
        <pick-icon :icon-pack="props.iconPack" :icon="props.closeIcon"/>
      </div>
      <h4 v-if="props.title" :style="styleTitle" class="titlex pick-alert--title" v-text="props.title" />
      <div :class="{'con-icon': props.icon}" class="pick-alert">
        <pick-icon v-if="props.icon" :icon-pack="iconPack" :icon="icon" class="icon-alert" />
        <slot/>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.con-pick-alert {
  border-radius: 6px;
  color: #fff;
  width: 100%;
  position: relative;
  font-size: 0.8rem;
  cursor: default;
  transition: all 0.25s ease;
  overflow: hidden;
}
.icon-alert {
  height: 100%;
  position: absolute;
  padding: 10px;
  padding-top: 0px;
  left: 0px;
  top: 0px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}
.pick-alert {
  padding: 10px;
  overflow: hidden;
  position: relative;
  padding-left: 40px;
}
.pick-alert--title {
  font-size: 0.9rem;
  font-weight: bold;
  padding: 8px 10px;
}
.pick-alert--close {
    position: relative;
    float: right;
    margin-top: 4px;
    display: block;
    padding: 4px;
    border-radius: 6px;
    padding-bottom: 1px;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}
.pick-alert--close:hover {
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.1);
}

.con-pick-alert-primary {
  background: rgb(31, 116, 255,0.15);
  box-shadow: 0px 0px 25px 0px rgb(31, 116, 255,0.15);
  color: rgb(31, 116, 255,1);
}
.con-pick-alert-primary h4 {
  box-shadow: 0px 6px 15px -7px rgb(31, 116, 255,0.4);
}
.con-pick-alert-primary .con-x {
  background: rgb(31, 116, 255,1);
  color: #fff;
}

.con-pick-alert-secondary {
  background: rgb(121, 49, 177,0.15);
  box-shadow: 0px 0px 25px 0px rgb(121, 49, 177,0.15);
  color: rgb(121, 49, 177,1);
}
.con-pick-alert-secondary h4 {
  box-shadow: 0px 6px 15px -7px rgb(121, 49, 177,0.4);
}
.con-pick-alert-secondary .con-x {
  background: rgb(121, 49, 177,1);
  color: #fff;
}

.con-pick-alert-danger {
  background: rgb(255, 71, 87,0.15);
  box-shadow: 0px 0px 25px 0px rgb(255, 71, 87,0.15);
  color: rgb(255, 71, 87,1);
}
.con-pick-alert-danger h4 {
  box-shadow: 0px 6px 15px -7px rgb(255, 71, 87,0.4);
}
.con-pick-alert-danger .con-x {
  background: rgb(255, 71, 87,1);
  color: #fff;
}

.con-pick-alert-success {
  background: rgb(70, 201, 58,0.15);
  box-shadow: 0px 0px 25px 0px rgb(70, 201, 58,0.15);
  color: rgb(70, 201, 58,1);
}
.con-pick-alert-success h4 {
  box-shadow: 0px 6px 15px -7px rgb(70, 201, 58,0.4);
}
.con-pick-alert-success .con-x {
  background: rgb(70, 201, 58,1);
  color: #fff;
}

.con-pick-alert-warning {
  background: rgb(255,186,0,0.15);
  box-shadow: 0px 0px 25px 0px rgb(255,186,0,0.15);
  color: rgb(255,186,0,1);
}
.con-pick-alert-warning h4 {
  box-shadow: 0px 6px 15px -7px rgb(255,186,0,0.4);
}
.con-pick-alert-warning .con-x {
  background: rgb(255,186,0,1);
  color: #fff;
}

.con-pick-alert-dark {
  background: rgb(30,30,30,0.15);
  box-shadow: 0px 0px 25px 0px rgb(30,30,30,0.15);
  color: rgb(30,30,30,1);
}
.con-pick-alert-dark h4 {
  box-shadow: 0px 6px 15px -7px rgb(30, 30, 30,0.4);
}
.con-pick-alert-dark .con-x {
  background: rgb(30, 30, 30,1);
  color: #fff;
}

.con-pick-alert-light {
  background: rgb(245, 245, 245,0.15);
  box-shadow: 0px 0px 25px 0px rgb(245, 245, 245,0.15);
  color: rgb(245, 245, 245,1);
}
.con-pick-alert-light h4 {
  box-shadow: 0px 6px 15px -7px rgb(245, 245, 245,0.4);
}
.con-pick-alert-light .con-x {
  background: rgb(245, 245, 245,1);
  color: #fff;
}
</style>
