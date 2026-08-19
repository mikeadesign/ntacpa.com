// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ntacpa.com',
  trailingSlash: 'never',
  build: {
    // Emit /services.html rather than /services/index.html so the site drops
    // onto any plain static host without directory-index rewriting.
    format: 'file',
  },
});
