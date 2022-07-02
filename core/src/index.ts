import type { App } from 'vue'

import pickCol from './components/pickCol/pickCol.vue'
import pickRow from './components/pickRow/pickRow.vue'

const install = (Vue: App) => {
  Vue.component(pickCol.name, pickCol)
     .component(pickRow.name,pickRow)
}

export { pickCol }

export default { install }
