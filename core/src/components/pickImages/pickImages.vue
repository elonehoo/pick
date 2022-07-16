<script setup lang="ts">
  const props = withDefaults(defineProps<{
    hover?:string,
    alternating?:boolean,
    notBorderRadius?:boolean,
    notMargin?:boolean
  }>(), {
    hover:'default',
    alternating:false,
    notBorderRadius:false,
    notMargin:false
  })
</script>

<template>
  <div
   :class="[`vs-images-hover-${props.hover}`,{'alternating': props.alternating,'notBorderRadius': props.notBorderRadius,'notMargin': props.notMargin}]"
   class="vs-component vs-images">
    <ul class="vs-ul-images vs-images--ul">
      <slot />
    </ul>
  </div>
</template>
