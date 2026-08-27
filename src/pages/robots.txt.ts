import type { APIRoute } from 'astro';
import { isPreviewBuild, withBase } from '../utils/url';

/**
 * Generated rather than a static public/ file because it has to differ
 * between builds — the GitHub Pages preview gets Disallow: /, belt-and-
 * suspenders alongside Base.astro's noindex meta tag; production allows
 * everything and points at the sitemap. A static file can't make that call.
 */
export const GET: APIRoute = ({ site }) => {
  const body = isPreviewBuild()
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap-index.xml'), site).href}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
