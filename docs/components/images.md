---
outline: deep
---

<script setup lang="ts">
  import { pickImage,pickImages } from '@elonehoo/pick'
</script>

# Images

Create a gallery or add an image easily

## Default

You can create an image gallery easily with the components `pick-images` y `pick-image`

<div class="con-example-images">
  <pick-images>
    <pick-image :key="index" :src="`https://picsum.photos/400/400?image=3${index}`" v-for="(image, index) in 9" :alter="image" />
    <pick-image :key="index" :src="`https://picsum.photos/400/400?image=4${index}`" v-for="(image, index) in 7" :alter="image" />
  </pick-images>
</div>

<style scoped>
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
</style>
