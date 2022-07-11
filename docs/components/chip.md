---
outline: deep
---

<script setup lang="ts">
import {ref} from 'vue'
import {pickChip,pickChips} from '@elonehoo/pick'

const chips = ref([
  'Discord',
  'GitHub',
  'Twitter',
  'Vuejs',
  'Pick',
])

function remove (item:string):void {
  chips.value.splice(chips.value.indexOf(item), 1)
}
</script>

# Chip

Chip are compact elements that represent an input, attribute, or action.

## Default

Helps you represent simple data with colorful options.

```vue
<template>
  <pick-chip style="width: 100px;">Basic Chip</pick-chip>
  <pick-chip closable style="width: 110px;">Closable chip</pick-chip>
</template>
```

<div style="display: flex;align-items: center;justify-content: center;">
  <pick-chip style="width: 100px;">Basic Chip</pick-chip>
  <pick-chip closable style="width: 110px;">Closable chip</pick-chip>
</div>

## Color

Change the background color of the chip.

```vue
<template>
  <pick-chip color="primary" style="width: 100px;">Basic Chip</pick-chip>
  <pick-chip color="success" closable style="width: 110px;">Closable chip</pick-chip >
  <pick-chip color="dark" closeIcon="delete_forever" closable style="width: 110px;">Closable chip</pick-chip >
</template>
```

<div style="display: flex;align-items: center;justify-content: center;">
  <pick-chip color="primary" style="width: 100px;">Basic Chip</pick-chip>
  <pick-chip color="success" closable style="width: 110px;">Closable chip</pick-chip >
  <pick-chip color="dark" closeIcon="delete_forever" closable style="width: 110px;">Closable chip</pick-chip >
</div>

## Transparent

You can create chip which have transparent background using `transparent` prop.

<div style="display: flex;align-items: center;justify-content: center;">
  <pick-chip transparent color="primary" style="width: 100px;">Basic Chip</pick-chip>
  <pick-chip transparent color="success" closable style="width: 110px;">Closable chip</pick-chip >
  <pick-chip transparent color="dark" closeIcon="delete_forever" closable style="width: 110px;">Closable chip</pick-chip >
</div>

## Closable

For making a chip closable.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickChip} from '@elonehoo/pick'

const chips = ref([
  'Discord',
  'GitHub',
  'Twitter',
  'Vuejs',
  'Pick',
])

function remove (item:string):void {
  chips.value.splice(chips.value.indexOf(item), 1)
}
</script>
<template>
  {{chips}}
  <pick-chip v-for="(chip,index) in chips" :key="index" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
</template>
```

<div>
  {{chips}}
  <div style="display: flex;align-items: center;justify-content: center;">
    <pick-chip v-for="(chip,index) in chips" :key="index" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
  </div>
</div>

## Add and Remove Items

You can add and remove chips with the `pick-chips` component. For the main parameter, pass the `value` property, which is an array representing each chip.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickChip,pickChips} from '@elonehoo/pick'

const chips = ref([
  'Discord',
  'GitHub',
  'Twitter',
  'Vuejs',
  'Pick',
])

function remove (item:string):void {
  chips.value.splice(chips.value.indexOf(item), 1)
}
</script>

<template>
  <pick-chips color="rgb(145, 32, 159)" placeholder="New Element" :value="chips">
    <pick-chip v-for="(chip,index) in chips" :key="index" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
  </pick-chips>
</template>
```

<div>
  <pick-chips color="rgb(145, 32, 159)" placeholder="New Element" :value="chips">
    <pick-chip v-for="(chip,index) in chips" :key="index" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
  </pick-chips>
</div>

## Customize Close and Clear Chips Icons

You can change the icons used for the close button and the clear button when using multiple chips with the `pick-chips` component. For the main parameter, pass the `removeIcon` property, which is the close icon that appears on each chip. You can change the Clear Chips button with the `removeIcon` property.

```vue
<script setup lang="ts">
import {ref} from 'vue'
import {pickChip,pickChips} from '@elonehoo/pick'

const chips = ref([
  'Discord',
  'GitHub',
  'Twitter',
  'Vuejs',
  'Pick',
])

function remove (item:string):void {
  chips.value.splice(chips.value.indexOf(item), 1)
}
</script>

<template>
  <pick-chips color="rgb(145, 32, 159)" placeholder="New Element" :value="chips" removeIcon="delete_forever">
    <pick-chip v-for="(chip,index) in chips" :key="index" closeIcon="delete_forever" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
  </pick-chips>
</template>
```

<div>
  <pick-chips color="rgb(145, 32, 159)" placeholder="New Element" :value="chips" removeIcon="delete_forever">
    <pick-chip v-for="(chip,index) in chips" :key="index" closeIcon="delete_forever" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
  </pick-chips>
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| color | string | RGB, HEX, primary, success, danger, warning, dark | Component color | primary |
| transparent | boolean | true/false | Create chip with transparent background | false |
| closable | boolean | | With closable button | false |
| icon | string | | With custom icon | |
| icon-pack | string | Icon Pack Class Name | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| close-icon | string | | provides an icon for the button to close chip. | clear |
| placeholder | string | | Placeholder text (only in pick-chips) | |
| remove-icon | string | | provides an icon for the button to remove chips (only in pick-chips) | close |
