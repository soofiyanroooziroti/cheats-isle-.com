export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'The Isle Cheats & The Isle Evrima Cheats',
    description:
      'The isle cheats and the isle evrima cheats for Windows PC—compare the loader, HWID spoofer, and unban tool. Monthly and lifetime USD plans with Discord support.',
  },
  '/products/': {
    title: 'Product Catalog: Loader, Spoofer, and Unban Tool',
    description:
      'Compare plans for the Evrima menu, HWID spoofer, and unban tool on Windows PC. Monthly and lifetime USD options, each with its own checkout.',
  },
  '/product/the-isle-cheat/': {
    title: 'Evrima Loader for Windows PC',
    description:
      'Evrima loader for Windows PC with Visual and Misc modules, portal delivery, and $35 monthly or $150 lifetime USD plans.',
  },
  '/product/spoofer/': {
    title: 'The Isle HWID Spoofer & The Isle Spoofer',
    description:
      'The isle hwid spoofer workflow for hardware flags on Windows PC. Monthly $50 or lifetime $150 USD, separate from the cheat loader.',
  },
  '/product/ugc/': {
    title: 'The Isle Unban Tool: Account Appeal Workspace',
    description:
      'The isle unban tool organizes appeals and recovery steps for The Isle on Windows PC. Monthly $35 or lifetime $150 USD.',
  },
  '/blog/': {
    title: 'The Isle Guides: Setup, EAC Notes, and Product Help',
    description:
      'Guides on loader setup, Easy Anti-Cheat patch days, HWID spoofer checks, and product pricing for Windows PC customers before checkout.',
  },
  '/forum/': {
    title: 'Community Forum: Evrima Visuals, Status, and Product Help',
    description:
      'Evrima community threads on markers, growth, status, and the loader, spoofer, and unban tool. Developer replies are marked on each thread.',
  },
  '/faq/': {
    title: 'FAQ: Plans, Setup and EAC Risk Before You Buy',
    description:
      'FAQ answers on checkout, Easy Anti-Cheat updates, Windows requirements, hardware flags, and how the loader, spoofer and unban tool differ.',
  },
  '/support/': {
    title: 'Support: Loader and Checkout Help',
    description:
      'Support for the Windows loader, HWID spoofer, and unban tool on cheatsisle.com. Use Discord with your order details and loader text.',
  },
  '/about/': {
    title: 'About cheatsisle store: Checkout, Delivery and Ban Risk',
    description:
      'What cheatsisle.com sells, how checkout and portal delivery work, and the ban risk that stays on you when you use these tools on Windows PC.',
  },
  '/privacy/': {
    title: 'Privacy Policy: Analytics, Cookies and Checkout Data',
    description:
      'How cheatsisle.com handles analytics and cookies. Payment card numbers stay on the checkout provider, not on this site.',
  },
  '/terms/': {
    title: 'Terms of Use: Licenses, Refunds and Acceptable Use',
    description:
      'License terms, acceptable use, and the no-refund rule for the loader, HWID spoofer, and unban tool sold through cheatsisle.com on Windows PC.',
  },
  '/status/': {
    title: 'The Isle Cheats Status | Evrima Build & Updates',
    description:
      'Check before launch after an Evrima patch or Easy Anti-Cheat update. The badge shows if the build is ready, updating, or paused.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
