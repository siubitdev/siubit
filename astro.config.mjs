import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://siubit.dev',
  i18n: {
    locales: ['en', 'zh-hk'],
    defaultLocale: 'en',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'zh-hk': 'zh-HK' },
      },
    }),
  ],
});
