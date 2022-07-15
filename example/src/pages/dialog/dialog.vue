<script setup lang="ts">
import {ref} from 'vue'
import {pickDialog,pickButton} from '@elonehoo/pick'

const dialogActive = ref<boolean>(false)

const baseColor = ref<string>('primary')

function showDialog(color:string){
  dialogActive.value = true
  baseColor.value = color
}

const dialogActive6 = ref<boolean>(false)
const acceptFlag = ref<boolean>(false)

function dialogCancel() {
  dialogActive.value = false
}

function dialogCancel1() {
  if(acceptFlag.value === true){
    dialogActive6.value = false
  }
}

function dialogAccept(value:any){

}

function dialogAccept1(value:any){
  acceptFlag.value = true
  dialogCancel1()
}
</script>

<template>
  <div>
    <pick-button @click="showDialog('primary')">Alert Primary</pick-button>&nbsp;
    <pick-button @click="showDialog('success')" color="success">Alert Success</pick-button>&nbsp;
    <pick-button @click="showDialog('danger')" color="danger">Alert Danger</pick-button>&nbsp;
    <pick-button @click="showDialog('warning')" color="warning">Alert Warning</pick-button>&nbsp;
    <pick-button @click="showDialog('dark')" color="dark">Alert Dark</pick-button>&nbsp;
    <pick-button @click="showDialog('#3dd495')" color="#3dd495">Alert HEX</pick-button>&nbsp;

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - primary" :active="dialogActive" :color="baseColor">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="danger" @click="dialogActive6 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogActive6 = false" @accept="dialogAccept1" @close="dialogCancel1" title="Dialog - danger" :active="dialogActive6" color="danger">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>
  </div>
</template>

<style scoped>

</style>
