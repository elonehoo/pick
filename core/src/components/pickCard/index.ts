import { App, Plugin } from 'vue'
import pickCard from './pickCard.vue'

export const pickCardPlugin: Plugin = {
  install(app: App) {
    app.component('pick-card', pickCard);
  },
};

export { pickCard };
