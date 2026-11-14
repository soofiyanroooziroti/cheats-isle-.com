/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-10';

export type StatusTone = 'green' | 'red' | 'blue';

export interface StatusLegendItem {
  tone: StatusTone;
  label: string;
  meaning: string;
}

export interface StatusPatchEntry {
  build: string;
  when: string;
  summary: string;
}

export interface StatusCheatUpdateEntry {
  when: string;
  summary: string;
  /** Set false when the changelog line is published (remove TODO from copy). */
  todo?: boolean;
}

/** Current store state. Green = updated and usable. */
export const STATUS_TONE: StatusTone = 'green';

export const STATUS_TONE_LABELS: Record<StatusTone, string> = {
  green: 'Ready',
  blue: 'Updating',
  red: 'Paused',
};

export function getStatusLabel(tone: StatusTone = STATUS_TONE): string {
  return STATUS_TONE_LABELS[tone];
}

/** Active state label for /status/ header and pills. */
export const STATUS_LABEL = getStatusLabel();

export const STATUS_EVRMA_BUILD = '0.21.772';
export const STATUS_EVRMA_BUILD_RELEASE = '3 Aug 2026';

export const STATUS_REQUIREMENTS = [
  'Windows 10 or 11 (64-bit)',
  'The Isle Evrima only (not legacy The Isle)',
  'Easy Anti-Cheat (EAC) enabled',
] as const;

export const STATUS_LEGEND: StatusLegendItem[] = [
  { tone: 'green', label: 'Ready', meaning: 'The current build is updated.' },
  { tone: 'blue', label: 'Updating', meaning: 'Our team is working on it, not ready yet.' },
  { tone: 'red', label: 'Paused', meaning: "Not updated, don't launch." },
];

/** Evrima patches from Steam announcements (newest first). */
export const STATUS_GAME_PATCHES: StatusPatchEntry[] = [
  {
    build: '0.21.772',
    when: '3 Aug 2026',
    summary: 'Austroraptor, Mangroves, and skin pattern updates.',
  },
  {
    build: '0.21.734',
    when: '9 Jul 2026',
    summary: 'Hill sliding changes and bug fixes.',
  },
  {
    build: '0.21.720',
    when: '3 Jul 2026',
    summary: 'Kentrosaurus, Redwoods, and Mangroves biomes.',
  },
];

export const STATUS_BAN_RISK =
  'Third-party tools for The Isle can violate game terms and trigger Easy Anti-Cheat action. You use this software at your own risk, including possible account or hardware restrictions.';

/** @deprecated Use STATUS_GAME_PATCHES */
export const STATUS_GAME_NOTES: never[] = [];

/** @deprecated Use STATUS_CHEAT_UPDATES */
export const STATUS_RECENT_UPDATES: never[] = [];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Format YYYY-MM-DD as "10 Nov 2026". */
export function formatStatusUpdated(isoDate: string = STATUS_LAST_UPDATED): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const label = MONTHS[month - 1];
  if (!label) return isoDate;
  return `${day} ${label} ${year}`;
}

/** Muted meta beside the status pill. */
export function formatLastUpdatedLine(isoDate: string = STATUS_LAST_UPDATED): string {
  return `Last updated ${formatStatusUpdated(isoDate)}`;
}

/** Pill label from current STATUS_TONE. */
export function formatStatusPillLabel(tone: StatusTone = STATUS_TONE): string {
  return getStatusLabel(tone);
}

/** Loader changelog for The Isle Cheats (newest first). */
export function getStatusCheatUpdates(): StatusCheatUpdateEntry[] {
  return [
    {
      when: formatStatusUpdated(STATUS_LAST_UPDATED),
      summary: 'TODO: Publish menu notes for Evrima build 0.21.772 and verify Visual ESP defaults.',
      todo: true,
    },
    {
      when: '10 Oct 2026',
      summary: 'TODO: Add panic-key reminder and Misc HUD copy for Fullbright after the September EAC patch.',
      todo: true,
    },
  ];
}
