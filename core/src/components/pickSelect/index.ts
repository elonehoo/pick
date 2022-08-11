import type { App, Plugin } from 'vue'
import pickSelect from './pickSelect.vue'

export const pickSelectPlugin: Plugin = {
  install(app: App) {
    app.component('pickSelect', pickSelect)
  },
}

export { pickSelect }
