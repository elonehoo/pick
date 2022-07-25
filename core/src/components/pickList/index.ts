import type { App, Plugin } from 'vue'
import pickList from './pickList.vue'

export const pickListPlugin: Plugin = {
  install(app: App) {
    app.component('pickList', pickList)
  },
}

export { pickList }
