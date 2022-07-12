<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed, nextTick, ref, useSlots } from 'vue'
import { pickIcon } from '../pickIcon'
import { darken, getColor, isColor } from '../../util/color'

const slots = useSlots()

const props = withDefaults(defineProps<{
  type?: string
  color?: string
  textColor?: string
  lineOrigin?: string
  linePosition?: string
  gradientDirection?: string
  gradientColorSecondary?: string
  size?: string
  icon?: string
  iconPack?: string
  iconAfter?: boolean
  radius?: boolean
  href?: any
  target?: boolean | string
  button?: any
}>(), {
  type: 'filled',
  color: 'primary',
  textColor: '',
  lineOrigin: 'center',
  linePosition: 'bottom',
  gradientDirection: '30deg',
  gradientColorSecondary: 'primary',
  size: '',
  icon: '',
  iconPack: 'material-icons',
  iconAfter: false,
  radius: false,
  href: null,
  target: false,
  button: 'button',
})

const emit = defineEmits(['mouseoverx', 'mouseout', 'blur', 'click'])

const btn = ref<HTMLButtonElement | null>(null)

const isActive = ref<boolean>(false)

const hoverx = ref<boolean>(false)

const leftBackgorund = ref<number>(20)

const topBackgorund = ref<number>(20)

const radio = ref<number>(0)

const time = ref<number>(0.3)

const timeOpacity = ref<number>(0.3)

const opacity = ref<number>(1)

function isRTL(value: string): string {
  if (value === 'right')
    return 'left'
  else if (value === 'left')
    return 'right'

  else
    return value
}

function is(watch: any): boolean {
  const type = props.type
  return type === watch
}

function mouseoverx(event: any): void {
  emit('mouseoverx', event)
  hoverx.value = true
}

function mouseoutx(event: any): void {
  emit('mouseout', event)
  hoverx.value = false
}

function blurButton(event: any) {
  emit('blur', event)
  nextTick(() => {
    if (props.type === 'border' || props.type === 'flat') {
      opacity.value = 0
      setTimeout(() => {
        radio.value = 0
      }, 150)
      isActive.value = false
    }
  })
}

function clickButton(event: any) {
  emit('click', event)
  nextTick(() => {
    if (isActive.value)
      return
    if (props.href) {
      if (typeof (props.href) === 'string')
        props.target ? window.open(props.href) : window.location.href = props.href

      else
        props.target ? window.open(props.href.url) : window.location.href = props.href.url
    }
    if (props.type === 'border' || props.type === 'flat')
      isActive.value = true

    let xEvent = event.offsetX
    let yEvent = event.offsetY
    // @ts-expect-error
    const radios = btn.value?.clientWidth * 3
    // @ts-expect-error
    time.value = btn.value?.clientWidth / (btn.value?.clientWidth + (is('border') || is('flat') ? 70 : 20))
    if (is('filled'))
      timeOpacity.value = time.value

    if (event.srcElement ? event.srcElement !== btn.value : false) {
      xEvent += event.target.offsetLeft
      yEvent += event.target.offsetTop
    }
    leftBackgorund.value = xEvent
    topBackgorund.value = yEvent
    radio.value = radios
    if (is('filled'))
      opacity.value = 0

    else
      opacity.value = 1

    if (is('filled')) {
      setTimeout(() => {
        time.value = timeOpacity.value = radio.value = 0
        opacity.value = 1
        isActive.value = false
      }, time.value * 1100)
    }
    else {
      setTimeout(() => {
        timeOpacity.value = 0.15
      }, time.value * 1100)
    }
  })
}

const listeners = computed(() => {
  return {
    click: (event: any) => clickButton(event),
    blur: (event: any) => blurButton(event),
    mouseover: (event: any) => mouseoverx(event),
    mouseout: (event: any) => mouseoutx(event),
  }
})

const styles = computed(() => {
  let style: StyleValue = {}
  if (is('filled')) {
    style = {
      color: getColor(props.textColor, 1),
      background: getColor(props.color, 1),
      boxShadow: hoverx.value ? `0px 8px 25px -8px ${getColor(props.color, 1)}` : undefined,
    }
  }
  else if (is('border') || is('flat')) {
    style = {
      border: `${is('flat') ? 0 : 1}px solid ${getColor(props.color, 1)}`,
      background: hoverx.value ? getColor(props.color, 0.1) : 'transparent',
      color: getColor(props.textColor, 1) || getColor(props.color, 1),
    }
  }
  else if (is('line')) {
    style = {
      color: getColor(props.textColor, 1) || getColor(props.color, 1),
      borderBottomWidth: props.linePosition === 'bottom' ? '2px' : undefined,
      borderColor: `${getColor(props.color, 0.2)}`,
      borderTopWidth: props.linePosition === 'top' ? '2px' : undefined,
    }
  }
  else if (is('gradient')) {
    const backgroundx = `linear-gradient(${props.gradientDirection}, ${getColor(props.color)} 0%, ${getColor(props.gradientColorSecondary, 1)} 100%)`
    style = {
      background: backgroundx,
    }
  }
  else if (is('relief')) {
    const color = getColor(props.color, 1)
    style = {
      background: getColor(props.color, 1),
      boxShadow: `0 3px 0 0 ${darken(color, -0.4)}`,
    }
  }
  return style
})

const stylesBackGround = computed(() => {
  const styles: StyleValue = {
    background: is('flat') || is('border') ? getColor(props.color, 1, false) : undefined,
    opacity: opacity.value,
    left: `${leftBackgorund.value}px`,
    top: `${topBackgorund.value}px`,
    width: `${radio.value}px`,
    height: `${radio.value}px`,
    transition: `width ${time.value}s ease, height ${time.value}s ease, opacity ${timeOpacity.value}s ease`,
  }
  return styles
})

const styleLine = computed(() => {
  let lineOrigins = '50%'
  if (props.lineOrigin === 'left')
    lineOrigins = '0%'

  else if (props.lineOrigin === 'right')
    lineOrigins = 'auto'

  const styles: StyleValue = {
    top: props.linePosition === 'top' ? '-2px' : 'auto',
    bottom: props.linePosition === 'bottom' ? '-2px' : 'auto',
    background: getColor(props.color, 1),
    left: lineOrigins,
    right: lineOrigins === 'auto' ? '0px' : undefined,
    transform: lineOrigins === '50%' ? 'translate(-50%)' : undefined,
  }
  return styles
})
</script>

<template>
  <button
    ref="btn"
    :class="[
      `pick-button-${isColor(props.color) ? color : null}`,
      `pick-button-${props.type}`,
      {
        'isActive':isActive,
        'includeIcon':props.icon,
        'includeIconOnly':props.icon && ! slots.default,
        'pick-radius':props.radius
      },props.size]"
    :style="[styles,{
      'width':/[px]/.test(props.size) ? `${props.size}` : undefined,
      'height':/[px]/.test(props.size) ? `${props.size}` : undefined
    }]"
    :type="props.button"
    class="pick-component pick-button"
    name="button"
    v-on="listeners"
  >
    <span
      v-if="!is('line')&&!is('gradient')&&!is('relief')"
      ref="backgroundx"
      :style="stylesBackGround"
      class="pick-button-backgroundx pick-button--background"
    />
    <pick-icon
      v-if="props.icon"
      :style="{
        'order':iconAfter ? 2 : 0,
        ['margin-' + isRTL('left')]: slots.default && !iconAfter ? '5px' : '0px',
        ['margin-' + isRTL('right')]: slots.default && iconAfter ? '5px' : '0px'
      }"
      :icon-pack="props.iconPack"
      :icon="props.icon"
      class="pick-button--icon"
    />
    <span
      v-if="slots.default"
      class="pick-button-text pick-button--text"
    >
      <slot />
    </span>
    <span
      ref="linex"
      :style="styleLine"
      class="pick-button-linex"
    />
  </button>
</template>

