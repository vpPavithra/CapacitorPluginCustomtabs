import { WebPlugin } from '@capacitor/core';

import type { CustomTabsPluginPlugin } from './definitions';

export class CustomTabsPluginWeb
  extends WebPlugin
  implements CustomTabsPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
