import 'dotenv/config';
import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: '@rnmapbox/maps Expo Example',
  slug: 'rnmapbox-maps-expo-example',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.rnmapbox.maps.expo',
    supportsTablet: true,
  },
  android: {
    package: 'com.rnmapbox.maps.expo',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },

  extra: {
    eas: {
      projectId: (process.env as any).EAS_PROJECT_ID,
    },

    mapboxAccessToken: (process.env as any).MAPBOX_ACCESS_TOKEN,
  },

  plugins: [
    [
      '@rnmapbox/maps',
      {
        RNMapboxMapsImpl: 'mapbox',
        RNMapboxMapsDownloadToken: (process.env as any).MAPBOX_DOWNLOADS_READ_TOKEN,
      },
    ],
  ],
});
