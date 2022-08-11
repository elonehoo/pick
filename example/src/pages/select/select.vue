<script setup lang="ts">
import {ref} from 'vue'
import {pickSelect} from '@elonehoo/pick'

const select1 = ref(2)
</script>

<template>
  <div>
    <pick-select label="Figuras" v-model="select1" ></pick-select>
  </div>
</template>
