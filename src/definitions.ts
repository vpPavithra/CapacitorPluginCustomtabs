export interface CustomTabsPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
