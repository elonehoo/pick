import type { App, Plugin } from 'vue'
import pickNavbarItem from './pickNavbarItem.vue'

export const pickNavbarItemPlugin: Plugin = {
  install(app: App) {
    app.component('pickNavbarItem', pickNavbarItem)
  },
}

export { pickNavbarItem }
