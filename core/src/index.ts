import { App, Plugin } from 'vue';

import {pickColPlugin} from './components/pickCol'
import {pickRowPlugin} from './components/pickRow'
import {pickAvatarPlugin} from './components/pickAvatar'

const pickPlugin: Plugin = {
  install(app: App) {
    pickColPlugin.install?.(app);
    pickRowPlugin.install?.(app);
    pickAvatarPlugin.install?.(app);
  },
};

export default pickPlugin;

export * from './components/pickRow'
export * from './components/pickCol'
export * from './components/pickAvatar'
