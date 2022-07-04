<script setup lang="ts">
import {pickRow,pickAvatar,pickCol} from '@elonehoo/pick'
</script>

<template>
  <div>
    <pick-row type="flex" justify="center" align="center">
      <pick-col type="flex" justify="center" align="center">
        <pick-avatar />
        <pick-avatar text="Elone Hoo"/>
        <pick-avatar text="Elone"/>
        <pick-avatar src="https://github.com/elonehoo.png"/>
      </pick-col>
    </pick-row>
    <br><br><br>
    <pick-row type="flex" justify="center" align="center">
      <pick-col type="flex-end" justify="center" align="center">
        <pick-avatar size="small" />
        <pick-avatar text="Elone Hoo"/>
        <pick-avatar size="large" text="Elone"/>
        <pick-avatar size="70px" src="https://github.com/elonehoo.png"/>
      </pick-col>
    </pick-row>
    <br><br><br>
    <pick-row type="flex" justify="center" align="center">
      <pick-col type="flex-end" justify="center" align="center">
        <pick-avatar color="primary" text="primary"/>
        <pick-avatar color="success" text="success"/>
        <pick-avatar color="danger" text="danger"/>
        <pick-avatar color="warning" text="warning"/>
        <pick-avatar color="dark" text="dark"/>
        <pick-avatar color="rgb(200, 21, 129)" text="RGB"/>
        <pick-avatar color="#18cd5b" text="HEX"/>
        <pick-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>
      </pick-col>
    </pick-row>
  </div>
</template>

<style scoped>
</style>
