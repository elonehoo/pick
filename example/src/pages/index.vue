<script setup lang="ts">
import {pickRow,pickCol} from '@elonehoo/pick'

const flex:string = $ref('flex')
</script>

<template>
  <div>
    <pick-row class="row">
      <pick-col class="col border-right" type="flex" justify="center" align="center" :w="12">100%</pick-col>
    </pick-row>
    <pick-row class="row">
      <pick-col v-for="item in 2" :key="item" :class="item === 2 ? 'border-right' : ''" class="col" :type="flex" justify="center" align="center" :w="6">50%</pick-col>
    </pick-row>
    <pick-row class="row">
      <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right' : ''" class="col" :type="flex" justify="center" align="center" :w="4">33.3%</pick-col>
    </pick-row>
    <pick-row class="row">
      <pick-col v-for="item in 4" :key="item" :class="item === 4 ? 'border-right' : ''" class="col" :type="flex" justify="center" align="center" :w="3">25%</pick-col>
    </pick-row>
    <pick-row class="row">
      <pick-col v-for="item in 6" :key="item" :class="item === 6 ? 'border-right' : ''" class="col" :type="flex" justify="center" align="center" :w="2">16.6%</pick-col>
    </pick-row>
    <pick-row class="row">
      <pick-col v-for="item in 12" :key="item" :class="item === 12 ? 'border-right' : ''" class="col border-bottom" :type="flex" justify="center" align="center" :w="1">16.6%</pick-col>
    </pick-row>
</div>
</template>

<style scoped>
.row{
  background:#f5f5f5;
  color: #969696;
  border-top:1px solid #d2d2d2;
}
.col{
  padding: 7px !important;
  border-left: 1px solid #d2d2d2;

}
.border-right{
  border-right: 1px solid #d2d2d2;
}
.border-bottom{
  border-bottom: 1px solid #d2d2d2;
}
</style>
