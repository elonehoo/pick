<script setup lang="ts">
import {pickChip,pickChips} from '@elonehoo/pick'

const chips = $ref([
  'Discord',
  'GitHub',
  'Twitter',
  'Vuejs',
  'Pick',
])

function remove (item:string):void {
  chips.splice(chips.indexOf(item), 1)
}
</script>

<template>
  <div>
    <pick-chip style="width: 100px;">Basic Chip</pick-chip>
    <pick-chip closable style="width: 110px;">Closable chip</pick-chip>
    <br>
    <pick-chip color="primary" style="width: 100px;">Basic Chip</pick-chip>
    <pick-chip color="success" closable style="width: 110px;">Closable chip</pick-chip >
    <pick-chip color="dark" closeIcon="delete_forever" closable style="width: 110px;">Closable chip</pick-chip >
    <br>
    <pick-chip transparent color="primary" style="width: 100px;">Basic Chip</pick-chip>
    <pick-chip transparent color="success" closable style="width: 110px;">Closable chip</pick-chip >
    <br>
    {{chips}}
    <pick-chip v-for="(chip,index) in chips" :key="index" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
    <br />
    <br />
    <pick-chips color="rgb(145, 32, 159)" placeholder="New Element" :value="chips">
      <pick-chip v-for="(chip,index) in chips" :key="index" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
    </pick-chips>
    <br />
    <br />
    <pick-chips color="rgb(145, 32, 159)" placeholder="New Element" :value="chips" removeIcon="delete_forever">
      <pick-chip v-for="(chip,index) in chips" :key="index" closeIcon="delete_forever" @click="remove(chip)" closable style="width: 110px;">{{chip}}</pick-chip >
    </pick-chips>
  </div>
</template>

<style scoped>

</style>
