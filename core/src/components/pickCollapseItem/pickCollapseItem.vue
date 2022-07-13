<script setup lang="ts">
  import {ref,computed,inject,watch,onMounted,onBeforeUnmount} from 'vue'
  import {pickCollapseAccordion,pickCollapseOpenHover,pickCollapseEmitChange,pickCollapseCloseAllItems} from '../../symbol/collapse'
  import {pickIcon} from '../pickIcon'

  const maxHeight = ref<string>('0px')

  const dataReady = ref<boolean>(false)

  const content = ref<HTMLDivElement | null>(null)

  const element = ref<HTMLDivElement | null>(null)

  const iconIsArrow = ref<string>('')

  const emit = defineEmits(['fetch'])

  const props = withDefaults(defineProps<{
    open?:boolean,
    disabled?:boolean,
    notArrow?:boolean,
    iconArrowOpen?:string,
    iconArrowDown?:string,
    iconPack?:string,
    sst?:boolean
  }>(), {
    open:false,
    disabled:false,
    notArrow:false,
    iconArrowOpen:'keyboard_arrow_up',
    iconArrowDown:'keyboard_arrow_down',
    iconPack:'material-icons',
    sst:false
  })

  const accordions = inject(pickCollapseAccordion)
  const accordion = computed(()=>{
    return accordions
  })
  const openHovers = inject(pickCollapseOpenHover)
  const openHover = computed(()=>{
    return openHovers
  })

  const styleContent = computed(()=>{
    return {
      maxHeight: maxHeight.value
    }
  })

  const emitChange = inject(pickCollapseEmitChange)
  watch(maxHeight,()=>{
    emitChange
  })

  watch(dataReady,(newValue:boolean,oldValue:boolean)=>{
    if (oldValue != newValue && newValue) {
        initMaxHeight()
    }
  })

  onMounted(()=>{
    window.addEventListener('resize', changeHeight)
    const maxHeightx = content.value?.scrollHeight
    iconIsArrow.value = props.iconArrowDown
    if(props.open) {
      maxHeight.value = `${maxHeightx}px`
      iconIsArrow.value = props.iconArrowOpen
    }
  })

  onBeforeUnmount(()=>{
    window.removeEventListener('resize', changeHeight);
  })

  function changeHeight():void{
    const maxHeightx = content.value?.scrollHeight
    if(maxHeight.value != '0px') {
      maxHeight.value = `${maxHeightx}px`
      iconIsArrow.value = props.iconArrowOpen
    }
  }

  const closeAllItems = inject(pickCollapseCloseAllItems)

  function toggleContent() {
    if(openHover.value || props.disabled) return
    if(accordion.value) {
      //@ts-ignore
      closeAllItems(element)
    }
    if (props.sst && !dataReady.value) {
      emit('fetch', {
        done: () => {
          initMaxHeight();
          dataReady.value = true
        }
      })
    } else {
      initMaxHeight()
    }
  }

  function initMaxHeight() {
    const maxHeightx = content.value?.scrollHeight
    if(maxHeight.value == '0px') {
      maxHeight.value = `${maxHeightx}px`
      iconIsArrow.value = props.iconArrowOpen
    } else {
      maxHeight.value = `0px`
      iconIsArrow.value = props.iconArrowDown
    }
  }

  function mouseover(){
    if(props.disabled){
      return
    }
    let maxHeightx = content.value?.scrollHeight
    if(openHover.value) {
      maxHeight.value = `${maxHeightx}px`
      iconIsArrow.value = props.iconArrowOpen

    }
  }

  function mouseout(){
    if(openHover.value) {
      maxHeight.value = `0px`
      iconIsArrow.value = props.iconArrowDown
    }
  }

</script>

<template>
  <div
   ref="element"
   :class="{'open-item': maxHeight != '0px', 'disabledx': disabled}"
   class="pick-collapse-item"
   @mouseover="mouseover"
   @mouseout="mouseout"
  >
   <header
    class="pick-collapse-item--header"
    @click="toggleContent"
   >
    <slot name="header"/>
    <span v-if="!notArrow" class="icon-header pick-collapse-item--icon-header">
      <pick-icon :icon-pack="iconPack" :icon="iconIsArrow" />
    </span>
   </header>
   <div ref="content" :style="styleContent" class="pick-collapse-item--content">
    <div class="con-content--item"> <slot/> </div>
   </div>
  </div>
</template>
