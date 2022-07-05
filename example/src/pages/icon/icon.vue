<script setup lang="ts">
import {pickIcon} from '@elonehoo/pick'
</script>

<template>
  <div>
    <div>
      <span><pick-icon icon="mood" /></span>
      <span><pick-icon icon="child_care" /></span>
      <span><pick-icon icon="pets" /></span>
      <span><pick-icon icon="android" /></span>
      <span><pick-icon icon="polymer" /></span>
    </div>
    <div>
      <span><pick-icon icon="mood" /></span>
      <span><pick-icon icon="child_care" color="red" /></span>
      <span><pick-icon icon="pets" color="primary" /></span>
      <span><pick-icon icon="android" color="rgb(70, 150, 0)" /></span>
      <span><pick-icon icon="polymer" color="#BC1254" /></span>
    </div>
    <div>
      <span><pick-icon icon="mood" /></span>
      <span><pick-icon icon="child_care" size="small" color="red" /></span>
      <span><pick-icon icon="pets" size="medium" color="primary" /></span>
      <span><pick-icon icon="android" size="large" color="rgb(70, 150, 0)" /></span>
      <span><pick-icon icon="polymer" size="75px" color="#BC1254" /></span>
    </div>
    <div>
      <span><pick-icon icon="mood" /></span>
      <span><pick-icon icon="child_care" size="small" bg="red" /></span>
      <span><pick-icon icon="pets" size="medium" bg="primary" /></span>
      <span><pick-icon icon="android" size="large" bg="rgb(70, 150, 0)" /></span>
      <span><pick-icon icon="polymer" size="75px" bg="#BC1254" /></span>
    </div>
    <div>
      <span><pick-icon icon="mood" /></span>
      <span><pick-icon icon="child_care" size="small" bg="red" round /></span>
      <span><pick-icon icon="pets" size="medium" bg="primary" round /></span>
      <span><pick-icon icon="android" size="large" bg="rgb(70, 150, 0)" round /></span>
      <span><pick-icon icon="polymer" size="75px" bg="#BC1254" round /></span>
    </div>
  </div>
</template>

<style scoped>

</style>
