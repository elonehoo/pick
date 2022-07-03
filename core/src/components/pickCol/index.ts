import { App, Plugin } from 'vue'
import pickCol from './pickCol.vue'

export const pickColPlugin: Plugin = {
  install(app: App) {
    app.component('pickCol', pickCol);
  },
};

export { pickCol };
