import { App, Plugin } from 'vue'
import pickRow from './pickRow.vue'

export const pickRowPlugin: Plugin = {
  install(app: App) {
    app.component('pickRow', pickRow);
  },
};

export { pickRow };
