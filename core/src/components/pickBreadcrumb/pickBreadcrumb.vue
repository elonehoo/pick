<script setup lang="ts">
import {computed,useSlots} from 'vue'
import {isColor,getColor} from '../../util/color'

const slots = useSlots()

const props = withDefaults(defineProps<{
  items:Array<any>,
  separator?:string,
  color?:string,
  align?:string
}>(),{
  separator:'/',
  color:'primary',
  align:'left'
})

const textClass = computed(()=>{
  const classes:any = {}
  if(isColor(props.color)){
    classes[`vs-breadcrumb-text-${props.color}`] = true
  }
  return classes
})

const textStyle = computed(()=>{
  const style:any = {}
  if (!isColor(props.color)) {
    style.color = getColor(props.color)
  }
  return style
})

const hasSlot = computed(()=>{
  return !!slots.default
})

</script>

<template>
  <nav :class="`vs-align-${props.align}`" class="vs-breadcrumb" aria-label="breadcrumb">
    <ol class="vs-breadcrumb--ol">
      <slot />
      <li v-for="item in items" :key="item.title" v-show="!hasSlot" :class="{'vs-active':item.active,'disabled-link':item.disabled}">
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
          class="vs-breadcrumb--link"
          v-text="item.title"
        ></a>
        <template v-else>
          <span
            :class="textClass"
            :style="textStyle"
            class="vs-breadcrumb--text"
            v-text="item.title"
          ></span>
        </template>
        <span
          v-if="!item.active"
          :class="separator.length > 1 ? 'material-icons' : null"
          class="separator notranslate vs-breadcrum--separator"
          translate="no"
          aria-hidden="true"
          v-text="separator"
        ></span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.vs-breadcrumb {
  display: flex;
}
.vs-breadcrumb.vs-align-left {
  justify-content: flex-start;
}
.vs-breadcrumb.vs-align-center {
  justify-content: center;
}
.vs-breadcrumb.vs-align-right {
  justify-content: flex-end;
}
.vs-breadcrumb .disabled-link {
  opacity: 0.5;
  pointer-events: none;
}
.vs-breadcrumb--ol {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  list-style-type: none;
}
.vs-breadcrumb--ol li.vs-active {
  cursor: default;
}
.vs-breadcrumb--ol a {
  transition: all 0.2s ease;
  color: rgba(0,0,0,0.4);
  text-decoration: none;
}
.vs-breadcrumb--ol a:hover,
.vs-breadcrumb--ol a:focus {
  color: rgba(0,0,0,0.7);
  text-decoration: underline;
}
.vs-breadcrum--separator {
  color: rgba(0,0,0,0.4);
  padding: 0 0.5rem 0 0.5rem;
}
.vs-breadcrum--separator.material-icons {
  vertical-align: middle;
  font-size: inherit;
}
.vs-breadcrumb-text-primary {
  color: rgb(31, 116, 255,1);
}
.vs-breadcrumb-text-secondary {
  color: rgb(121, 49, 177,1);
}
.vs-breadcrumb-text-danger {
  color: rgb(255, 71, 87,1);
}
.vs-breadcrumb-text-success {
  color: rgb(70, 201, 58,1);
}
.vs-breadcrumb-text-warning {
  color: rgb(255,186,0,1);
}
.vs-breadcrumb-text-dark {
  color: rgb(30, 30, 30,1);
}
.vs-breadcrumb-text-light {
  color: rgb(245, 245, 245,1);
}

</style>
