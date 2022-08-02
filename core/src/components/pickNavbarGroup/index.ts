import type { App, Plugin } from 'vue'
import pickNavbarGroup from './pickNavbarGroup.vue'

export const pickNavbarGroupPlugin: Plugin = {
  install(app: App) {
    app.component('pickNavbarGroup', pickNavbarGroup)
  },
}

export { pickNavbarGroup }
