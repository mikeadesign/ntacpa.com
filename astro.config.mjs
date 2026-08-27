// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // SITE_URL / BASE_PATH are set by the GitHub Pages workflow to build a
  // beta preview at https://mikeadesign.github.io/ntacpa.com/. Unset, both
  // default to the real production root.
  site: process.env.SITE_URL ?? 'https://ntacpa.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'never',
  build: {
    // Emit /services.html rather than /services/index.html so the site drops
    // onto any plain static host without directory-index rewriting.
    format: 'file',
  },
  // Generates sitemap-index.xml + sitemap-0.xml from `site` above. Left on
  // for the preview build too — harmless, since every preview page is
  // noindex and robots.txt.ts never links to it there.
  integrations: [sitemap()],
});
