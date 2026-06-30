import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.lagoon-masaze.cz',
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Satoshi',
      cssVariable: '--font-body',
      weights: [300, 400, 500],
      styles: ['normal'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
