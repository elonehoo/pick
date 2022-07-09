<script setup lang="ts">
import {pickCheckBox} from '@elonehoo/pick'

const checkBox1 = $ref<boolean>(true)
</script>

<template>
  <div>
    {{checkBox1}}
    <pick-check-box :value="checkBox1">
      Primary - active
    </pick-check-box>
  </div>
</template>

<style scoped>

</style>
