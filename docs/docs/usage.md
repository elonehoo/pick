---
outline: deep
---

# Usage

Get started with Vue and Pick in no time.

## Install Globally

### Install All Components

```typescript
import { createApp } from 'vue'
import App from '~/App.vue'
import 'material-icons/iconfont/material-icons.css'
import pick from '@elonehoo/pick'
createApp(App).use(pick).use(router).mount('#app')
```

After the installation, you can use all the components in your SFC like this.

```vue
<template>
  <pick-button>@elonehoo/pick</pick-button>
</template>
```

## Import Directly

If you can use vue setup script, you can use it like this.

```vue
<template>
  <pick-button>@elonehoo/pick</pick-button>
</template>

<script setup lang="ts">
  import { pickButton } from '@elonehoo/pick'
</script>
```
