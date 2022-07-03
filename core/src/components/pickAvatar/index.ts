import { App, Plugin } from 'vue'
import pickAvatar from './pickAvatar.vue'

export const pickAvatarPlugin: Plugin = {
  install(app: App) {
    app.component('pick-avatar', pickAvatar);
  },
};

export { pickAvatar };
