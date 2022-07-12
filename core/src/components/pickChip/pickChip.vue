<script setup lang="ts">
  import {computed} from 'vue'
  import {getColor} from '../../util/color'
  import { pickIcon } from '../pickIcon'
  const props = withDefaults(defineProps<{
    item?: boolean,
    value?:any,
    active?:boolean,
    text?:string,
    closable?:boolean | string,
    color?:string,
    icon?:string,
    iconPack?:string,
    closeIcon?:string,
    transparent?:boolean
  }>(), {
    value:{},
    active:true,
    text:undefined,
    closable:false,
    color:undefined,
    icon:undefined,
    iconPack:'material-icons',
    closeIcon:'close',
    transparent:false
  })

  const emit = defineEmits(['input','click','pick-remove'])

  const styleChip = computed(()=>{
    const background = props.transparent ? getColor(props.color, .15) : getColor(props.color, 1)
    const color = props.transparent ? getColor(props.color, 1) : props.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)'
    return {
      background: background,
      color: color
    }
  })

  function closeChip():void{
    emit('input',false)
    emit('click')
  }

</script>

<template>
  <div
   :style="styleChip"
   :class="[
    `pick-chip-${props.color}`,
     {
      'closable': closable,
      'con-color': color,
      'bg-chip-transparent': transparent
     }
    ]"
    class="con-pick-chip">
    <span class="text-chip pick-chip--text">
      <slot/>
    </span>
    <button
      v-if="closable"
      class="btn-close pick-chip--close"
      type="button"
      @click="closeChip">
      <pick-icon
        :icon-pack="iconPack"
        :icon="closeIcon"
      />
    </button>
  </div>
</template>
