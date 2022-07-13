<script setup lang="ts">
  import { ref,provide } from 'vue'
  import {pickCollapseAccordion,pickCollapseOpenHover,pickCollapseEmitChange,pickCollapseCloseAllItems} from '../../symbol/collapse'
  const emit = defineEmits(['change'])

  const props = withDefaults(defineProps<{
    accordion?:boolean,
    type?:string,
    openHover?:boolean
  }>(), {
    accordion:false,
    type:'default',
    openHover:false
  })

  function emitChange():void{
    emit('change')
  }

  const children = ref(null)

  function closeAllItems(el:any){
    console.log('close all items',el.value)
  }

  provide(pickCollapseAccordion, props.accordion)
  provide(pickCollapseOpenHover, props.openHover)
  provide(pickCollapseEmitChange, emitChange)
  provide(pickCollapseCloseAllItems, closeAllItems)
</script>

<template>
  <div
   :class="[type]"
   ref="children"
   class="pick-collapse">
    <slot />
  </div>
</template>
