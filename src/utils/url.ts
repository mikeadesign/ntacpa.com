/**
 * Prefixes a root-relative path ("/services") with the configured base path.
 *
 * Production serves from the domain root (base "/"), so this is a no-op
 * there. The GitHub Pages beta preview serves from a project subpath
 * (https://mikeadesign.github.io/ntacpa.com/, base "/ntacpa.com"), and every
 * hand-written internal link needs this or it 404s under that subpath —
 * Astro's `base` config only rewrites its own generated asset URLs, not
 * literal `href="/x"` strings in markup.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/**
 * True on the GitHub Pages beta preview build, false on production and on
 * `astro dev`. Single source of truth for "is this the preview" — Base.astro
 * (noindex, analytics gating) and robots.txt.ts (disallow-all) both key off
 * this so the two can't drift out of sync on what counts as preview.
 */
export function isPreviewBuild(): boolean {
  return import.meta.env.BASE_URL !== '/';
}
