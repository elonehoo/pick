<script setup lang="ts">
import { pickAlert } from '@elonehoo/pick'

const active1: boolean = $ref(true)
</script>

<template>
  <div>
    <div>
      <pick-alert active="true">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
    </div>
    <br>
    <div>
      <pick-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
    </div>
    <br>
    <div>
      <pick-alert
        color="primary"
        title="Primary" active="true"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      </pick-alert>
      <pick-alert title="Success" active="true" color="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
      <pick-alert title="Danger" active="true" color="danger">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </pick-alert>
      <pick-alert title="Danger" active="true" color="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </pick-alert>
      <pick-alert title="Dark" active="true" color="dark">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
      <pick-alert title="RGB" active="true" color="rgb(41, 147, 138)">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
      <pick-alert title="HEX" active="true" color="#842993">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
    </div>
    <br>
    <div>
      <button @click="active1=!active1">
        {{ active1 ? 'close' : 'open' }}
      </button>
      <pick-alert
        :active="active1"
        closable
        close-icon="close"
        @update:active="(n)=>active1 = n"
      >
        Lorem ip
        sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
    </div>
    <br>
    <div>
      <button @click="active1=!active1">
        {{ active1 ? 'close' : 'open' }}
      </button>
      <pick-alert
        :active="active1"
        closable
        close-icon="cancel"
        @update:active="(n)=>active1 = n"
      >
        Lorem ip
        sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
    </div>
    <br>
    <div>
      <pick-alert active="true" color="rgb(111, 38, 224)" icon="sms">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </pick-alert>
    </div>
  </div>
</template>

<style scoped>

</style>
