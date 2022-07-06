<script setup lang="ts">
import {pickBreadcrumb} from '@elonehoo/pick'
</script>

<template>
  <pick-breadcrumb
  :items="
   [
     {
       title: 'Dashboard',
       url: 'dashboard'
     },
     {
       title: 'Link 1',
       url: 'link-1'
     },
     {
       title: 'Link 2',
       disabled: true
     },
     {
       title: 'Active',
       active: true
     }
   ]" />
</template>

<style scoped>

</style>
