import type { App, Plugin } from 'vue'
import pickLoading from './pickLoading.vue'

export const pickLoadingPlugin: Plugin = {
  install(app: App) {
    app.component('pickLoadingItem', pickLoading)
  },
}

export { pickLoading }
