<script setup lang="ts">

</script>

<template>
<li class="pick-nav-item">
    <div class="pick-nav-item-slot">
      <slot />
    </div>
    <ul class="pick-nav-submenu">
      <slot name="submenu" />
    </ul>
  </li>
</template>
