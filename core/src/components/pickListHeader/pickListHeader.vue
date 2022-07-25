<script setup lang="ts">
  import {computed} from 'vue'
  import {getColor} from '../../util/color'
  import { pickIcon } from '../pickIcon'

  const props = withDefaults(defineProps<{
    color?:string,
    title?:string,
    subtitle?:string,
    icon?:string,
    iconPack?:string
  }>(), {
    color:'primary',
    title:undefined,
    subtitle:undefined,
    icon:undefined,
    iconPack:'material-icons'
  })

  const styleHeader = computed(()=>{
    return {
      color:getColor(props.color)
    }
  })
</script>

<template>
  <div :class="[`pick-header-list-${props.color}`,{ 'with-icon':props.icon }]"
    :style="styleHeader"
    class="pick-list--header"
  >
    <div v-if="icon" class="pick-list--icon">
      <pick-icon :icon-pack="props.iconPack" :icon="props.icon" />
    </div>
    <div class="list-titles">
      <div v-if="props.title" class="pick-list--title" >
        {{ props.title }}
      </div>
    </div>
  </div>
</template>
