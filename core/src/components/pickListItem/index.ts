import type { App, Plugin } from 'vue'
import pickListItem from './pickListItem.vue'

export const pickListItemPlugin: Plugin = {
  install(app: App) {
    app.component('pickListItem', pickListItem)
  },
}

export { pickListItem }
