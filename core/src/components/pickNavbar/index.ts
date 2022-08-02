import type { App, Plugin } from 'vue'
import pickNavbar from './pickNavbar.vue'

export const pickNavbarPlugin: Plugin = {
  install(app: App) {
    app.component('pickNavbar', pickNavbar)
  },
}

export { pickNavbar }
