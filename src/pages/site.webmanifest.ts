import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { withBase } from '../utils/url';

/**
 * PWA manifest, generated rather than a static public/ file so start_url and
 * the icon src go through withBase() — otherwise they'd 404 under the
 * GitHub Pages preview subpath, same reasoning as every other internal
 * path in this codebase (see src/utils/url.ts).
 */
export const GET: APIRoute = () => {
  const manifest = {
    name: `${site.name} — ${site.principal}`,
    short_name: site.name,
    description:
      'Tax preparation, bookkeeping, and regulatory accounting for individuals, small businesses, hedge funds, and broker-dealers.',
    start_url: withBase('/'),
    display: 'standalone',
    background_color: '#faf8f3',
    theme_color: '#16324d',
    icons: [
      {
        src: withBase('/icon-512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
