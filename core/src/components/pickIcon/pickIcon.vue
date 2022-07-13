<script setup lang="ts">
import { computed } from 'vue'
import { isColor } from '../../util/color'
const props = withDefaults(defineProps<{
  icon?: string
  iconPack?: string
  color?: string
  bg?: string
  size?: string
  round?: boolean
}>(), {
  icon: '',
  iconPack: 'material-icons',
  color: '',
  bg: '',
  size: '',
  round: false,
})

const iconClass = computed(() => {
  const classes: any = {}
  classes[props.size] = true
  if (isColor(props.color))
    classes[`pick-icon-${props.color}`] = true

  return classes
})

const iconStyle = computed(() => {
  const style = {
    'width': /(px)/.test(props.size) ? props.size : /(em)/.test(props.size) ? props.size : undefined,
    'height': /(px)/.test(props.size) ? props.size : /(em)/.test(props.size) ? props.size : undefined,
    'font-size': /(px)/.test(props.size) ? props.size : /(em)/.test(props.size) ? props.size : undefined,
    'color': getColor.value,
    'background': getBgColor.value,
  }
  return style
})

const getBg = computed(() => {
  const classes: any = {}
  if (isColor(props.bg))
    classes[`con-pick-icon-bg-${props.bg}`] = true

  return classes
})

const getBgSize = computed(() => {
  const classes: any = {}
  if (['small', 'medium', 'large'].includes(props.size)) {
    classes[`bg-${props.size}`] = true
    classes['pick-icon-bg'] = true
  }
  return classes
})

const getColor = computed(() => {
  return isColor(props.color) ? props.color : props.color
})

const getBgColor = computed(() => {
  return isColor(props.bg) ? props.bg : props.bg
})
</script>

<template>
  <i
    :style="iconStyle"
    :class="[iconPack, iconPack !== 'material-icons' ? icon : '',iconClass,getBg,getBgSize,{'round':round}]"
    class="pick-icon notranslate icon-scale"
    v-bind="$attrs"
  >
    <slot>{{ iconPack == 'material-icons' ? icon : '' }}</slot>
  </i>
</template>

<style>

</style>
