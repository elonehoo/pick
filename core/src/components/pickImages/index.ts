import type { App, Plugin } from 'vue'
import pickImages from './pickImages.vue'

export const pickImagesPlugin: Plugin = {
  install(app: App) {
    app.component('pickImages', pickImages)
  },
}

export { pickImages }
