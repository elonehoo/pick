<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'
import { getColor, isColor } from '../../util/color'

const props = withDefaults(defineProps<{
  badge?: boolean | string | number
  badgeColor?: string
  size?: string
  src?: string
  textColor?: string
  icon?: string
  iconPack?: string
  text?: string
  color?: string
}>(), {
  badge: false,
  badgeColor: 'danger',
  size: '',
  src: '',
  textColor: 'rgb(255, 255, 255)',
  icon: 'person',
  iconPack: 'material-icons',
  text: '',
  color: 'rgb(195, 195, 195)',
})

const avatarClass = computed(() => {
  const classes: any = {}
  if (props.size !== '')
    classes[props.size] = true

  if (isColor(props.color))
    classes[`con-pick-avatar-${props.color}`] = true

  return classes
})

const avatarStyle = computed(() => {
  const style: any = {
    width: /[px]/.test(props.size) ? props.size : null,
    height: /[px]/.test(props.size) ? props.size : null,
  }
  if (!isColor(props.color))
    style.background = getColor(props.color)

  return style
})

const badgeClass = computed(() => {
  const classes: any = {
    badgeNumber: (typeof props.badge != 'boolean'),
  }
  if (isColor(props.badgeColor))
    classes[`dot-count-${props.badgeColor}`] = true

  return classes
})

const badgeStyle = computed(() => {
  const style: any = {}
  if (!isColor(props.badgeColor))
    style.background = getColor(props.badgeColor)

  return style
})

const textClass = computed(() => {
  const classes: any = {
    'material-icons': !props.text,
  }
  if (isColor(props.textColor))
    classes[`pick-avatar-text-${props.textColor}`] = true

  return classes
})

const textStyle = computed(() => {
  const style: StyleValue = {
    transform: '',
    color: '',
  }
  style.transform = `translate(-50%,-50%) scale(${returnScale.value})`
  if (!isColor(props.textColor))
    style.color = getColor(props.textColor)

  return style
})

const returnText: any = computed(() => {
  if (props.text.length <= 5)
    return props.text

  const exp = /\s/g
  let letras = ''
  if (exp.test(props.text)) {
    props.text.split(exp).forEach((word: string) => {
      letras += word[0].toUpperCase()
    })
  }
  else {
    letras = props.text[0].toUpperCase()
  }
  return letras.length > 5 ? letras[0] : letras
})

const returnScale = computed(() => {
  if (!props.text)
    return 1
  const lengthx = returnText.value.length
  if (lengthx <= 5 && lengthx > 1)
    return lengthx / (lengthx * 1.50)
  else
    return 1
})
</script>

<template>
  <div
    v-bind="$attrs"
    :style="avatarStyle"
    :class="avatarClass"
    class="con-pick-avatar"
  >
    <div
      v-if="props.badge && props.badge> 0"
      :style="badgeStyle"
      :class="badgeClass"
      class="dot-count pick-avatar--count"
    >
      {{ typeof props.badge != 'boolean' ? props.badge : null }}
    </div>
    <div v-if="props.src" class="con-img pick-avatar--con-img">
      <img :src="props.src" :alt="props.text">
    </div>
    <span
      v-else
      :title="props.text"
      :style="textStyle"
      :class="[props.text ? '' : props.iconPack, props.text ? '' : props.icon, textClass]"
      translate="no"
      class="pick-avatar--text notranslate"
    >
      {{ props.text ? returnText : props.iconPack == 'material-icons' ? props.icon : '' }}
    </span>
  </div>
</template>
