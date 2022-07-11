import type { App, Plugin } from 'vue'
import pickChips from './pickChips.vue'

export const pickChipsPlugin: Plugin = {
  install(app: App) {
    app.component('pickChips', pickChips)
  },
}

export { pickChips }
