import { createClient } from '@sanity/client';

const sanityClient = createClient(
  { "apiVersion": "2025-01-28", "projectId": "aimx19qy", "dataset": "production", "useCdn": true, "stega": { "enabled": false, "studioUrl": "/studio" } }
);

globalThis.sanityClient = sanityClient;
