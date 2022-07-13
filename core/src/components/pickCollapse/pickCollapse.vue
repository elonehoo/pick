<script setup lang="ts">
  import { provide,ref } from 'vue'
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
  const root = ref<HTMLDivElement | null>(null)

  function closeAllItems(el:any){
    //@ts-ignore
    let childrens:HTMLDivElement[] = root.value?.children
    //@ts-ignore
    for(let i:number = 0; i < childrens?.length; i++){
      //@ts-ignore
      if(childrens[i] !== el.value){
        //@ts-ignore
        console.log(typeof childrens[i])
        //@ts-ignore
        console.log(childrens[i].children[1].style.maxHeight)
        //@ts-ignore
        childrens[i].children[1].style.maxHeight = '0px'
        // childrens[i].maxHeight = '0px'
      }
    }

  }

  provide(pickCollapseAccordion, props.accordion)
  provide(pickCollapseOpenHover, props.openHover)
  provide(pickCollapseEmitChange, emitChange)
  provide(pickCollapseCloseAllItems, closeAllItems)
</script>

<template>
  <div
    ref="root"
   :class="[type]"
   class="pick-collapse">
    <slot />
  </div>
</template>
