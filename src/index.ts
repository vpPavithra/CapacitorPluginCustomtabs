import { registerPlugin } from '@capacitor/core';

import type { CustomTabsPluginPlugin } from './definitions';

const CustomTabsPlugin = registerPlugin<CustomTabsPluginPlugin>(
  'CustomTabsPlugin',
  {
    web: () => import('./web').then(m => new m.CustomTabsPluginWeb()),
  },
);

export * from './definitions';
export { CustomTabsPlugin };
