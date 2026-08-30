// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://e2-bright-demo.netlify.app',
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/politique-confidentialite') &&
      !page.includes('/politique-cookies'),
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
