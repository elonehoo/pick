import type { App, Plugin } from 'vue'
import pickInput from './pickInput.vue'

export const pickInputPlugin: Plugin = {
  install(app: App) {
    app.component('pickInput', pickInput)
  },
}

export { pickInput }
