import type { App, Plugin } from 'vue'
import pickCollapse from './pickCollapse.vue'

export const pickCollapsePlugin: Plugin = {
  install(app: App) {
    app.component('pickCollapse', pickCollapse)
  },
}

export { pickCollapse }
