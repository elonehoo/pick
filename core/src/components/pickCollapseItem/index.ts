import type { App, Plugin } from 'vue'
import pickCollapseItem from './pickCollapseItem.vue'

export const pickCollapseItemPlugin: Plugin = {
  install(app: App) {
    app.component('pickCollapseItem', pickCollapseItem)
  },
}

export { pickCollapseItem }
