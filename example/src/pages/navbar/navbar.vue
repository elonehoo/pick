<script setup lang="ts">
import {ref} from 'vue'
import {pickNavbar,pickNavbarTitle,pickNavbarItem} from '@elonehoo/pick'

const activeItem = ref(0)
</script>

<template>
  <div>
    <pick-navbar v-model="activeItem" class="nabarx">
      <template #title>
        <pick-navbar-title>
          Hello world
        </pick-navbar-title>
      </template>

      <pick-navbar-item index="0">
        <a href="#">Home</a>
      </pick-navbar-item>
      <pick-navbar-item index="1">
        <a href="#">News</a>
      </pick-navbar-item>
      <pick-navbar-item index="2">
        <a href="#">Update</a>
      </pick-navbar-item>
    </pick-navbar>
  </div>
</template>
