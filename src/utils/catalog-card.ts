import type { ProductPage } from '../data/product-types';

export function catalogBuyLabel(slug: string): string {
  if (slug === 'spoofer' || slug === 'hwid-spoofer') return 'Buy The Isle HWID Spoofer';
  if (slug === 'ugc') return 'Buy The Isle Unban Tool';
  return 'Buy The Isle Cheats';
}

/** Category pill under the card title — must not repeat the title. */
export function catalogPillLabel(product: ProductPage): string {
  if (product.slug === 'the-isle-cheat') return product.tier ?? 'ESP & visuals';
  if (product.slug === 'spoofer' || product.slug === 'hwid-spoofer') return 'HWID spoofer';
  if (product.slug === 'ugc') return 'Unban tool';
  if (product.kind === 'tier') return product.tier ?? product.name;
  return product.category ?? 'Utility';
}

export function catalogFeatureTotal(product: ProductPage): number {
  return product.fullFeatures.length > 0 ? product.fullFeatures.length : product.features.length;
}

/** One segment in a card bullet line ("Player ESP · Box" → segments). */
function catalogFeatureSegmentWeight(segment: string): number {
  const text = segment.trim();
  if (!text) return 0;
  if (/^custom keys$/i.test(text)) return 2;
  return 1;
}

/** Count named features on displayed card lines (splits on middle dot). */
export function countDisplayedCatalogFeatures(displayLines: string[]): number {
  return displayLines
    .flatMap((line) =>
      line
        .split(/\s*·\s*/)
        .map((part) => part.trim())
        .filter(Boolean),
    )
    .reduce((sum, segment) => sum + catalogFeatureSegmentWeight(segment), 0);
}
