import type { App, Plugin } from 'vue'
import pickIcon from './pickIcon.vue'

export const pickIconPlugin: Plugin = {
  install(app: App) {
    app.component('PickIcon', pickIcon)
  },
}

export { pickIcon }
