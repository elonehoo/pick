import { App, Plugin } from 'vue'
import pickBreadcrumb from './pickBreadcrumb.vue'

export const pickBreadcrumbPlugin: Plugin = {
  install(app: App) {
    app.component('pick-breadcrumbr', pickBreadcrumb);
  },
};

export { pickBreadcrumb };
