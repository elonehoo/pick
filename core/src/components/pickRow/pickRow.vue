<script setup lang="ts">
withDefaults(defineProps<{
  pickAlign?: string,
  pickJustify?: string,
  pickType?: string,
  pickW?: number
}>(),{
  pickAlign: '',
  pickJustify:'',
  pickType:'flex',
  pickW: 12
})
</script>

<template>
<div class="pick-row">
    <slot/>
  </div>
</template>

<style scoped>
.pick-row{
  align-items: v-bind(pickAlign);
  justify-content: v-bind(pickJustify);
  display: v-bind(pickType);
  overflow: v-bind('pickType === "block"?"hidden":null');
  width: v-bind(pickW * 100 / 12 + '%');
  clear: both;
  flex-flow: wrap;
}
</style>
