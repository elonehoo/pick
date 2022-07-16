import type { App, Plugin } from 'vue'
import pickImage from './pickImage.vue'

export const pickImagePlugin: Plugin = {
  install(app: App) {
    app.component('pickImage', pickImage)
  },
}

export { pickImage }
