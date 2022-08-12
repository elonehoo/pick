import type { App, Plugin } from 'vue'
import pickSelectItem from './pickSelectItem.vue'

export const pickSelectItemPlugin: Plugin = {
  install(app: App) {
    app.component('pickSelectItem', pickSelectItem)
  },
}

export { pickSelectItem }
