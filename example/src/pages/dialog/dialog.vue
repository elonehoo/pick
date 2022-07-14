<script setup lang="ts">
import {ref} from 'vue'
import {pickDialog,pickButton} from '@elonehoo/pick'

const dialogActive = ref<boolean>(false)

function dialogCancel() {
  dialogActive.value = false
}

function dialogAccept(value:any){
  console.log('1')
}
</script>

<template>
  <div>
    <pick-button @click="dialogActive = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - primary" :active="dialogActive" color="primary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

  </div>
</template>

<style scoped>

</style>
