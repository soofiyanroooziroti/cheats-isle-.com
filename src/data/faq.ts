import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES, localizedPath, localizedRoutes, cheatPath } from '../utils/path-core';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('The Isle Cheats', productPath('the-isle-cheat'));
const productsHub = link('products page', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('spoofer'));
const ugc = link('UGC Account recovery', productPath('ugc'));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if the loader is current?',
    a: 'Open the status page. Green means it is updated and can be used. Red means it is not updated and should not be used. Blue means developers are still updating it.',
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: 'Checkout opens the portal with the loader for the product you paid for. Save a config after you tune it. HVCI, core isolation, TPM, and secure boot stay on.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned?',
    a: 'Yes. Easy Anti-Cheat can act on the account. Nothing on this site is a guarantee that a session stays clean.',
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What is an HWID flag, and does the cheat key fix it?',
    a: `A hardware flag follows the PC. New accounts can fail on that machine and work on another. That is the ${hwid}, sold separately. It does not undo an account-only restriction, and lifetime on ${cheats} does not include it.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which PCs are supported?',
    a: 'Windows 10 or 11 on Intel or AMD, with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can I move a key to another PC?',
    a: 'Open support on Discord with your order ID from checkout. A machine that fails new accounts is an HWID Spoofer purchase, not a free move of the cheat key.',
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is for sale?',
    a: `${cheats} and ${ugc} are $35 for 30 days or $150 lifetime. ${hwid} is $50 for 30 days or $150 lifetime. All three are listed on the ${productsHub} as separate checkouts.`,
  },
  {
    id: 'plans-same-price',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Does $150 lifetime include the spoofer?',
    a: 'No. Lifetime on The Isle Cheats is that product only. The HWID spoofer and UGC recovery are separate keys. The spoofer is $50 monthly or $150 lifetime; the cheat and UGC are $35 monthly or $150 lifetime. A monthly start does not promise a credit toward lifetime.',
    scopes: ['the-isle-cheat', 'hwid-spoofer', 'ugc'],
  },
  {
    id: 'max-distance',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Max Distance control?',
    a: 'Max Distance caps how far every Visual ESP line draws. Lower it in dense forest and raise it when you are hunting on open shoreline.',
    scopes: ['the-isle-cheat'],
  },
  {
    id: 'esp-clutter',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Why does player ESP cover the screen?',
    a: 'Start with Box, Name, and Distance. Add Species and Growth only when you read them. Custom ESP Colors help separate herds from players.',
    scopes: ['the-isle-cheat'],
  },
  {
    id: 'not-dma',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Is this a DMA card?',
    a: 'No. The Isle Cheats is a Windows loader from checkout. A DMA device is a different product and is not what this key delivers. Do not run a file that arrived from a search result.',
    scopes: ['the-isle-cheat'],
  },
  {
    id: 'ugc-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does UGC Account recovery do?',
    a: `${ugc} is an appeal workspace: templates, evidence lists, and follow-up. It is not a guaranteed unban, and it is not the HWID spoofer.`,
    scopes: ['ugc'],
  },
  {
    id: 'spoofer-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'When is the HWID spoofer the right buy?',
    a: `Use ${hwid} when a new account fails on one PC and works on another. It does not fix an account-only restriction. Buy ${ugc} for that case instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'visible-check',
    topic: 'scripts',
    icon: 'faqWhatIsEsp',
    q: 'What does Visible Check do?',
    a: 'Visible Check only draws ESP when the target has line of sight. Box and Snapline still respect the same distance cap when the check is on.',
    scopes: ['the-isle-cheat'],
  },
  {
    id: 'panic-key',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What is the Custom Panic Key for?',
    a: 'Custom Panic Key hides overlays instantly during streams or clips. Pair it with Custom Menu Key so you can reopen the loader without restarting Evrima.',
    scopes: ['the-isle-cheat'],
  },
  {
    id: 'forage-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Do Fruit and Water ESP stack with Animal ESP?',
    a: 'Yes. Fruit, Water, and Animal ESP are separate toggles. Turn Fruit and Water on when you are nesting and keep Animal ESP for hunting reads.',
    scopes: ['the-isle-cheat'],
  },
  {
    id: 'misc-hud',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Do Show FPS and Show Resolution slow the game?',
    a: 'They are overlay readouts in the Misc group. Enable them only when tuning performance after a patch, then hide them with Custom Panic Key during regular play.',
    scopes: ['the-isle-cheat'],
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'hwid-ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Plans, visuals, the loader, the spoofer, UGC, and setup.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes);
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${cheats}. The feature list on that page is the checkout source of truth.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: 'Open support on Discord with your order ID and the article title. Include the exact loader text if something fails.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: 'Re-check after every The Isle (Evrima) or EAC update. Reload a saved config instead of copying old slider values from a post.',
  },
];

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return defaultBlogFaqs;
}

export const compareRows = [
  { feature: 'Aimbot options', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Player ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot filter', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Weapon options', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Camera FOV', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
