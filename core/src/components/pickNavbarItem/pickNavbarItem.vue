<script setup lang="ts">
import { ref,computed,getCurrentInstance } from 'vue'
import { getColor } from '../../util/color'
const instance = getCurrentInstance()

const props = withDefaults(defineProps<{
  index?: number | string
}>(), {
  index: undefined
})

const hover = ref<boolean>(false)

const getActiveTextColor = computed(()=>{
  return instance?.parent?.proxy?.$parent?.$props?.activeTextColor
})

const isActiveItem = computed(()=>{
  return instance?.parent?.proxy?.$parent?.modelValue === props.index
})

const styleAfter = computed(()=>{
  return {
    background: getColor(getActiveTextColor.value)
  }
})

const styleHover = computed(()=>{
  if (isActiveItem.value) {
    return {
      color: getColor(getActiveTextColor.value)
    }
  } else {
    return {
      color: hover.value ? getColor(getActiveTextColor.value) : getColor(instance?.parent?.proxy?.$parent?.$props?.textColor)
    }
  }
})

function clickItem() {
  instance?.parent?.proxy?.$parent?.changeIndex(props.index)
}

function mouseout() {
  hover.value = false
}

function mouseover(){
  hover.value = true
}

</script>

<template>
  <li
    :style="[styleHover]"
    :class="[{'is-active-item': isActiveItem}, `pick-navbar-item-${getActiveTextColor}`]"
    class="pick-navbar--item"
    @click="clickItem()"
    @mouseout="mouseout"
    @mouseover="mouseover"
  >
    <slot></slot>
    <span
      :style="[styleAfter]"
      class="pick-navbar-after"
    ></span>
  </li>
</template>
