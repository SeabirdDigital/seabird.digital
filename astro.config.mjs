import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';


// https://astro.build/config
export default defineConfig({
  site: "https://www.seabird.digital",
  integrations: [svelte(), tailwind(), image(), sitemap({ customPages: ["https://www.seabird.digital/"] }), robotsTxt()],
  output: "server",
  adapter: vercel(),
  experimental: {
    integrations: true,
  },
});