import type { App } from 'vue'
import pickCol from './pickCol.vue'

const install = (Vue: App) => {
  Vue.component(pickCol.name, pickCol)
}
export { pickCol }

export default { install }
