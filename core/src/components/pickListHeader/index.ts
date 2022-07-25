import type { App, Plugin } from 'vue'
import pickListHeader from './pickListHeader.vue'

export const pickListHeaderPlugin: Plugin = {
  install(app: App) {
    app.component('pickListHeader', pickListHeader)
  },
}

export { pickListHeader }
