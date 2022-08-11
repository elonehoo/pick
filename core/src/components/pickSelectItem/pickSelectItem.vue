<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'

const attrss = useAttrs()

const props = withDefaults(defineProps<{
  disabled?:boolean,
  modelValue:any,
  text:any
}>(), {
  disabled:false,
  moduleValue:undefined,
  text:undefined
})

const emits = defineEmits(['mouseover', 'update:modelValue', 'update:isSelected'])

const hoverx = ref<boolean>(false)
const visible = ref<boolean>(false)
const getText = ref<any>(null)
const modelValueInputx = ref<string>('')
const parent = ref<any>(null)

const disabledx = computed(()=>{
  if(parent.value.multiple){
    if(isActive.value){
      return false
    } else {
      return parent.value.maxSelected == parent.value.modelValue.length
    }
  } else {
    return false
  }
})

const isActive = computed(()=>{
  return parent.value.multiple ? getValue.value.indexOf(props.modelValue) != -1 : getValue.value == props.modelValue
})

const attrs = computed(()=>{
  return {
    onblur:(event:any)=>{
      if(event.relatedTarget?!event.relatedTarget.closest('.vs-select--options'):true) {
        parent.value.closeOptions()
      }
    },
    onclick:(event:any)=>{
      clickOption(event)
    },
    onmouseover:(event:any)=>{
      emits('mouseover',event)
      changeHover(true)
    },
    onmouseout:(event:any)=>{
      emits('mouseover',event)
      changeHover(false)
    }
  }
})
</script>

<template>

</template>
