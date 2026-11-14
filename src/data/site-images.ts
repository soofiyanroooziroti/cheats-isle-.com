import manifestJson from '../../public/images/images.json';
import { cheatHomeHeroSlides } from './product-catalog-en';
import type { ProductSlide } from './product-types';

export interface SiteImageEntry {
  page: string;
  slot: string;
  file: string;
  alt: string;
  width: number;
  height: number;
}

const manifest = manifestJson as SiteImageEntry[];

const GALLERY_SLOTS = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5'] as const;

function entryBySlot(slot: string): SiteImageEntry | undefined {
  return manifest.find((e) => e.slot === slot);
}

function blogSlugFromPage(page: string): string | null {
  const match = page.match(/^\/blog\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

export function getHomeHeroSlides(): ProductSlide[] {
  return cheatHomeHeroSlides.map((legacy, index) => {
    const slot = GALLERY_SLOTS[index];
    const entry = slot ? entryBySlot(slot) : undefined;
  return {
      src: legacy.src,
      alt: legacy.alt,
      caption: legacy.caption,
      captionDesc: legacy.captionDesc,
      width: legacy.width ?? entry?.width ?? 1280,
      height: legacy.height ?? entry?.height ?? 720,
      objectFit: legacy.objectFit,
    };
  });
}

export function getHomeOgImage(): { src: string; alt: string; width: number; height: number } {
  const entry = entryBySlot('gallery-1')!;
  return { src: entry.file, alt: entry.alt, width: entry.width, height: entry.height };
}

export function getBlogHeroForSlug(slug: string): SiteImageEntry | undefined {
  return manifest.find((e) => e.slot === 'blog-hero' && blogSlugFromPage(e.page) === slug);
}

export function applyBlogHeroFromManifest<T extends { slug: string; image: string; imageAlt?: string }>(
  post: T,
): T & { imageWidth?: number; imageHeight?: number } {
  const hero = getBlogHeroForSlug(post.slug);
  if (!hero) return post;
  return {
    ...post,
    image: hero.file,
    imageAlt: hero.alt,
    imageWidth: hero.width,
    imageHeight: hero.height,
  };
}
