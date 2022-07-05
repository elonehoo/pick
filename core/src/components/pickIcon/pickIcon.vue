<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  icon?:string,
  iconPack?:string,
  color?:string,
  bg?:string,
  size?:string,
  round?:boolean
}>(),{
  icon:'',
  iconPack:'material-icons',
  color:'',
  bg:'',
  size:'',
  round:false
})
</script>

<template>
  <i >

  </i>
</template>

<style scoped>
.vs-icon {
  color: inherit;
  text-align: center;
  font-size: 1rem;
}
.vs-icon.large {
  font-size: 3.125rem;
  width: 3.125rem;
  height: 3.125rem;
}
.vs-icon.medium {
  font-size: 2.31rem;
  width: 2.31rem;
  height: 2.31rem;
}
.vs-icon.small {
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
.vs-icon-bg {
  width: 1rem;
  height: 1rem;
}
.vs-icon-bg.bg-large {
  width: 3.125rem;
  height: 3.125rem;
}
.vs-icon-bg.bg-medium {
  width: 2.31rem;
  height: 2.31rem;
}
.vs-icon-bg.bg-small {
  width: 1.5rem;
  height: 1.5rem;
}
.round {
  border-radius: 50%;
}

</style>
