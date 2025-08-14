import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Note: Configure these via environment when building
// - PUBLIC_SITE: Full site URL (e.g., https://your-domain.com or https://<user>.github.io/<repo>)
// - PUBLIC_BASE: Base path for subpath hosting (e.g., /<repo>/ for GitHub Pages). Defaults to '/'
const site = (globalThis?.process?.env?.PUBLIC_SITE) ?? 'https://your-domain.com';
const base = (globalThis?.process?.env?.PUBLIC_BASE) ?? '/';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site,
  base,
  output: 'static',
  server: {
    port: 9003,
    host: true,
  },
});
