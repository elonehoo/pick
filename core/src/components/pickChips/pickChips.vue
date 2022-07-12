<script setup lang="ts">
  import {ref} from 'vue'
  import { pickIcon } from '../pickIcon'

  const emit = defineEmits(['input'])

  const props = withDefaults(defineProps<{
    value?:any,
    pickColor:string,
    placeholder:string,
    items:Array<any>,
    iconPack:string,
    removeIcon:string
  }>(), {
    value:{},
    pickColor:'primary',
    placeholder:'',
    items:undefined,
    iconPack:'material-icons',
    removeIcon:'close'
  })

  const newChip = ref<string>('')

  function addItem():void{
    let valueOld = props.value
    valueOld.push(newChip.value)
    emit('input',valueOld)
    newChip.value = ''
  }

  function removeTotalItems(){
    let valueOld = props.value
    valueOld.splice(0, props.value.length)
    emit('input',valueOld)
  }
</script>

<template>
  <div>
    <div :class="{'no-items': props.value.length === 0}" class="con-chips" >
      <slot />
      <input
       :placeholder="props.value.length > 0 ? undefined : placeholder"
       type="text"
       v-model="newChip"
       @keypress.enter="addItem"
       class="con-chips--input"
      />
      <div class="x-global con-chips--remove-all" @click="removeTotalItems">
        <pick-icon :icon-pack="iconPack" :icon="removeIcon" />
      </div>
    </div>
  </div>
</template>
