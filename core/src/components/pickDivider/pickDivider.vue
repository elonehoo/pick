<script setup lang="ts">
  import {computed,useSlots} from 'vue'
  import {isColor,getColor} from '../../util/color'
  import { pickIcon } from '../pickIcon'
  const slots = useSlots()

  const props = withDefaults(defineProps<{
    color?:string,
    background?:string,
    icon?:string,
    borderStyle?:string,
    borderHeight?:string,
    position?:string,
    iconPack?:string
  }>(), {
    color:'rgba(0, 0, 0,0.1)',
    background:'transparent',
    icon:undefined,
    borderStyle:'solid',
    borderHeight:'1px',
    position:'center',
    iconPack:'material-icons'
  })

  const getWidthAfter = computed(()=>{
    let widthx:string = '100%'
    if(props.position == 'left'){
      widthx = '0%'
    } else if (props.position == 'left-center') {
      widthx = '25%'
    } else if (props.position == 'right-center') {
      widthx = '75%'
    } else if (props.position == 'right') {
      widthx = '100%'
    }
    return widthx
  })

  const getWidthBefore = computed(()=>{
    let widthx:string = '100%'
    if(props.position == 'left'){
      widthx = '100%'
    } else if (props.position == 'left-center') {
      widthx = '75%'
    } else if (props.position == 'right-center') {
      widthx = '25%'
    } else if (props.position == 'right') {
      widthx = '0%'
    }
    return widthx
  })

  const borderColor = computed(()=>{
    if (!isColor(props.color)) {
      return getColor(props.color)
    }
  })

  const afterStyle = computed(()=>{
    const classes:any = {
      width: getWidthAfter.value,
      'border-top-width': props.borderHeight,
      'border-top-style': props.borderStyle
    }
    if (!isColor(props.color)) {
      classes['border-top-color'] = borderColor.value
    }
    return classes
  })

  const beforeStyle = computed(()=>{
    const classes:any = {
      width: getWidthBefore.value,
      'border-top-width': props.borderHeight,
      'border-top-style': props.borderStyle
    }
    if (!isColor(props.color)) {
      classes['border-top-color'] = borderColor.value
    }
    return classes
  })

  const borderClass = computed(()=>{
    const classes:any = {}
    let borderColor = isColor(props.color) ? props.color : 'default'
    classes[`pick-divider-border-${borderColor}`] = true
    return classes
  })

  const textColor = computed(()=>{
    if (!isColor(props.color)) {
      return getColor(props.color !== 'rgba(0, 0, 0,0.1)' ? props.color : '')
    }
  })

  const backgroundColor = computed(()=>{
    if (!isColor(props.background)) {
      return getColor(props.background)
    }
  })

  const textAndBackgroundClass = computed(()=>{
    const classes:any = {}

    let textColor = isColor(props.color) ? props.color : 'default'
    classes[`pick-divider-text-${textColor}`] = true
    let backgroundColor = isColor(props.background) ? props.background : 'default'
    classes[`pick-divider-background-${backgroundColor}`] = true
    return classes
  })

</script>

<template>
  <div class="pick-component pick-divider">
    <span
     :class="borderClass"
     :style="afterStyle"
     class="pick-divider-border after"
    />
    <span
     v-if=" icon || slots.default"
     :style="{'color': textColor,'background': backgroundColor}"
     :class="textAndBackgroundClass"
     class="pick-divider--text"
    >
      <template v-if="!icon">
        <slot/>
      </template>
      <pickIcon
       v-else
       :icon-pack="iconPack"
       :icon="icon"
       class="icon-divider notranslate pick-divider--icon"
      />
    </span>
    <span
     :style="beforeStyle"
     :class="borderClass"
     class="pick-divider-border before"
    />
  </div>
</template>
