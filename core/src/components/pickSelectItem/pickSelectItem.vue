<script setup lang="ts">
import { getColor } from '../../util/color'
import { ref, computed, useAttrs, watch, nextTick, getCurrentInstance } from 'vue'

const attrss = useAttrs()

const instance = getCurrentInstance()

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

const styles = computed(()=>{
  return {
    background: isActive.value? getColor(parent.value.color,0.1) : null,
    color: isActive.value ? getColor(parent.value.color,1) : null,
    fontWeight: isActive.value ? 'bold' : null
  }
})

const getValue = computed(()=>{
  return parent.value.modelValue
})

watch(()=>parent.value.active, ()=>{
  nextTick(()=>{
    if( this.parent.multiple?this.getValue.indexOf(this.modelValue) != -1:this.getValue == this.modelValue ) {
      emits('update:isSelected', true)
      getText.value = props.text
      putValue()
    } else {
      emits('update:isSelected', false)
      getText.value = props.text
      putValue()
    }
  })
})

watch(()=>modelValueInputx,()=>{
  if(visible.value){
    let modelValueInputxs = modelValueInputx.value.split(',')
    if(modelValueInputxs[modelValueInputxs.length-1] == ''){
      getText.value = props.text
      return
    }
    let modelValuex = modelValueInputxs[modelValueInputxs.length-1]
    var re = new RegExp(modelValuex,"i");
    if(props.text.toUpperCase().indexOf(modelValuex.toUpperCase()) == 0){
      modelValuex = MaysPrimera(modelValuex)
    }
    let text = props.text.replace(re,`<span class="searchx">${modelValuex}</span>`)
    getText.value = text
  } else {
    getText.value = props.text
  }
})

searchParent((parent:any) => {
  parent.childrenItems.push(this);
  parent.value = parent;
  putValue();
  nextTick(() => {
    if (parent.value.multiple ? getValue.value.indexOf(props.modelValue) != -1 : getValue.value == props.modelValue) {
      emits('update:isSelected', true)
      getText.value = props.text
      putValue()
    } else {
      emits('update:isSelected', false)
      getText.value = props.text
      putValue()
    }
  })
})

function searchParent(callback:any){
  let parent = instance?.parent

  if (!parent?.childrenItems) {
    searchParent(callback)
  } else {
    callback(parent)
  }
}

function changeHover(booleanx:boolean){
  hoverx.value = booleanx
}

function MaysPrimera(value:string){
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function backspace(){
  if(parent.value.autocomplete){
    let modelValueInput = parent.value.$refs.inputselect.modelValue
    parent.value.$refs.inputselect.modelValue = modelValueInput.substr(0,modelValueInput.length-1)
    parent.value.$refs.inputselect.focus()
  }
}

function navigateOptions(orientation:any){
  let orientationObject:any = 'nextSibling',lengthx = 0
  function getNextLi(li:any,orientationObject:any):any{
    if(li && li.localName == 'li'){
      let lix = li[orientationObject]
      if(li.style){
        if(li.style.display == 'none'){
          return getNextLi(lix,orientationObject)
        } else {
          return li
        }
      } else {
        return li
      }
    } else {
      return false
    }
  }
  var children = parent.value.childrenItems
  children.forEach((item:any)=>{
    if(item.childrenItems.length > 0) {
      children = [...children,...item.childrenItems]
    }
  })
  children = children.filter((item:any) => {
    return item.childrenItems.length == 0 && item.$el.localName != 'span'
  })
  if(orientation == 'prev'){
    orientationObject = 'previousSibling'
    lengthx = children.length
  }
  let nextElement = getNextLi(ref(orientationObject),orientationObject)
  if(nextElement){
    nextElement.querySelector('.vs-select--item').focus()
  } else {
    if (lengthx === children.length) lengthx--
    getNextLi(children[lengthx == 0?1:lengthx].$el,orientationObject).querySelector('.vs-select--item').focus()
  }
}

</script>

<template>

</template>
