import type { App, Plugin } from 'vue'
import pickNavbarItems from './pickNavbarItems.vue'

export const pickNavbarItemsPlugin: Plugin = {
  install(app: App) {
    app.component('pickNavbarItems', pickNavbarItems)
  },
}

export { pickNavbarItems }
