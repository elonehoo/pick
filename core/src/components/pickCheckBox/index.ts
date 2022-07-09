import type { App, Plugin } from 'vue'
import pickCheckBox from './pickCheckBox.vue'

export const pickCheckBoxPlugin: Plugin = {
  install(app: App) {
    app.component('pickCheckBox', pickCheckBox)
  },
}

export { pickCheckBox }
