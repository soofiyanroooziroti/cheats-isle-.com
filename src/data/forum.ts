export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  developer?: boolean;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  /** Meta description. Cards keep the shorter excerpt. */
  description: string;
  author: string;
  age: string;
  date: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
  /** Answered threads that should show a closed badge. */
  closed?: boolean;
}

export const FORUM_DEVELOPER = 'cheatsisle';

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Stable filter keys — always derived from English category names. */
export const FORUM_CATEGORY_KEYS: Record<string, string> = {
  General: 'general',
  'Guides & Builds': 'guidesbuilds',
  'Patch Talk': 'patchtalk',
  Community: 'community',
};

export function forumCategoryFilterKey(category: string): string {
  return FORUM_CATEGORY_KEYS[category] ?? category.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countComments(comment.replies) : 0),
    0,
  );
}

function withCounts(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export function forumLastReply(comments: ForumComment[]): { author: string; age: string } | null {
  let last: ForumComment | null = null;
  const walk = (list: ForumComment[]) => {
    for (const comment of list) {
      last = comment;
      if (comment.replies?.length) walk(comment.replies);
    }
  };
  walk(comments);
  return last ? { author: last.author, age: last.age } : null;
}

const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    slug: 'water-markers-everywhere',
    category: 'General',
    categoryTone: 'purple',
    title: 'water markers on every puddle, screen is a mess',
    excerpt: 'Turned on water and fruit and now the whole bank is labels. Is max distance the slider I want.',
    description:
      'Water and fruit markers follow Max Distance. Shorten the range so you only see the drink and forage you can actually reach.',
    author: 'mudbank',
    age: '6h ago',
    date: 'Nov 12, 2026',
    upvotes: 41,
    flair: 'Visuals',
    sourceTitle: 'The Isle ESP Explained: Player, Animal and Water Overlays',
    sourcePath: '/blog/the-isle-esp/',
    body: [
      'yo i turned water and fruit on to find a drink and now every puddle in the region has a label. i cannot see the dinosaur 😭',
      'is there a distance cap or do i just leave them off',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '5h ago',
        score: 38,
        developer: true,
        body: 'Max Distance caps water, fruit, players, and animals together. Pull it in until the markers are the bank in front of you. Fruit is for forage. Water is for a drink. You do not need both at full range while you are already standing in the shallows.',
      },
      {
        author: 'riverbend',
        age: '4h ago',
        score: 19,
        body: 'same. dropped max distance and the shore got readable again. thought the menu was broken ngl',
      },
      {
        author: 'mudbank',
        age: '3h ago',
        score: 7,
        body: 'W that was the slider. thanks both of you 👍',
      },
      {
        author: 'nestwatch',
        age: '2h ago',
        score: 4,
        body: 'turn fruit off once you are on meat. water only when you are thirsty. both at once is how the screen dies lol',
      },
      {
        author: 'deino_shore',
        age: '1h ago',
        score: 3,
        body: 'this thread saved my night hunt. appreciate it',
      },
    ],
  },
  {
    slug: 'ready-updating-paused',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'ready vs updating vs paused??',
    excerpt: 'Status says Ready today. What do Updating and Paused mean before I launch Evrima.',
    description:
      'Ready means the current build is updated. Updating means it is not ready yet. Paused means do not launch.',
    author: 'evrima_night',
    age: '8h ago',
    date: 'Nov 10, 2026',
    upvotes: 56,
    flair: 'Status',
    sourceTitle: 'The Isle module status',
    sourcePath: '/status/',
    body: [
      'status pill says Ready (10 nov). cool.',
      'before i hop on a server, what is Updating and what is Paused? i do not want to guess 😭',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '7h ago',
        score: 62,
        developer: true,
        body: 'Ready = the current build is updated, you can use it. Updating = we are still working on it, not ready yet. Paused = not updated, do not launch.',
      },
      {
        author: 'evrima_night',
        age: '6h ago',
        score: 9,
        body: 'bet. Ready today so i am in. ty',
      },
      {
        author: 'growth_check',
        age: '5h ago',
        score: 14,
        body: 'needed this written like i am 5. i kept looking for the old color names 😂',
      },
      {
        author: 'bank_camper',
        age: '4h ago',
        score: 6,
        body: 'saved. if i see Updating i am touching grass until it flips to Ready',
      },
      {
        author: 'hypsi',
        age: '3h ago',
        score: 5,
        body: 'W explanation. linked this to my duo',
      },
      {
        author: 'spino_main',
        age: '2h ago',
        score: 2,
        body: 'Paused last month is why i waited. this layout is way clearer',
      },
      {
        author: 'allo_trail',
        age: '1h ago',
        score: 8,
        body: 'this helped, i was about to launch on a guess. thanks admin',
      },
    ],
  },
  {
    slug: 'growth-and-species-labels',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'growth and species labels, which ones do i leave on',
    excerpt: 'Animal ESP is on. Growth, species, health, and stamina are all shouting. What is each one for.',
    description:
      'Species names the dinosaur. Growth is the stage. Health and stamina are readouts. Turn on the one you are actually using.',
    author: 'species_tag',
    age: '9h ago',
    date: 'Nov 6, 2026',
    upvotes: 33,
    flair: 'Animals',
    sourceTitle: 'The Isle Dinosaurs: Full Evrima Roster Overview',
    sourcePath: '/blog/the-isle-dinosaurs/',
    body: [
      'animal esp is on and i stacked species, growth, health, and stamina.',
      'i just wanted to know if the thing in the brush is bigger than me. which row is that',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '8h ago',
        score: 29,
        developer: true,
        body: 'Species is the name. Growth is the stage. Health and stamina are the bars. For “what is that and how grown is it,” species plus growth is enough. Add health or stamina only when you are already in the fight. Max Distance still applies, so a label two regions away is not a target.',
      },
      {
        author: 'trex_ridge',
        age: '6h ago',
        score: 11,
        body: 'yeah i had all four on and could not read the herd. species + growth is the move 🤷‍♂️',
      },
      {
        author: 'species_tag',
        age: '4h ago',
        score: 4,
        body: 'fair. turned the extra two off. thanks',
      },
    ],
  },
  {
    slug: 'bought-spoofer-account-still-locked',
    category: 'Community',
    categoryTone: 'green',
    title: 'bought the spoofer and the account is still locked??',
    excerpt: 'New name on the same pc works. The locked name does not. Did I buy the wrong thing.',
    description:
      'HWID spoofer is for a PC flag. An account-only restriction is the unban tool, sold separately.',
    author: 'nest_left',
    age: '7h ago',
    date: 'Nov 2, 2026',
    upvotes: 48,
    flair: 'Which product',
    sourceTitle: 'The Isle HWID Spoofer',
    sourcePath: '/product/spoofer/',
    body: [
      'ok wtf. spoofer ran, fresh account gets into Evrima, old account still locked.',
      'did i just pay for the wrong product or is the spoofer broken',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '6h ago',
        score: 44,
        developer: true,
        body: 'That pattern is an account restriction, not a PC flag. The spoofer does not unlock a banned name. Account appeals are the unban tool, separate checkout. It organizes the case. It does not promise the platform will restore the account.',
      },
      {
        author: 'water_mark',
        age: '5h ago',
        score: 17,
        body: 'this is the post i needed. spoofer = the pc, unban tool = the name. do not mix them lol',
      },
      {
        author: 'nest_left',
        age: '4h ago',
        score: 6,
        body: 'ahh. so i bought the pc one for an account problem. my bad 😬',
      },
      {
        author: 'fruit_loop',
        age: '3h ago',
        score: 9,
        body: 'W reply. sending this to my group before they double buy',
      },
      {
        author: 'panic_key',
        age: '2h ago',
        score: 3,
        body: 'helped. i was one click from a second spoofer key',
      },
    ],
  },
  {
    slug: 'boxes-and-snaplines',
    category: 'General',
    categoryTone: 'purple',
    title: 'boxes and snaplines on every dino',
    excerpt: 'Player ESP, animal ESP, box, and snapline are all on. I cannot tell a player from a herd.',
    description:
      'Player ESP and Animal ESP are separate. Box and snapline are styles. Use one category and one style, then shorten Max Distance.',
    author: 'box_on',
    age: '5h ago',
    date: 'Oct 28, 2026',
    upvotes: 27,
    flair: 'Visuals',
    sourceTitle: 'The Isle ESP Explained: Player, Animal and Water Overlays',
    sourcePath: '/blog/the-isle-esp/',
    body: [
      'turned on player esp, animal esp, box, name, and snapline. the shore looks like a diagram.',
      'i only wanted other players. the herd is drowning them',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '4h ago',
        score: 24,
        developer: true,
        body: 'Player ESP is other people. Animal ESP is dinosaurs. Box, snapline, and name are styles you add on top. If you only want players, leave Animal ESP off and pick one style. Snapline plus box plus name on both categories is why the bank is unreadable.',
        replies: [
          {
            author: 'box_on',
            age: '3h ago',
            score: 5,
            body: 'animal esp off, box only. i can see the shore again. ty',
          },
        ],
      },
      {
        author: 'snapline',
        age: '2h ago',
        score: 8,
        body: 'this comment helped more than the video i was copying. one style. not all of them',
      },
    ],
  },
  {
    slug: 'overlays-after-evrima-patch',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'evrima patched and the labels feel wrong',
    excerpt: 'Client updated. Species labels and water marks do not match what I am looking at. Status was Updating this morning.',
    description:
      'After an Evrima client update, wait until status is Ready, then recheck Max Distance and which overlay is actually on.',
    author: 'patch_mud',
    age: '10h ago',
    date: 'Oct 22, 2026',
    upvotes: 22,
    flair: 'Patch',
    sourceTitle: 'The Isle Evrima Patch Notes: Latest Dinosaurs and Changes',
    sourcePath: '/blog/the-isle-evrima-patch-notes/',
    body: [
      'woke up, status was Updating. i waited. it is Ready now.',
      'species label says one thing and the model in the brush looks like another. did i launch too early or is the slider just long',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '9h ago',
        score: 21,
        developer: true,
        body: 'Waiting for Ready was right. Updating means the build is not ready. Once it is Ready, reopen the menu and check you are on Animal ESP with a short Max Distance. A label from across the map will not match the body in front of you. If it still disagrees up close, ticket support with the order email and the status line you saw.',
      },
      {
        author: 'patch_mud',
        age: '8h ago',
        score: 4,
        body: 'W. pulled distance in and the close one matches. the far ones were noise',
      },
      {
        author: 'redwood',
        age: '7h ago',
        score: 6,
        body: 'i launched on Updating once and felt dumb. this is the reminder',
      },
      {
        author: 'mangrove',
        age: '5h ago',
        score: 3,
        body: 'helped. i was mid download when i saw Updating and just stopped',
      },
      {
        author: 'fullbright',
        age: '4h ago',
        score: 2,
        body: 'pin this on patch days fr',
      },
      {
        author: 'stamina_bar',
        age: '3h ago',
        score: 7,
        body: 'same morning here. waited, Ready, labels made sense. thanks',
      },
      {
        author: 'corpse_mark',
        age: '2h ago',
        score: 1,
        body: 'Updating = touch grass. noted 😂',
      },
      {
        author: 'menu_key',
        age: '1h ago',
        score: 5,
        body: 'this thread is why i check status before the file. solid',
      },
    ],
  },
  {
    slug: 'colors-didnt-save',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'esp colors did not save and i am heated',
    excerpt: 'Set player and animal colors, closed the menu, came back to defaults. Panic key still works.',
    description:
      'Custom ESP colors need the config save. Closing the menu is not a save. The panic key only hides overlays.',
    author: 'color_picker',
    age: '6h ago',
    date: 'Oct 18, 2026',
    upvotes: 18,
    flair: 'Config',
    sourceTitle: 'The Isle Cheats',
    sourcePath: '/product/the-isle-cheat/',
    body: [
      'spent 20 min on custom esp colors. players one color, animals another. closed it. defaults again. wtf',
      'panic key still hides everything so the menu is alive. is save a button',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '5h ago',
        score: 16,
        developer: true,
        body: 'Closing the menu is not a save. Custom ESP colors sit in the config save. Store the preset, reopen, and confirm that preset name is the one loaded. The panic key only hides overlays. It does not store colors. Custom menu key is a separate bind if the default open key fights another app.',
      },
      {
        author: 'color_picker',
        age: '4h ago',
        score: 3,
        body: 'there is an actual save. i am blind. colors stuck this time 👍',
      },
      {
        author: 'crosshair',
        age: '3h ago',
        score: 9,
        body: 'lol same. this comment helped. i was rage reinstalling over a color picker',
      },
      {
        author: 'head_dot',
        age: '2h ago',
        score: 2,
        body: 'name the preset something you will recognize. “config1” is how you load the wrong animals color',
      },
    ],
  },
  {
    slug: 'discord-ticket-sitting',
    category: 'Community',
    categoryTone: 'green',
    title: 'discord ticket just sitting there',
    excerpt: 'Opened a ticket with “esp broke” and a meme. No reply. What do they actually want.',
    description: 'Support tickets need the order email, product name, and which overlay or portal sentence failed.',
    author: 'ticket_goblin',
    age: '4h ago',
    date: 'Oct 14, 2026',
    upvotes: 15,
    flair: 'Support',
    sourceTitle: 'How to Fix The Isle Easy Anti-Cheat Not Installed Error',
    sourcePath: '/blog/the-isle-easy-anti-cheat-not-installed/',
    body: [
      'ticket has been quiet. i wrote “animal esp wtf” and a skull emoji. maybe that was the problem 😂',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '3h ago',
        score: 14,
        developer: true,
        body: 'Send the order email, which product (loader, spoofer, or unban tool), and the exact line. If it is visuals, say which toggle (player, animal, water, fruit) and whether status was Ready. “It broke” with no detail is why a ticket sits.',
      },
      {
        author: 'ticket_goblin',
        age: '2h ago',
        score: 2,
        body: 'added the email and said animal esp with status Ready. someone replied. i was the problem lol',
      },
    ],
  },
  {
    slug: 'corpse-health-stamina',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'corpse, health, and stamina. what are these even marking',
    excerpt: 'I see a corpse mark on an empty patch and a stamina number on a dino that already left. Am I reading the menu wrong.',
    description:
      'Corpse marks bodies. Health and stamina are readouts on a target. They still obey Max Distance and the category you enabled.',
    author: 'gore_bit',
    age: '8h ago',
    date: 'Oct 10, 2026',
    upvotes: 36,
    flair: 'Readouts',
    sourceTitle: 'The Isle ESP Explained: Player, Animal and Water Overlays',
    sourcePath: '/blog/the-isle-esp/',
    body: [
      'corpse is on, health is on, stamina is on. one mark is sitting in a clearing with nothing there.',
      'stamina number is on an animal i already lost in the trees. is that a bug or a distance thing',
    ],
    comments: [
      {
        author: 'cheatsisle',
        age: '7h ago',
        score: 31,
        developer: true,
        body: 'Corpse marks a body, not a live dinosaur. If the body was eaten or moved and the mark lingers at long range, shorten Max Distance and look at the ground you can actually see. Health and stamina are readouts on the category you enabled. They are not a reason to chase a number into cover you have not scouted. Visible check, if you use it, only draws when line of sight is clear.',
      },
      {
        author: 'gore_bit',
        age: '6h ago',
        score: 4,
        body: 'pulled distance in. the empty mark was way past the trees. not a bug',
      },
      {
        author: 'health_bar',
        age: '5h ago',
        score: 12,
        body: 'this helped. i was chasing a stamina number like it was a map pin 💀',
      },
      {
        author: 'visible_check',
        age: '4h ago',
        score: 6,
        body: 'W. bookmark the readout names not a random clip',
      },
      {
        author: 'player_dir',
        age: '3h ago',
        score: 3,
        body: 'same question in my group. sending them here',
      },
      {
        author: 'fps_counter',
        age: '2h ago',
        score: 5,
        body: 'Ready status + short distance + one readout. that is the whole pre-flight for me now',
      },
    ],
  },
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}

