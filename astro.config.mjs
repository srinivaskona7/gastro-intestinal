import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project sites live under /<repo>/. The workflow sets both vars;
// locally they default to a root-served dev site.
const base = process.env.ASTRO_BASE || '/';
const site = process.env.ASTRO_SITE || 'http://localhost:4321';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
