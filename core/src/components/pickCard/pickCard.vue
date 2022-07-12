<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()

const props = withDefaults(defineProps<{
  actionable?: boolean
  fixedHeight?: boolean
}>(), {
  actionable: false,
  fixedHeight: false,
})

function hasSlot(slot: string) {
  return slots[slot]
}

</script>

<template>
  <div :class="{'withHover':props.actionable,'fixedHeight':props.fixedHeight}" class="con-pick-card">
    <header v-if="hasSlot('header')" class="pick-card--header">
      <slot name="header" />
    </header>
    <div v-if="hasSlot('media')" class="pick-card--media">
      <slot name="media" />
    </div>
    <div v-if="hasSlot('default')" :class="{'fixedHeight': fixedHeight }" class="pick-card--content">
      <slot />
    </div>
    <div v-if="hasSlot('extra-content')" class="pick-card-extra--content">
      <slot name="extra-content" />
    </div>
    <footer v-if="hasSlot('footer')" :class="{'fixedHeight': fixedHeight }" class="pick-card--footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
