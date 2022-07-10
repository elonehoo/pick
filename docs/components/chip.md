---
outline: deep
---

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
