import type { App, Plugin } from 'vue'
import pickBreadcrumb from './pickBreadcrumb.vue'

export const pickBreadcrumbPlugin: Plugin = {
  install(app: App) {
    app.component('PickBreadcrumbr', pickBreadcrumb)
  },
}

export { pickBreadcrumb }
