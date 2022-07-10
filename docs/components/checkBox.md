---
outline: deep
---

<script setup lang="ts">
import {ref} from 'vue'
import {pickCheckBox,pickRow,pickCol} from '@elonehoo/pick'

let checkBox1 = ref<boolean>(true)

let checkBox2 = ref<string>('')

function demo(event:boolean){
  checkBox1.value = event
}

function demo2(event:string){
  checkBox2.value = event
}

</script>

# CheckBox

Aggressive and impacting effect and the most important functional

## State

To add a checkBox, we have the `pick-check-box` component which expects a principal parameter `:value`.

```vue
<template>
  <pick-check-box @input="vent => {checkBox1 = vent}" :value="checkBox1">Primary</pick-check-box>
  <pick-check-box disabled >Primary</pick-check-box>
</template>
```

<div>
  <pick-row>
    <pick-col :w="6">
      <pick-check-box @input="vent => {checkBox1 = vent}" :value="checkBox1">Primary</pick-check-box>
    </pick-col>
    <pick-col :w="6">
      <pick-check-box disabled >Primary</pick-check-box>
    </pick-col>
  </pick-row>
</div>

## Colors

You can change the color of the checkBox with the property `color`. You are able to use the **Pick Colors** or **RGB** and **HEX** colors.

```vue
<template>
  <pick-check-box >Primary</pick-check-box>
  <pick-check-box color="success">Success</pick-check-box>
  <pick-check-box color="danger">Danger</pick-check-box>
  <pick-check-box color="warning">Warning</pick-check-box>
  <pick-check-box color="dark">Dark</pick-check-box>
  <pick-check-box color="rgb(38, 187, 174)">RGB</pick-check-box>
  <pick-check-box color="#720ea8">HEX</pick-check-box>
</template>
```

<div>
  <pick-row>
    <pick-col :w="2">
      <pick-check-box >Primary</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box color="success">Success</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box color="danger">Danger</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box color="warning">Warning</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box color="dark">Dark</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box color="rgb(38, 187, 174)">RGB</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box color="#720ea8">HEX</pick-check-box>
    </pick-col>
  </pick-row>
</div>

## Boolean Value

In most cases you will need a boolean data type while working with checkBoxes. For making this possible you have to link a boolean value in `:value`.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickCheckBox,pickRow,pickCol} from '@elonehoo/pick'

let checkBox1 = ref<boolean>(true)

function demo(event:boolean){
  checkBox1.value = event
}
</script>

<template>
  <pick-check-box @input="demo" :value="checkBox1" >{{checkBox1}}</pick-check-box>
</template>
```

<div>
  <pick-row>
    <pick-col :w="6" :offset="3">
      <pick-check-box @input="demo" :value="checkBox1" >{{checkBox1}}</pick-check-box>
    </pick-col>
  </pick-row>
</div>

## String Value

You can pass as a value a string by giving it as a value of the property `pickValue`.

```vue
<template>
  <pick-check-box @input="demo2" :value="checkBox2" pickValue="Elone Hoo" >Elone Hoo</pick-check-box>
</template>
```

<div>
  <pick-row>
   <pick-col :w="4" :offset="4" style="text-align:center">
      {{checkBox2 === undefined ?'null':checkBox2}}
    </pick-col>
  </pick-row>
  <pick-row>
    <pick-col :w="4" :offset="4">
      <pick-check-box @input="demo2" :value="checkBox2" pickValue="Elone Hoo" >Elone Hoo</pick-check-box>
    </pick-col>
  </pick-row>
</div>

## Change Icon

Sometimes we want to change the internal icon inside the checkbox. To do so, we have the property `icon`

```vue
<template>
  <pick-check-box >Primary</pick-check-box>
  <pick-check-box icon="sms" color="success">SMS</pick-check-box>
  <pick-check-box icon="close" color="danger">Close</pick-check-box>
  <pick-check-box icon="attach_file" color="warning">Attach File</pick-check-box>
  <pick-check-box icon="format_bold" color="dark">Format Bold</pick-check-box>
  <pick-check-box icon="location_searching" color="rgb(38, 187, 174)">Location Searching</pick-check-box>
  <pick-check-box icon="camera_alt" color="#720ea8">Camera Alt</pick-check-box>
</template>
```

<div>
  <pick-row>
    <pick-col :w="2">
      <pick-check-box >Primary</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box icon="sms" color="success">SMS</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box icon="close" color="danger">Close</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box icon="attach_file" color="warning">Attach File</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box icon="format_bold" color="dark">Format Bold</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box icon="location_searching" color="rgb(38, 187, 174)">Location Searching</pick-check-box>
    </pick-col>
    <pick-col :w="2">
      <pick-check-box icon="camera_alt" color="#720ea8">Camera Alt</pick-check-box>
    </pick-col>
  </pick-row>
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| value | any | | Link values. | |
| pickValue | any | | Value if different from a boolean. | |
| color | string | primary, success, danger, warning, dark, RGB, HEX | Color options for checkBox. | primary |
| icon | String | Material Icons | 	Change the checkBox icon. | checked |
| icon-pack | string | Icon Pack Class Name | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| input | Function |  | modify the entered value | |
| change | Function |  | modify the entered value | |
