<script setup lang="ts">
import {ref} from 'vue'
import {pickButton,pickLoading} from '@elonehoo/pick'

const loading = ref(null)

const active = ref<boolean>(false)
const active1 = ref<boolean>(false)
const active2 = ref<boolean>(false)
const active3 = ref<boolean>(false)

const type = ref<string>('default')

const types = [
  'default',
  'point',
  'radius',
  'corners',
  'border',
  'sound',
  'material',
]

function oploading(){
  active.value = true
  setTimeout( ()=> {
    active.value = false
  }, 2000);
}

function print(name:string){
  type.value = name
  active1.value = true
  setTimeout( ()=> {
    active1.value = false
  }, 3000);
}

function danger(){
  active2.value = true
  setTimeout( ()=> {
    active2.value = false
  }, 3000);
}

function success(){
  active3.value = true
  setTimeout( ()=> {
    active3.value = false
  }, 3000);
}

</script>

<template>
  <div>
    <pick-button @click="oploading()">Loading Default</pick-button>
    <pick-loading :active="active" ref="loading" />
    <br />
    <br />
    <template v-for="item in types" >
      <pick-button @click="print(item)">{{item}}</pick-button> &nbsp;&nbsp;
    </template>
    <pick-loading :active="active1" :type="type" ref="loading" />
    <br />
    <br />
    <pick-button @click="danger()" color="danger" type="gradient" >Danger</pick-button>
    <pick-loading color="#7d0c3f" :active="active2" :type="type" ref="loading" />
    <br />
    <br />
    <pick-button color="success" type="gradient" @click="success()" >Success</pick-button>
    <pick-loading background="#22c16b" color="#FFFFFF" :active="active3" :type="type" ref="loading" />
  </div>
</template>
