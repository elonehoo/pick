import type { App, Plugin } from 'vue'
import pickNavbarTitle from './pickNavbarTitle.vue'

export const pickNavbarTitlePlugin: Plugin = {
  install(app: App) {
    app.component('pickNavbarTitle', pickNavbarTitle)
  },
}

export { pickNavbarTitle }
