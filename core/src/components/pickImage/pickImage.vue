<script setup lang="ts">
  import {computed,useAttrs} from 'vue'

  const attrs = useAttrs()

  const props = withDefaults(defineProps<{
    src?:string
  }>(), {
    src:undefined
  })

  const styleImage = computed(()=>{
    return {
        backgroundImage: `url(${props.src})`
      }
  })
</script>

<template>
  <li class="vs-image">
    <div class="con-vs-image">
      <div
        :v-bind="attrs"
        :style="styleImage"
        class="vs-image--img">
      </div>
    </div>
    <img
      :src="props.src"
      class="imag-blur"
      alt="">
  </li>
</template>
