<script setup lang="ts">
import {pickButton} from '@elonehoo/pick'

</script>

<template>
  <div>
    <div>
      <pick-button color="primary" type="filled">primary</pick-button>
      &nbsp;
      <pick-button color="success" type="filled">success</pick-button>
      &nbsp;
      <pick-button color="danger" type="filled">danger</pick-button>
      &nbsp;
      <pick-button color="warning" type="filled">warning</pick-button>
      &nbsp;
      <pick-button color="dark" type="filled">dark</pick-button>
      &nbsp;
      <pick-button color="rgb(134, 4, 98)" type="filled">RGB</pick-button>
      &nbsp;
      <pick-button disabled type="filled">disabled</pick-button>
    </div>
    <br />
    <div>
      <pick-button color="primary" type="border">primary</pick-button>
      &nbsp;
      <pick-button color="success" type="border">success</pick-button>
      &nbsp;
      <pick-button color="danger" type="border">danger</pick-button>
      &nbsp;
      <pick-button color="warning" type="border">warning</pick-button>
      &nbsp;
      <pick-button color="dark" type="border">dark</pick-button>
      &nbsp;
      <pick-button color="rgb(134, 4, 98)" type="border">RGB</pick-button>
      &nbsp;
      <pick-button disabled type="border">disabled</pick-button>
    </div>
    <br />
    <div>
      <pick-button color="primary" type="flat">primary</pick-button>
      &nbsp;
      <pick-button color="success" type="flat">success</pick-button>
      &nbsp;
      <pick-button color="danger" type="flat">danger</pick-button>
      &nbsp;
      <pick-button color="warning" type="flat">warning</pick-button>
      &nbsp;
      <pick-button color="dark" type="flat">dark</pick-button>
      &nbsp;
      <pick-button color="rgb(134, 4, 98)" type="flat">RGB</pick-button>
      &nbsp;
      <pick-button disabled type="flat">disabled</pick-button>
    </div>
  </div>
</template>

<style scoped>
</style>
