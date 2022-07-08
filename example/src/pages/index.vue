<script setup lang="ts">
import { pickCol, pickRow } from '@elonehoo/pick'
</script>

<template>
  <div>
    <div>
      <pick-row class="row background">
        <pick-col class=" border-left border-right" type="flex" justify="center" align="center" :w="12">
          100%
        </pick-col>
      </pick-row>
      <pick-row class="row background">
        <pick-col v-for="item in 2" :key="item" :class="item === 2 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="6">
          50%
        </pick-col>
      </pick-row>
      <pick-row class="row background">
        <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="4">
          33.3%
        </pick-col>
      </pick-row>
      <pick-row class="row background">
        <pick-col v-for="item in 4" :key="item" :class="item === 4 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="3">
          25%
        </pick-col>
      </pick-row>
      <pick-row class="row background">
        <pick-col v-for="item in 6" :key="item" :class="item === 6 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="2">
          16.6%
        </pick-col>
      </pick-row>
      <pick-row class="row background">
        <pick-col v-for="item in 12" :key="item" :class="item === 12 ? 'border-right' : ''" class=" border-left border-bottom" type="flex" justify="center" align="center" :w="1">
          8.3%
        </pick-col>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row " :w="12">
        <pick-col class=" background border-left border-right" :offset="5" type="flex" justify="center" align="center" :w="6">
          offset - 6
        </pick-col>
      </pick-row>
      <pick-row class="row " :w="12">
        <pick-col class=" background border-left border-right" :offset="0" type="flex" justify="center" align="center" :w="2">
          offset - 2
        </pick-col>
      </pick-row>
      <pick-row class="row " :w="12">
        <pick-col class=" background border-left border-right" :offset="2" type="flex" justify="center" align="center" :w="8">
          offset - 8
        </pick-col>
      </pick-row>
      <pick-row class="row " :w="12">
        <pick-col class=" background border-left border-right" :offset="10" type="flex" justify="center" align="center" :w="1">
          offset - 7
        </pick-col>
      </pick-row>
      <pick-row class="row border-bottom" :w="12">
        <pick-col class=" background border-left border-right" :offset="4" type="flex" justify="center" align="center" :w="4">
          offset - 4
        </pick-col>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row">
        <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2">
          offset - 6
        </pick-col>
      </pick-row>
      <pick-row class="row" type="flex" justify="center">
        <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2">
          offset - 6
        </pick-col>
      </pick-row>
      <pick-row class="row" type="flex" justify="flex-end">
        <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2">
          offset - 6
        </pick-col>
      </pick-row>
      <pick-row class="row" type="flex" justify="space-around">
        <pick-col v-for="item in 3" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2">
          offset - 6
        </pick-col>
      </pick-row>
      <pick-row class="row" type="flex" justify="space-between">
        <pick-col v-for="item in 3" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2">
          offset - 6
        </pick-col>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row border-bottom" align="flex-start" type="flex" justify="center" :w="12">
        <pick-row v-for="item in 4" :key="item" :class="item === 4 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2">
          col - 3
        </pick-row>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row border-bottom" align="center" type="flex" justify="space-around" :w="12">
        <pick-row v-for="item in 4" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2">
          col - 3
        </pick-row>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row border-bottom" align="center" type="flex" justify="space-between" :w="12">
        <pick-row v-for="item in 4" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2">
          col - 3
        </pick-row>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row border-bottom" type="flex">
        <pick-col class="background border-left" order="3" type="flex" justify="center" align="center" :w="3">
          1 / order 3
        </pick-col>
        <pick-col class="background border-left" order="1" type="flex" justify="center" align="center" :w="3">
          2 / order 1
        </pick-col>
        <pick-col class="background border-left border-right" order="4" type="flex" justify="center" align="center" :w="3">
          3 / order 4
        </pick-col>
        <pick-col class="background border-left" order="2" type="flex" justify="center" align="center" :w="3">
          4 / order 2
        </pick-col>
      </pick-row>
    </div>
    <br><br><br>
    <div>
      <pick-row class="row border-bottom" :w="12">
        <pick-col class="background border-left" type="flex" justify="center" align="center" lg="2" sm="4" xs="12">
          vs-lg="2" vs-sm="4" vs-xs="12"
        </pick-col>
        <pick-col class="background border-left" type="flex" justify="center" align="center" lg="8" sm="4" xs="12">
          vs-lg="8" vs-sm="4" vs-xs="12"
        </pick-col>
        <pick-col class="background border-left border-right" type="flex" justify="center" align="center" lg="2" sm="4" xs="12">
          vs-lg="2" vs-sm="4" vs-xs="12"
        </pick-col>
      </pick-row>
    </div>
  </div>
</template>

<style scoped>
.row{
  color: #969696;
  border-top:1px solid #d2d2d2;
}
.background{
  background:#f5f5f5;
}
.border-left{
  border-left: 1px solid #d2d2d2;
}
.border-right{
  border-right: 1px solid #d2d2d2;
}
.border-bottom{
  border-bottom: 1px solid #d2d2d2;
}
</style>
