import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',

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
