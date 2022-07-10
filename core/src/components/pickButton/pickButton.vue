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

<style>
.pick-button {
  transition: all 0.2s ease;
  padding: 10px;
  border: 0px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
  background: transparent;
}
.pick-button.pick-radius {
  border-radius: 50%;
}
.pick-button.large {
  padding: 12px;
  font-size: 1em;
}
.pick-button.small {
  padding: 7px;
  font-size: 0.7em;
}
.pick-button:disabled {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}
.pick-button--icon {
  z-index: 100;
  display: block;
  position: relative;
  font-size: 1.125em;
  transition: all 0.2s ease;
}
.pick-button--background {
  border-radius: 50%;
  width: 10px;
  position: absolute;
  height: 10px;
  z-index: 0;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  box-shadow: inset 0px 0px 60px 0px rgba(255,255,255,0.5);
}
.pick-button--text {
  position: relative;
  color: inherit;
  display: inline-block;
  transition: all .25s ease;
}
.pick-button-border {
  padding: 9px;
}
.pick-button-border.isActive .pick-button--text,
.pick-button-flat.isActive .pick-button--text,
.pick-button-border.isActive .pick-button--icon,
.pick-button-flat.isActive .pick-button--icon {
  color: #fff !important;
}
.pick-button-filled:hover {
  box-shadow: 0px 9px 28px -9px;
}
.pick-button-line {
  padding: 9px 10px;
  border-radius: 0px;
  overflow: visible;
  border-style: solid;
}
.pick-button-line .pick-button-linex {
  transition: all 0.2s ease;
  width: 0%;
  position: absolute;
  left: 0px;
  bottom: -2px;
  height: 2px;
}
.pick-button-line:hover .pick-button--text,
.pick-button-line:hover .pick-button--icon {
  transform: translate(0, 2px);
}
.pick-button-line:hover .pick-button-linex {
  width: 100% !important;
}
.pick-button-gradient:hover {
  transform: translate(0, -2px);
  box-shadow: 0px 8px 25px -8px #aaa;
}
.pick-button-gradient:active {
  transform: translate(0, 0px);
  box-shadow: 0px 8px 0px -8px #aaa;
}
.pick-button-relief {
  padding: 10px;
}
.pick-button-relief:active {
  transform: translate(0, 3px);
  box-shadow: none !important;
}
.includeIcon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.includeIconOnly {
  width: 38px !important;
  height: 38px !important;
}
.includeIconOnly.large {
  width: 44px !important;
  height: 44px !important;
  font-size: 0.7em;
}
.includeIconOnly.small {
  width: 28px !important;
  height: 28px !important;
}
.includeIconOnly.small .pick-icon {
  font-size: 0.85rem;
}

.pick-button-primary.pick-button-filled {
  background: rgb(31, 116, 255) !important;
}
.pick-button-primary.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb(31, 116, 255);
}
.pick-button-primary.pick-button-border,
.pick-button-primary.pick-button-flat {
  border: 1px solid rgb(31, 116, 255);
  background: transparent !important;
  color: rgb(31, 116, 255);
}
.pick-button-primary.pick-button-border .pick-button--text.isActive,
.pick-button-primary.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-primary.pick-button-border:hover,
.pick-button-primary.pick-button-flat:hover {
  background: rgb(31, 116, 255,0.08) !important;
}
.pick-button-primary.pick-button-border .pick-button-backgroundx,
.pick-button-primary.pick-button-flat .pick-button-backgroundx {
  background: rgb(31, 116, 255);
  box-shadow: inset 0px 0px 60px 0px rgb(31, 116, 255);
}
.pick-button-primary.pick-button-flat {
  border: none !important;
}
.pick-button-primary.pick-button-line {
  color: rgb(31, 116, 255);
  border-color: rgb(31, 116, 255,0.2);
}
.pick-button-primary.pick-button-line .pick-button-linex {
  background: rgb(31, 116, 255);
}
.pick-button-primary.pick-button-gradient {
  background: #640064;
  background-image: linear-gradient(30deg, rgb(31, 116, 255,1) 0%, rgb(31, 116, 255,0.5) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-primary.pick-button-relief {
  background: rgb(31, 116, 255,1);
  box-shadow: 0 -3px 0 0 rgba(0,0,0,0.2) inset;
}
.pick-button-secondary.pick-button-filled {
  background: rgb(121, 49, 177) !important;
}
.pick-button-secondary.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb(121, 49, 177);
}
.pick-button-secondary.pick-button-border,
.pick-button-secondary.pick-button-flat {
  border: 1px solid rgb(121, 49, 177);
  background: transparent !important;
  color: rgb(121, 49, 177);
}
.pick-button-secondary.pick-button-border .pick-button--text.isActive,
.pick-button-secondary.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-secondary.pick-button-border:hover,
.pick-button-secondary.pick-button-flat:hover {
  background: rgb(121, 49, 177,0.08) !important;
}
.pick-button-secondary.pick-button-border .pick-button-backgroundx,
.pick-button-secondary.pick-button-flat .pick-button-backgroundx {
  background: rgb(121, 49, 177);
  box-shadow: inset 0px 0px 60px 0px rgb(121, 49, 177);
}
.pick-button-secondary.pick-button-flat {
  border: none !important;
}
.pick-button-secondary.pick-button-line {
  color: rgb(121, 49, 177);
  border-color: rgb(121, 49, 177,0.2);
}
.pick-button-secondary.pick-button-line .pick-button-linex {
  background: rgb(121, 49, 177);
}
.pick-button-secondary.pick-button-gradient {
  background: #640064;
  background-image: linear-gradient(30deg, rgb(121, 49, 177,1) 0%, rgb(121, 49, 177,0.5) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-secondary.pick-button-relief {
  background: rgb(121, 49, 177,1);
  box-shadow: 0 -3px 0 0 rgba(0,0,0,0.2) inset;
}
.pick-button-danger.pick-button-filled {
  background: rgb( 255, 71, 87) !important;
}
.pick-button-danger.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb( 255, 71, 87);
}
.pick-button-danger.pick-button-border,
.pick-button-danger.pick-button-flat {
  border: 1px solid rgb( 255, 71, 87);
  background: transparent !important;
  color: rgb( 255, 71, 87);
}
.pick-button-danger.pick-button-border .pick-button--text.isActive,
.pick-button-danger.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-danger.pick-button-border:hover,
.pick-button-danger.pick-button-flat:hover {
  background: rgb( 255, 71, 87,0.08) !important;
}
.pick-button-danger.pick-button-border .pick-button-backgroundx,
.pick-button-danger.pick-button-flat .pick-button-backgroundx {
  background: rgb( 255, 71, 87);
  box-shadow: inset 0px 0px 60px 0px rgb( 255, 71, 87);
}
.pick-button-danger.pick-button-flat {
  border: none !important;
}
.pick-button-danger.pick-button-line {
  color: rgb( 255, 71, 87);
  border-color: rgb( 255, 71, 87,0.2);
}
.pick-button-danger.pick-button-line .pick-button-linex {
  background: rgb( 255, 71, 87);
}
.pick-button-danger.pick-button-gradient {
  background: #640064;
  background-image: linear-gradient(30deg, rgb( 255, 71, 87,1) 0%, rgb( 255, 71, 87,0.5) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-danger.pick-button-relief {
  background: rgb( 255, 71, 87,1);
  box-shadow: 0 -3px 0 0 rgba(0,0,0,0.2) inset;
}
.pick-button-success.pick-button-filled {
  background: rgb(70, 201, 58) !important;
}
.pick-button-success.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb(70, 201, 58);
}
.pick-button-success.pick-button-border,
.pick-button-success.pick-button-flat {
  border: 1px solid rgb(70, 201, 58);
  background: transparent !important;
  color: rgb(70, 201, 58);
}
.pick-button-success.pick-button-border .pick-button--text.isActive,
.pick-button-success.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-success.pick-button-border:hover,
.pick-button-success.pick-button-flat:hover {
  background: rgb( 70, 201, 58,0.08) !important;
}
.pick-button-success.pick-button-border .pick-button-backgroundx,
.pick-button-success.pick-button-flat .pick-button-backgroundx {
  background: rgb(70, 201, 58);
  box-shadow: inset 0px 0px 60px 0px rgb(70, 201, 58);
}
.pick-button-success.pick-button-flat {
  border: none !important;
}
.pick-button-success.pick-button-line {
  color: rgb(70, 201, 58);
  border-color: rgb(70, 201, 58,0.2);
}
.pick-button-success.pick-button-line .pick-button-linex {
  background: rgb(70, 201, 58);
}
.pick-button-success.pick-button-gradient {
  background: #0064fa;
  background-image: linear-gradient(30deg, rgb(70, 201, 58,1) 0%, rgb(70, 201, 58,0.6) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-success.pick-button-relief {
  background: rgb(70, 201, 58,1);
  box-shadow: 0 -3px 0 0 rgba(0,0,0,0.2) inset;
}
.pick-button-warning.pick-button-filled {
  background: rgb(255,186,0) !important;
}
.pick-button-warning.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb(255,186,0);
}
.pick-button-warning.pick-button-border,
.pick-button-warning.pick-button-flat {
  border: 1px solid rgb(255,186,0);
  background: transparent !important;
  color: rgb(255,186,0);
}
.pick-button-warning.pick-button-border .pick-button--text.isActive,
.pick-button-warning.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-warning.pick-button-border:hover,
.pick-button-warning.pick-button-flat:hover {
  background: rgb(255,186,0,0.08) !important;
}
.pick-button-warning.pick-button-border .pick-button-backgroundx,
.pick-button-warning.pick-button-flat .pick-button-backgroundx {
  background: rgb(255,186,0);
  box-shadow: inset 0px 0px 60px 0px rgb(255,186,0);
}
.pick-button-warning.pick-button-flat {
  border: none !important;
}
.pick-button-warning.pick-button-line {
  color: rgb(255,186,0);
  border-color: rgb(255,186,0,0.2);
}
.pick-button-warning.pick-button-line .pick-button-linex {
  background: rgb(255,186,0);
}
.pick-button-warning.pick-button-gradient {
  background: #fafafa;
  background-image: linear-gradient(30deg, rgb(255,186,0,1) 0%, rgb(255,186,0,0.5) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-warning.pick-button-relief {
  background: rgb(255,186,0,1);
  box-shadow: 0 -3px 0 0 rgba(0,0,0,0.2) inset;
}
.pick-button-dark.pick-button-filled {
  background: rgb(30, 30, 30) !important;
}
.pick-button-dark.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb(30, 30, 30);
}
.pick-button-dark.pick-button-border,
.pick-button-dark.pick-button-flat {
  border: 1px solid rgb(30, 30, 30);
  background: transparent !important;
  color: rgb(30, 30, 30);
}
.pick-button-dark.pick-button-border .pick-button--text.isActive,
.pick-button-dark.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-dark.pick-button-border:hover,
.pick-button-dark.pick-button-flat:hover {
  background: rgb(30, 30, 30,0.08) !important;
}
.pick-button-dark.pick-button-border .pick-button-backgroundx,
.pick-button-dark.pick-button-flat .pick-button-backgroundx {
  background: rgb(30, 30, 30);
  box-shadow: inset 0px 0px 60px 0px rgb(30, 30, 30);
}
.pick-button-dark.pick-button-flat {
  border: none !important;
}
.pick-button-dark.pick-button-line {
  color: rgb(30, 30, 30);
  border-color: rgb(30, 30, 30,0.2);
}
.pick-button-dark.pick-button-line .pick-button-linex {
  background: rgb(30, 30, 30);
}
.pick-button-dark.pick-button-gradient {
  background: #640064;
  background-image: linear-gradient(30deg, rgb(30, 30, 30,1) 0%, rgb(30, 30, 30,0.5) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-dark.pick-button-relief {
  background: rgb(30, 30, 30,1);
  box-shadow: 0 -3px 0 0 rgba(255,255,255,0.1) inset;
}
.pick-button-light.pick-button-filled {
  background: rgb(245, 245, 245) !important;
}
.pick-button-light.pick-button-filled:hover {
  box-shadow: 0px 8px 25px -8px rgb(245, 245, 245);
}
.pick-button-light.pick-button-border,
.pick-button-light.pick-button-flat {
  border: 1px solid rgb(245, 245, 245);
  background: transparent !important;
  color: rgb(245, 245, 245);
}
.pick-button-light.pick-button-border .pick-button--text.isActive,
.pick-button-light.pick-button-flat .pick-button--text.isActive {
  color: #fff !important;
}
.pick-button-light.pick-button-border:hover,
.pick-button-light.pick-button-flat:hover {
  background: rgb(245, 245, 245,0.08) !important;
}
.pick-button-light.pick-button-border .pick-button-backgroundx,
.pick-button-light.pick-button-flat .pick-button-backgroundx {
  background: rgb(245, 245, 245);
  box-shadow: inset 0px 0px 60px 0px rgb(245, 245, 245);
}
.pick-button-light.pick-button-flat {
  border: none !important;
}
.pick-button-light.pick-button-line {
  color: rgb(245, 245, 245);
  border-color: rgb(245, 245, 245,0.2);
}
.pick-button-light.pick-button-line .pick-button-linex {
  background: rgb(245, 245, 245);
}
.pick-button-light.pick-button-gradient {
  background: #640064;
  background-image: linear-gradient(30deg, rgb(245, 245, 245,1) 0%, rgb(245, 245, 245,0.5) 100%) !important;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
}
.pick-button-light.pick-button-relief {
  background: rgb(245, 245, 245,1);
  box-shadow: 0 -3px 0 0 rgba(0,0,0,0.2) inset;
}

</style>
