import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://steroideshop.net',
  integrations: [react(), tailwind()],
  output: 'static',
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
