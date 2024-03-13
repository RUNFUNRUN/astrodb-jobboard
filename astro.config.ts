import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind({
    nesting: true
  })],
  output: 'server',
  adapter: vercel()
});
