import { CapacitorConfig } from '@capacitor/cli';
import serverConfig from './dev-server-config.json';

const config: CapacitorConfig = {
  appId: 'com.miloguide.capacitorjs',
  appName: 'milo-capacitor',
  webDir: 'out',
  bundledWebRuntime: false,
  ...serverConfig,
};

export default config;
