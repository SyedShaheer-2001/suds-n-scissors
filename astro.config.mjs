import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
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
