import type { ProductFeatureGroup } from './product-types';

const visualFeatures = [
  'Player ESP',
  'NPC ESP',
  'Animal ESP',
  'Box',
  'Snapline',
  'Name',
  'Distance',
  'Corpse',
  'Health',
  'Stamina',
  'Growth',
  'Species',
  'Player Direction',
  'Head Dot',
  'Visible Check',
  'Gore',
  'Fruit',
  'Water',
  'Max Distance',
] as const;

const miscFeatures = [
  'Crosshair',
  'Suicide',
  'Fullbright',
  'Show FPS',
  'Show Resolution',
  'Show Time',
  'Custom Menu Key',
  'Custom Panic Key',
  'Custom ESP Colors',
] as const;

const notes: Record<string, string> = {
  'Player ESP': 'Highlights other survivors in Evrima',
  'NPC ESP': 'Marks AI characters on the map',
  'Animal ESP': 'Shows creatures and herds nearby',
  Box: 'Draws a box around each target',
  Snapline: 'Line from your view to the target',
  Name: 'Shows the player or entity name',
  Distance: 'Meters from your camera',
  Corpse: 'Marks bodies on the ground',
  Health: 'Current health readout',
  Stamina: 'Stamina bar or value',
  Growth: 'Growth stage for dinosaurs',
  Species: 'Species label on models',
  'Player Direction': 'Facing angle for players',
  'Head Dot': 'Dot on the head bone',
  'Visible Check': 'Only draws when line of sight is clear',
  Gore: 'Highlights gore interactables',
  Fruit: 'Marks forage fruit',
  Water: 'Water sources and drink spots',
  'Max Distance': 'Caps draw range for every ESP type',
  Crosshair: 'Center reticle overlay',
  Suicide: 'Menu action to respawn',
  Fullbright: 'Brightens dark areas for readability',
  'Show FPS': 'Frames per second counter',
  'Show Resolution': 'Current render resolution',
  'Show Time': 'In-game or system clock',
  'Custom Menu Key': 'Rebind the menu toggle',
  'Custom Panic Key': 'Hides overlays instantly',
  'Custom ESP Colors': 'Per-entity color pickers',
};

function group(name: string, names: readonly string[]): ProductFeatureGroup {
  return {
    name,
    items: names.map((feature) => ({ name: feature, desc: notes[feature] ?? 'Toggle in the menu' })),
  };
}

export const THE_ISLE_CHEAT_FEATURE_GROUPS: ProductFeatureGroup[] = [
  group('Visual', visualFeatures),
  group('Misc', miscFeatures),
];
