<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { getColor, isColor } from '../../util/color'
import type { BreadcrumbItem } from './type'

const slots = useSlots()

const props = withDefaults(defineProps<{
  items?: BreadcrumbItem[]
  separator?: string
  color?: string
  align?: string
}>(), {
  separator: '/',
  color: 'primary',
  align: 'left',
})

const textClass = computed(() => {
  const classes: any = {}
  if (isColor(props.color))
    classes[`pick-breadcrumb-text-${props.color}`] = true

  return classes
})

const textStyle = computed(() => {
  const style: any = {}
  if (!isColor(props.color))
    style.color = getColor(props.color)

  return style
})

const hasSlot = computed(() => {
  return !!slots.default
})

</script>

<template>
  <nav :class="`pick-align-${props.align}`" class="pick-breadcrumb" aria-label="breadcrumb">
    <ol class="pick-breadcrumb--ol">
      <slot />
      <li v-for="item in items" v-show="!hasSlot" :key="item.title" :class="{'pick-active':item.active,'disabled-link':item.disabled}">
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
          class="pick-breadcrumb--link"
          v-text="item.title"
        />
        <template v-else>
          <span
            :class="textClass"
            :style="textStyle"
            class="pick-breadcrumb--text"
            v-text="item.title"
          />
        </template>
        <span
          v-if="!item.active"
          :class="separator.length > 1 ? 'material-icons' : null"
          class="separator notranslate pick-breadcrum--separator"
          translate="no"
          aria-hidden="true"
          v-text="separator"
        />
      </li>
    </ol>
  </nav>
</template>
