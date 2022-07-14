import type { App, Plugin } from 'vue'
import pickDialog from './pickDialog.vue'

export const pickDialogPlugin: Plugin = {
  install(app: App) {
    app.component('pickDialog', pickDialog)
  },
}

export { pickDialog }
