<script setup lang="ts">
import {ref} from 'vue'
import {pickSelect,pickSelectItem} from '@elonehoo/pick'

const select1 = ref(2)

const options1 = ref([
  {text:'IT',value:0},
  {text:'Blade Runner',value:2},
  {text:'Thor Ragnarok',value:3},
])
</script>

<template>
  <div>
    <pick-select label="Figuras" v-model="select1" >
      <pick-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </pick-select>
  </div>
</template>
