import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://steroiden.com',
  integrations: [react(), tailwind()],
  output: 'server', // Hybrid rendering for API endpoints
  adapter: cloudflare({
    imageService: 'compile',
  }),
  legacy: {
    collections: true, // Enable legacy content collections API (type: 'content' + slug)
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'de', 'fr', 'es', 'it', 'ru'],
    routing: {
      prefixDefaultLocale: false, // English at root: /steroids, others at /de/steroids, etc.
    },
  },
});
