<script setup lang="ts">
import {pickRow,pickAvatar} from '@elonehoo/pick'
</script>

<template>
  <div>
    <pick-row :w="10">
      <pick-avatar />
      <pick-avatar text="Elone Hoo"/>
      <pick-avatar text="Elone"/>
      <pick-avatar src="https://github.com/elonehoo.png"/>
    </pick-row>
  </div>
</template>

<style scoped>
</style>
