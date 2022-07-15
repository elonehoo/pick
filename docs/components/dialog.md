---
outline: deep
---

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

function dialogAccept(value:any){
  dialogActive.value = false
}

function dialogCancel1() {
  if(acceptFlag.value === true){
    dialogActive6.value = false
  }
}

function dialogAccept1(value:any){
  acceptFlag.value = true
  dialogCancel1()
}
</script>

# Dialog

Dialogs very easy to implement and practical to use in any case and need.

## Basic

```vue
<script setup lang="ts">
  import {ref} from 'vue'
  import {pickDialog,pickButton} from '@elonehoo/pick'

  const dialogActive = ref<boolean>(false)

  const baseColor = ref<string>('primary')

  function showDialog(color:string){
    dialogActive.value = true
    baseColor.value = color
  }

  function dialogCancel() {
    dialogActive.value = false
  }

  function dialogAccept(value:any){
    dialogActive.value = false
  }
</script>
<template>
  <div>
    <pick-button @click="showDialog('primary')" type="flat">Alert Primary</pick-button>&nbsp;
    <pick-button @click="showDialog('success')" color="success" type="flat">Alert Success</pick-button>&nbsp;
    <pick-button @click="showDialog('danger')" color="danger" type="flat">Alert Danger</pick-button>&nbsp;
    <pick-button @click="showDialog('warning')" color="warning" type="flat">Alert Warning</pick-button>&nbsp;
    <pick-button @click="showDialog('dark')" color="dark" type="flat">Alert Dark</pick-button>&nbsp;
    <pick-button @click="showDialog('#3dd495')" color="#3dd495" type="flat">Alert HEX</pick-button>&nbsp;

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - primary" :active="dialogActive" :color="baseColor">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>
  </div>
</template>
```

<div>
  <pick-button @click="showDialog('primary')" type="flat">Alert Primary</pick-button>&nbsp;
  <pick-button @click="showDialog('success')" color="success" type="flat">Alert Success</pick-button>&nbsp;
  <pick-button @click="showDialog('danger')" color="danger" type="flat">Alert Danger</pick-button>&nbsp;
  <pick-button @click="showDialog('warning')" color="warning" type="flat">Alert Warning</pick-button>&nbsp;
  <pick-button @click="showDialog('dark')" color="dark" type="flat">Alert Dark</pick-button>&nbsp;
  <pick-button @click="showDialog('#3dd495')" color="#3dd495" type="flat">Alert HEX</pick-button>&nbsp;

  <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - primary" :active="dialogActive" :color="baseColor">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </pick-dialog>
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| title | string | | Main title of the dialog. | Dialog |
| color | string | | Dialog color and accept buttons. | primary |
| accept | Function | | function that is executed when the user approves the dialog. | |
| cancel | Function | | Function that executes the user cancel the dialog. | |
| close | Function | | function that is executed when the dialog as closed. | |
| isValid | boolean | | Determines if it is valid to be able to accept at the prompt. | |
| buttonsHidden | boolean | | Determines if the component has hidden or visible buttons. | false |
| buttonAccept | string | 'filled','border','flat',<br />'line','gradient','relief' | Change the type of botton for the accept. | filled |
| buttonCancel | string | 'filled','border','flat',<br />'line','gradient','relief' | Change the type of botton for the accept. | flat |
| acceptText | string | | Change the text of the accept button. | Accept |
| cancelText | string | | Change the text of the accept button. | Cancel |
| iconPack | string | | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| closeIcon | string | | Determines the icon | |
