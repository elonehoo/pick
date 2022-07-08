import type { App, Plugin } from 'vue'
import pickButton from './pickButton.vue'

export const pickButtonPlugin: Plugin = {
  install(app: App) {
    app.component('PickButton', pickButton)
  },
}

export { pickButton }
