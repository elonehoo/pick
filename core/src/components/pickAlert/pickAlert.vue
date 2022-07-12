<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { pickIcon } from '../pickIcon'
import { getColor } from '../../util/color'

defineEmits(['update:active'])

const props = withDefaults(defineProps<{
  active?: boolean | string
  title?: string
  closable?: boolean
  color?: string
  margin?: string | boolean
  icon?: string
  closeIcon?: string
  iconPack: string
}>(), {
  active: true,
  title: '',
  closable: false,
  color: 'primary',
  margin: '10px',
  icon: '',
  closeIcon: 'close',
  iconPack: 'material-icons',
})

const styleAlert = computed(() => {
  return {
    background: getColor(props.color, 0.15),
    boxShadow: `0px 0px 25px 0px ${getColor(props.color, 0.15)}`,
    color: getColor(props.color, 1),
  }
})

const styleTitle = computed(() => {
  return {
    boxShadow: `0px 6px 15px -7px ${getColor(props.color, 0.4)}`,
  }
})

const alerts: any = ref()

onMounted(() => {
  if (alerts.value) {
    nextTick(() => {
      const h = alerts.value.scrollHeight
      alerts.value.style.height = `${h}px`
    })
  }
})

function beforeEnter(el: any) {
  el.style.height = 0
  el.style.opacity = 0
}

function enter(el: any, done: any) {
  const h: any = alerts.value.scrollHeight
  alerts.value.style.height = `${h}px`
  el.style.opacity = 1
  done()
}

function leave(el: any) {
  alerts.value.style.height = 0
  el.style.opacity = 0
}

</script>

<template>
  <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div
      v-show="props.active"
      ref="alerts"
      :class="[`con-pick-alert-${props.color}`,{'con-icon':props.icon,}]"
      :style="styleAlert"
      class="con-pick-alert"
      v-on="$attrs"
    >
      <div
        v-if="props.closable"
        class="con-x pick-alert--close"
        @click="$emit('update:active',false)"
      >
        <pick-icon :icon-pack="props.iconPack" :icon="props.closeIcon" />
      </div>
      <h4 v-if="props.title" :style="styleTitle" class="titlex pick-alert--title" v-text="props.title" />
      <div :class="{'con-icon': props.icon}" class="pick-alert">
        <pick-icon v-if="props.icon" :icon-pack="iconPack" :icon="icon" class="icon-alert" />
        <slot />
      </div>
    </div>
  </Transition>
</template>
