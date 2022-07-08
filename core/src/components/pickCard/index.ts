import type { App, Plugin } from 'vue'
import pickCard from './pickCard.vue'

export const pickCardPlugin: Plugin = {
  install(app: App) {
    app.component('PickCard', pickCard)
  },
}

export { pickCard }
