<script setup lang="ts">
  import {ref,computed} from 'vue'


  const maxHeight = ref<string>('0px')

  const dataReady = ref<boolean>(false)

  const props = withDefaults(defineProps<{
    open?:boolean,
    disabled?:boolean,
    notArrow?:boolean,
    iconArrow?:string,
    iconPack?:string,
    sst?:boolean
  }>(), {
    open:false,
    disabled:false,
    notArrow:false,
    iconArrow:'keyboard_arrow_down',
    iconPack:'material-icons',
    sst:false
  })


</script>

<template>

</template>
