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

<style scoped>
.pick-breadcrumb {
  display: flex;
}
.pick-breadcrumb.pick-align-left {
  justify-content: flex-start;
}
.pick-breadcrumb.pick-align-center {
  justify-content: center;
}
.pick-breadcrumb.pick-align-right {
  justify-content: flex-end;
}
.pick-breadcrumb .disabled-link {
  opacity: 0.5;
  pointer-events: none;
}
.pick-breadcrumb--ol {
  display: flex;
  align-items:flex-end;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  list-style-type: none;
}
.pick-breadcrumb--ol li.pick-active {
  cursor: default;
}
.pick-breadcrumb--ol a {
  transition: all 0.2s ease;
  color: rgba(0,0,0,0.4);
  text-decoration: none;
}
.pick-breadcrumb--ol a:hover,
.pick-breadcrumb--ol a:focus {
  color: rgba(0,0,0,0.7);
  text-decoration: underline;
}
.pick-breadcrum--separator {
  color: rgba(0,0,0,0.4);
  padding: 0 0.5rem 0 0.5rem;
}
.pick-breadcrum--separator.material-icons {
  vertical-align: middle;
  font-size: inherit;
}
.pick-breadcrumb-text-primary {
  color: rgb(31, 116, 255,1);
}
.pick-breadcrumb-text-secondary {
  color: rgb(121, 49, 177,1);
}
.pick-breadcrumb-text-danger {
  color: rgb(255, 71, 87,1);
}
.pick-breadcrumb-text-success {
  color: rgb(70, 201, 58,1);
}
.pick-breadcrumb-text-warning {
  color: rgb(255,186,0,1);
}
.pick-breadcrumb-text-dark {
  color: rgb(30, 30, 30,1);
}
.pick-breadcrumb-text-light {
  color: rgb(245, 245, 245,1);
}

</style>
