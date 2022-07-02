import type { App } from 'vue'
import pickRow from './pickRow.vue'

const install = (Vue: App) => {
  Vue.component(pickRow.name, pickRow)
}
export { pickRow }

export default { install }
