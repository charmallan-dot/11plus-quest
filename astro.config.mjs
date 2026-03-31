import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    svelte(),
  ],
  output: 'static',
  site: 'https://11plus.quest',
});
