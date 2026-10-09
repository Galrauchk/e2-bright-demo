// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://demo-bright.webtrafic.fr',
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/politique-confidentialite') &&
      !page.includes('/politique-cookies'),
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
