import type { AcquisitionStep, ProductSlide, SystemRequirement } from './product-types';
import type { Block } from './product-locale-types';
import { THE_ISLE_CHEAT_FEATURE_GROUPS } from './the-isle-cheat-feature-groups';
import { SPOOFER_FEATURE_GROUPS } from './spoofer-feature-groups';

/** Home hero slider only — not the cheats product gallery. */
export const cheatHomeHeroSlides: ProductSlide[] = [
  {
    src: '/images/products/vendor-visuals.webp',
    alt: 'Visuals tab of The Isle Cheats menu showing Player, NPC and Animal ESP options',
    caption: 'Loader preview',
    captionDesc: 'Screenshot slot for the Evrima menu on Windows PC.',
    width: 1330,
    height: 840,
    objectFit: 'contain',
  },
  {
    src: '/images/products/vendor-world.webp',
    alt: 'World tab of The Isle Cheats menu with Corpse, Gore, Fruit, Water and World Distance options',
    caption: 'ESP preview',
    captionDesc: 'Screenshot slot for player awareness overlays.',
    width: 1330,
    height: 840,
    objectFit: 'contain',
  },
  {
    src: '/images/products/vendor-misc.webp',
    alt: 'Misc tab of The Isle Cheats menu with Crosshair, Fullbright and display options',
    caption: 'Misc HUD',
    captionDesc: 'Screenshot slot for misc overlays.',
    width: 1330,
    height: 840,
    objectFit: 'contain',
  },
  {
    src: '/images/blog/spinosaurus.webp',
    alt: 'Spinosaurus with a tall dorsal sail walking through grassland in The Isle',
    caption: 'Species read',
    captionDesc: 'Screenshot slot for dinosaur ESP tuning.',
    width: 1200,
    height: 675,
    objectFit: 'cover',
  },
  {
    src: '/images/blog/evrima-map.webp',
    alt: 'Sandy beach shoreline with dinosaurs in The Isle',
    caption: 'World ESP',
    captionDesc: 'Screenshot slot for forage and water markers.',
    width: 1200,
    height: 675,
    objectFit: 'cover',
  },
];

const galleryVisual: ProductSlide = {
  src: '/images/products/vendor-visuals.webp',
  alt: 'Visuals tab of The Isle Cheats menu showing Player, NPC and Animal ESP options',
  caption: 'Visual ESP',
  captionDesc: 'Player, NPC, and animal toggles in the loader.',
  width: 1330,
  height: 840,
  objectFit: 'contain',
};

const galleryWorld: ProductSlide = {
  src: '/images/products/vendor-world.webp',
  alt: 'World tab of The Isle Cheats menu with Corpse, Gore, Fruit, Water and World Distance options',
  caption: 'World markers',
  captionDesc: 'Corpse, gore, fruit, water, and distance options.',
  width: 1330,
  height: 840,
  objectFit: 'contain',
};

const galleryMisc: ProductSlide = {
  src: '/images/products/vendor-misc.webp',
  alt: 'Misc tab of The Isle Cheats menu with Crosshair, Fullbright and display options',
  caption: 'Misc & keys',
  captionDesc: 'Crosshair, Fullbright, menu key, and panic key.',
  width: 1330,
  height: 840,
  objectFit: 'contain',
};

export const acquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Confirm modules are online on cheatsisle.com before you buy—especially after a The Isle (Evrima) or Easy Anti-Cheat update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Choose monthly or lifetime—same USD pricing on every product in the lineup.',
  },
  {
    num: '03',
    title: 'Secure checkout',
    desc: 'Complete checkout on the portal. Your license unlocks with instant delivery.',
  },
  {
    num: '04',
    title: 'Install & verify',
    desc: 'Follow the setup guide, load a conservative preset, and test in a low-stakes herd before main play.',
  },
];

export const utilitySlides = {
  spoofer: [
    {
      src: '/images/products/hwid-spoofer-hero.webp',
      alt: 'The Isle HWID spoofer on Windows PC',
      caption: 'HWID spoofer',
      captionDesc: 'Hardware fingerprint tools before you relaunch Evrima.',
    },
    {
      src: '/images/products/hwid-spoofer-board.webp',
      alt: 'Phoenix Satano HWID spoofer hardware fingerprint rotation on Windows PC',
      caption: 'Phoenix board',
      captionDesc: 'Disk, MAC, and GPU ID rotation.',
    },
    {
      src: '/images/products/hwid-spoofer-brand.webp',
      alt: 'Phoenix WH-Satano spoofer branding on Windows PC',
      caption: 'Phoenix WH',
      captionDesc: 'Spoofer workspace used on every store.',
    },
  ],
  ugc: [
    {
      src: '/images/products/ugc-account-recovery.webp',
      alt: 'The Isle unban tool workspace preview on Windows PC',
      caption: 'Account recovery',
      captionDesc: 'Templates, evidence lists, and follow-up in one workspace.',
    },
  ],
} as const;

export const cheatsContent = {
  images: [galleryVisual, galleryWorld, galleryMisc],
  goodToKnow:
    'The Isle (Evrima) and Easy Anti-Cheat (EAC) update often. Confirm availability on cheatsisle.com before you launch. Overlay behavior may differ in menus or spectator views after patches.',
  limitations:
    'Third-party software can violate game terms and lead to bans. You use this software at your own risk. Compatibility can change after game, EAC, or Windows updates without notice.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10/11' },
    { icon: 'reqCpu', text: 'Intel/AMD' },
    { icon: 'reqShieldGuide', text: 'HVCI ON' },
    { icon: 'reqSettings', text: 'CORE ISOLATION ON' },
    { icon: 'shieldCheck', text: 'TPM ON' },
    { icon: 'reqShieldAccount', text: 'SECURE BOOT ON' },
  ] as SystemRequirement[],
  featureGroups: THE_ISLE_CHEAT_FEATURE_GROUPS,
  overview: {
    title: 'Built for The Isle on Windows PC',
    paragraphs: [
      'The Isle cheat loader ships Visual and Misc modules listed on this page for Evrima on Windows PC. Updates ship while your key is active, with Discord help for setup.',
      'Always check availability on cheatsisle.com before you launch, especially after an Easy Anti-Cheat (EAC) or client patch.',
    ],
  },
  body: [
    { type: 'h2', text: 'Modules included' },
    {
      type: 'p',
      text: 'Visual and Misc groups cover every menu line on this page—player ESP, dinosaur labels, world markers, crosshair, fullbright, FPS readouts, and custom keys.',
    },
    { type: 'h2', text: 'Plans' },
    {
      type: 'p',
      text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y). Instant digital delivery worldwide after checkout.',
    },
  ] as Block[],
};

export const spooferContent = {
  images: [...utilitySlides.spoofer],
  goodToKnow:
    'HWID tools change how your PC fingerprint appears—they do not remove account bans by themselves. Follow portal guides before launching The Isle again.',
  limitations:
    'Spoofing carries technical risk and may violate game terms. Results vary by ban type and driver setup. Use only on systems you own.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator rights.' },
    { icon: 'reqRestorePoint', text: 'Create a restore point before running hardware tools.' },
    { icon: 'reqWifi', text: 'Stable internet for activation and verification steps.' },
  ] as SystemRequirement[],
  fullFeatures: SPOOFER_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.name)),
  featureGroups: SPOOFER_FEATURE_GROUPS,
  overview: {
    title: 'The Isle HWID spoofer workflow',
    paragraphs: [
      'The Isle HWID spoofer focuses on hardware profile rotation when you need a clean machine context before relaunching The Isle after a hardware flag.',
      'Monthly and lifetime USD plans use the same checkout flow as the rest of the lineup.',
    ],
  },
  body: [
    { type: 'h2', text: 'When to use it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail on one PC but work elsewhere—not for account-only bans. Pair with conservative cheat presets after verification.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $50 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};

export const ugcContent = {
  images: [...utilitySlides.ugc],
  goodToKnow:
    'Gather order details, account facts, and restriction screenshots before opening a ticket. The Isle Unban Tool structures appeals—it does not bypass platform review.',
  limitations:
    'The Isle Unban Tool does not guarantee account restoration. Results vary by case type and platform policy.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
    { icon: 'reqWifi', text: 'Internet access for workflow sync and updates.' },
    { icon: 'reqSettings', text: 'Administrator access for installation.' },
  ] as SystemRequirement[],
  fullFeatures: [
    'Custom appeal workflows',
    'Multi-platform recovery workspace',
    'Template library',
    'Automation for repetitive steps',
    'Restriction tracking dashboard',
    'Secure portal delivery',
    'Monthly and lifetime USD plans',
  ],
  overview: {
    title: 'The Isle Unban Tool workspace',
    paragraphs: [
      'The Isle Unban Tool helps organize ban appeals and recovery cases with templates, evidence lists, and follow-up reminders.',
      'Instant digital delivery after secure checkout, with Discord support for setup questions.',
    ],
  },
  body: [
    { type: 'h2', text: 'Isle unban appeals' },
    {
      type: 'p',
      text: 'Build custom isle unban appeal paths, automate dispute steps, and track case status when The Isle accounts are locked or restricted.',
    },
    { type: 'h2', text: 'Isle unban evidence' },
    {
      type: 'p',
      text: 'Use checklists so each isle unban packet includes screenshots, timestamps, and the policy section you are citing.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};
