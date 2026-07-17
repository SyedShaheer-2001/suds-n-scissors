import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'aimx19qy',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2025-01-28',
      useCdn: true,
      studioBasePath: '/studio',
      stega: {
        enabled: false,
        studioUrl: '/studio',
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      include: ['gsap', 'lenis', 'gsap/ScrollTrigger'],
    },
  },
});
