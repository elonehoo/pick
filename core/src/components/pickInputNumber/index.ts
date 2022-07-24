import type { App, Plugin } from 'vue'
import pickInputNumber from './pickInputNumber.vue'

export const pickInputNumberPlugin: Plugin = {
  install(app: App) {
    app.component('pickInputNumber', pickInputNumber)
  },
}

export { pickInputNumber }
