<script setup lang="ts">
import {ref} from 'vue'
import {pickNavbar,pickNavbarTitle,pickNavbarItem,pickInput} from '@elonehoo/pick'

const activeItem = ref(0)
const search = ref('')
</script>

<template>
  <div>
    <pick-navbar v-model="activeItem" class="nabarx">
      <template #title>
        <pick-navbar-title>
          Hello pick
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

    <br />
    <br />
    <pick-navbar v-model="activeItem" class="nabarx">
      <template #title>
        <pick-navbar-title>
          Hello pick
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
      <pick-input icon="search" placeholder="Search" v-model="search"/>
    </pick-navbar>
    <br />
    <br />
    <pick-navbar type="shadow" v-model="activeItem" class="nabarx">
      <template #title>
        <pick-navbar-title>
          Hello pick
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
    <br />
    <br />
    <pick-navbar type="shadow" color="warning" v-model="activeItem" class="nabarx">
      <template #title>
        <pick-navbar-title>
          Hello pick
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
