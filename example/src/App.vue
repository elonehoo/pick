<script setup lang="ts">
import Footer from '~/components/Footer.vue'
</script>

<template>
  <main class="font-sans px-4 py-10 center">
    <router-view />
    <Footer />
  </main>
</template>

<style>
.font-sans {
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.px-4 {
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
}
.py-10 {
  padding-top: 2.5rem; /* 40px */
  padding-bottom: 2.5rem; /* 40px */
}
.center {
  text-align: center;
}
</style>
