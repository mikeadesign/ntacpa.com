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
