import type { App, Plugin } from 'vue'
import pickDivider from './pickDivider.vue'

export const pickDividerPlugin: Plugin = {
  install(app: App) {
    app.component('pickDivider', pickDivider)
  },
}

export { pickDivider }
