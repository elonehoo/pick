---
outline: deep
---

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

# Loading

Very simple to implement and remove.

## Default

To add a loading in any part of your application，we use the parameter `active` to control the display of the popup.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickButton,pickLoading} from '@elonehoo/pick'

const active = ref<boolean>(false)

function oploading(){
  active.value = true
  setTimeout( ()=> {
    active.value = false
  }, 2000);
}
</script>

<template>
  <pick-button @click="oploading()">Loading Default</pick-button>
  <pick-loading :active="active" ref="loading" />
</template>
```

<div>
  <pick-button @click="oploading()">Loading Default</pick-button>
  <pick-loading :active="active" ref="loading" />
</div>

## Type

You can change the type of animation with the `type` property and the animations so far are:

- point
- radius
- border
- corners
- sound
- material


```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickButton,pickLoading} from '@elonehoo/pick'

const types = [
  'default',
  'point',
  'radius',
  'corners',
  'border',
  'sound',
  'material',
]

function print(name:string){
  type.value = name
  active1.value = true
  setTimeout( ()=> {
    active1.value = false
  }, 3000);
}
</script>

<template>
  <template v-for="item in types" >
    <pick-button @click="print(item)">{{item}}</pick-button> &nbsp;&nbsp;
  </template>
  <pick-loading :active="active1" :type="type" ref="loading" />
</template>
```

<div>
  <template v-for="item in types" >
    <pick-button @click="print(item)">{{item}}</pick-button> &nbsp;&nbsp;
  </template>
  <pick-loading :active="active1" :type="type" ref="loading" />
</div>

## Color

You can change the color of the loading with the property `color`.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickButton,pickLoading} from '@elonehoo/pick'

const active2 = ref<boolean>(false)

function danger(){
  active2.value = true
  setTimeout( ()=> {
    active2.value = false
  }, 3000);
}
</script>

<template>
  <pick-button @click="danger()" color="danger" type="gradient" >Danger</pick-button>
  <pick-loading color="#7d0c3f" :active="active2" :type="type" ref="loading" />
</template>
```

<div>
  <pick-button @click="danger()" color="danger" type="gradient" >Danger</pick-button>
  <pick-loading color="#7d0c3f" :active="active2" :type="type" ref="loading" />
</div>

## Background

If you need to change the background of the loading, you can use the property `background`.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickButton,pickLoading} from '@elonehoo/pick'

const active3 = ref<boolean>(false)

function success(){
  active3.value = true
  setTimeout( ()=> {
    active3.value = false
  }, 3000);
}
</script>

<template>
  <pick-button color="success" type="gradient" @click="success()" >Success</pick-button>
  <pick-loading background="#22c16b" color="#FFFFFF" :active="active3" :type="type" ref="loading" />
</template>
```

<div>
  <pick-button color="success" type="gradient" @click="success()" >Success</pick-button>
  <pick-loading background="#22c16b" color="#FFFFFF" :active="active3" :type="type" ref="loading" />
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| active | boolean | | The switch that controls the appearance of loading | false |
| color | string | RGB, HEX, primary, danger, success, dark, warning | Color of loading. | |
| type | string | default, point, reduis, border, corners, sound, material | Change the type of animation. | default |
| background | string | RGB, HEX, primary, danger, success, dark, warning | loading background. | rgba(255, 255, 255,0.6) |
