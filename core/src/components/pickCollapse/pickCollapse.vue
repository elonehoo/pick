<script setup lang="ts">
  import { provide } from 'vue'
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

  function closeAllItems(){

  }

  provide(pickCollapseAccordion, props.accordion)
  provide(pickCollapseOpenHover, props.openHover)
  provide(pickCollapseEmitChange, emitChange)
  provide(pickCollapseCloseAllItems, closeAllItems)
</script>

<template>
  <div
   :class="[type]"
   class="vs-collapse">
    <slot></slot>
  </div>
</template>
