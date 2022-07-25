<script setup lang="ts">
  import { pickIcon } from '../pickIcon'

  const props = withDefaults(defineProps<{
    avatar?:boolean | string,
    title?:string,
    subtitle?:string,
    icon?:string,
    iconPack?:string
  }>(), {
    avatar:false,
    title:undefined,
    subtitle:undefined,
    icon:undefined,
    iconPack:'material-icons'
  })

</script>

<template>
  <div class="pick-list--item">
    <div v-if="$slots.avatar" class="pick-list--avatar" >
      <slot name="avatar" />
    </div>
    <div v-if="props.icon" class="pick-list--icon" >
      <pick-icon :icon-pack="props.iconPack" :icon="props.icon" />
    </div>
    <div class="list-titles">
      <div v-if="props.title" class="pick-list--title">
        {{ props.title }}
      </div>
      <slot v-else name="title" />
      <div v-if="props.subtitle" class="pick-list--subtitle" >
        {{ props.subtitle }}
      </div>
      <slot v-else name="subtitle" />
    </div>
    <div class="pick-list--slot">
      <slot />
    </div>
  </div>
</template>
