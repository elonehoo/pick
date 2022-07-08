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

<style scoped>
.con-pick-card {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  display: block;
  box-shadow: 0px 4px 25px 0px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}
.con-pick-card.withHover {
  cursor: pointer;
}
.con-pick-card.withHover:hover {
  transform: translate(0, 4px);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
}
.con-pick-card.withHover:hover img {
  transform: scale(1.1);
}
.con-pick-card.fixedHeight {
  height: 100%;
  position: relative;
}
.pick-card--header {
  padding: 10px;
  box-shadow: 0px 10px 15px -10px rgba(0,0,0,0.05);
}
.pick-card--header h3 {
  padding: 0px;
}
.pick-card--footer {
  position: relative;
  padding: 10px;
  transform: translate(0, 40%);
  margin-top: -5%;
  padding-top: 0px;
}
.pick-card--footer.fixedHeight {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: 0%;
  transform: translate(0);
}
.pick-card--content {
  padding: 10px;
  font-size: 0.8rem;
  margin-bottom: 15px;
}
.pick-card--content.fixedHeight {
  margin-bottom: 20px;
}
.pick-card--media {
  width: 100%;
  overflow: hidden;
}
.pick-card--media img {
  width: 100%;
  transition: all 0.25s ease;
  display: block;
}
</style>
