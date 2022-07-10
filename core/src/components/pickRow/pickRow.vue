<script setup lang="ts">
withDefaults(defineProps<{
  align?: string
  justify?: string
  type?: string
  w?: number
}>(), {
  align: '',
  justify: '',
  type: 'flex',
  w: 12,
})
</script>

<template>
  <div class="pick-row">
    <slot />
  </div>
</template>

<style>
.pick-row{
  align-items: v-bind(align);
  justify-content: v-bind(justify);
  display: v-bind(type);
  overflow: v-bind('type === "block"?"hidden":null');
  width: v-bind(w * 100 / 12 + '%');
  clear: both;
}
</style>
