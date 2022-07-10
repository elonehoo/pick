import type { App, Plugin } from 'vue'
import pickChip from './pickChip.vue'

export const pickChipPlugin: Plugin = {
  install(app: App) {
    app.component('pickChip', pickChip)
  },
}

export { pickChip }
