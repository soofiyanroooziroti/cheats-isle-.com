/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/'],
  ['/cheats/', '/products/'],
  ['/products/the-isle-cheats', '/products/'],
  ['/products/the-isle-cheats/', '/products/'],
  ['/products/the-isle-cheats/the-isle-cheat', '/product/the-isle-cheat/'],
  ['/products/the-isle-cheats/the-isle-cheat/', '/product/the-isle-cheat/'],
  ['/products/the-isle-cheats/spoofer', '/product/spoofer/'],
  ['/products/the-isle-cheats/spoofer/', '/product/spoofer/'],
  ['/products/the-isle-cheats/hwid-spoofer', '/product/spoofer/'],
  ['/products/the-isle-cheats/hwid-spoofer/', '/product/spoofer/'],
  ['/products/the-isle-cheats/ugc', '/product/ugc/'],
  ['/products/the-isle-cheats/ugc/', '/product/ugc/'],
  ['/products/the-isle-cheats/utilities', '/products/'],
  ['/products/the-isle-cheats/utilities/', '/products/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
