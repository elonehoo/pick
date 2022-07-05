import { App, Plugin } from 'vue'
import pickAlert from './pickAlert.vue'

export const pickAlertPlugin: Plugin = {
  install(app: App) {
    app.component('pick-alert', pickAlert);
  },
};

export { pickAlert };
