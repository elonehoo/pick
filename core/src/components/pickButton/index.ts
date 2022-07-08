import { App, Plugin } from 'vue'
import pickButton from './pickButton.vue'

export const pickButtonPlugin: Plugin = {
  install(app: App) {
    app.component('pick-button', pickButton);
  },
};

export { pickButton };
