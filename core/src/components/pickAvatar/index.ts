import type { App, Plugin } from 'vue'
import pickAvatar from './pickAvatar.vue'

export const pickAvatarPlugin: Plugin = {
  install(app: App) {
    app.component('PickAvatar', pickAvatar)
  },
}

export { pickAvatar }
