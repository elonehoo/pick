import type { App, Plugin } from 'vue'
import pickRow from './pickRow.vue'

export const pickRowPlugin: Plugin = {
  install(app: App) {
    app.component('PickRow', pickRow)
  },
}

export { pickRow }
