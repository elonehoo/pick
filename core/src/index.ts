import { App, Plugin } from 'vue';

import {pickColPlugin} from './components/pickCol'
import {pickRowPlugin} from './components/pickRow'
import {pickAvatarPlugin} from './components/pickAvatar'
import {pickIconPlugin} from './components/pickIcon'
import {pickAlertPlugin} from './components/pickAlert'
import {pickBreadcrumbPlugin} from './components/pickBreadcrumb'
import { pickButtonPlugin } from './components/pickButton';

const pickPlugin: Plugin = {
  install(app: App) {
    pickColPlugin.install?.(app);
    pickRowPlugin.install?.(app);
    pickAvatarPlugin.install?.(app);
    pickIconPlugin.install?.(app);
    pickAlertPlugin.install?.(app);
    pickBreadcrumbPlugin.install?.(app);
    pickButtonPlugin.install?.(app);
  },
};

export default pickPlugin;

export * from './components/pickRow'
export * from './components/pickCol'
export * from './components/pickAvatar'
export * from './components/pickIcon'
export * from './components/pickAlert'
export * from './components/pickBreadcrumb'
export * from './components/pickButton';
export * from './components/pickBreadcrumb/type'
