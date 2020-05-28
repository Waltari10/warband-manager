/* eslint-disable no-console */


// Objective. You want an index of each warband's units.
// Not used in web, run with node locally

const units = [
  {
    'name': '',
    'unit_type': 'Troll',
    'suggestion': 'Troll',
    'm': 6,
    'ws': 3,
    'bs': 1,
    's': 5,
    't': 4,
    'w': 3,
    'i': 1,
    'a': 3,
    'ld': 4,
    'exp': 0,
    'cost': 200,
    'race': 'Troll',
    'warband': 'Orc Mob',
    'rating': 20,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Stupidity',
      'Regeneration',
      'Dumb Monster',
      'Always Hungry',
      'Vomit Attack',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Skink Priest',
    'suggestion': 'Skink Priest',
    'm': 6,
    'ws': 3,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 7,
    'exp': 20,
    'cost': 60,
    'race': 'Skink',
    'warband': 'Lizardmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Lizardman Magic',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Great Hunter',
      'Infiltration',
    ],
  },
  {
    'name': '',
    'unit_type': 'Beastmen Chieftain',
    'suggestion': 'Beastmen Chieftain',
    'm': 5,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 7,
    'exp': 20,
    'cost': 65,
    'race': 'Bestigor',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Bellowing Roar',
    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Engineer',
    'suggestion': 'Dwarf Engineer',
    'm': 3,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 10,
    'cost': 50,
    'race': 'Dwarf',
    'warband': 'Dwarf Treasure Hunters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Expert Weaponsmith',
    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ogre',
    'suggestion': 'Ogre',
    'm': 6,
    'ws': 3,
    'bs': 2,
    's': 4,
    't': 4,
    'w': 3,
    'i': 3,
    'a': 2,
    'ld': 7,
    'exp': 0,
    'cost': 160,
    'race': 'Ogre',
    'warband': 'Ostlanders',
    'rating': 20,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Large',
      'Slow Witted',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // reiklander
    'name': '',
    'unit_type': 'Swordsmen',
    'suggestion': 'Swordsmen',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 35,
    'race': 'Human',
    'warband': 'Reiklanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Expert Swordsmen',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Cold One Beasthounds',
    'suggestion': 'Cold One Beasthounds',
    'm': 6,
    'ws': 3,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 1,
    'i': 1,
    'a': 1,
    'ld': 4,
    'exp': 0,
    'cost': 30,
    'race': 'Cold One Beasthounds',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Animals',
      'Beastmaster',
      'Stupidity',
      'Scaly skin',
      'Fear',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Noble',
    'suggestion': 'Dwarf Noble',
    'm': 3,
    'ws': 5,
    'bs': 4,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 20,
    'cost': 85,
    'race': 'Dwarf',
    'warband': 'Dwarf Treasure Hunters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Priest of Taal',
    'suggestion': 'Priest of Taal',
    'm': 4,
    'ws': 2,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 12,
    'cost': 45,
    'race': 'Human',
    'warband': 'Ostlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Strictures',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Prayers of Taal',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Elder',
    'suggestion': 'Elder',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Ostlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Youngblood',
    'suggestion': 'Youngblood',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Middenheimers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Acolyte',
    'suggestion': 'Acolyte',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 20,
    'race': 'Liche',
    'warband': 'Tomb guardians',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Undead',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Scouts',
    'suggestion': 'Scouts',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 30,
    'race': 'Human',
    'warband': 'Amazons',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Stealthy',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Bowmen',
    'suggestion': 'Bowmen',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 20,
    'race': 'Human',
    'warband': 'Bretonnians',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Imperial Assassin',
    'suggestion': 'Imperial Assassin',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 5,
    'a': 2,
    'ld': 8,
    'exp': 0,
    'cost': 40,
    'race': 'Human',
    'warband': 'Hired Swords',
    'rating': 22,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Weapon Master',
      'Poisoner',
    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [
      'Sword',
      'Dagger',
      'Throwing knives',
      'Crossbow pistol',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Plague Monks',
    'suggestion': 'Plague Monks',
    'm': 5,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 6,
    'exp': 8,
    'cost': 45,
    'race': 'Skaven Clan Pestilens',
    'warband': 'Clan Pestilens',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Shadow Weaver',
    'suggestion': 'Shadow Weaver',
    'm': 5,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 12,
    'cost': 55,
    'race': 'Elf',
    'warband': 'Shadow warriors',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shadow Warrior Magic',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Master of Runes',
    ],
  },
  {
    'name': '',
    'unit_type': 'Giant Rats',
    'suggestion': 'Giant Rats',
    'm': 6,
    'ws': 2,
    'bs': 0,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 4,
    'exp': 0,
    'cost': 15,
    'race': 'Giant Rats',
    'warband': 'Skaven',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pack size',
      'Animals',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Berserker',
    'suggestion': 'Berserker',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 11,
    'cost': 50,
    'race': 'Human',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Frenzy',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Wolf Form',
    'suggestion': 'Wolf Form',
    'm': 6,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 1,
    'i': 5,
    'a': 2,
    'ld': 6,
    'exp': 8,
    'cost': 60,
    'race': 'Wolf Form',
    'warband': 'Mercenaries',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Hates Templars of Sigmar',
    ],
    'skill_lists': [
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Orc Shaman',
    'suggestion': 'Orc Shaman',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 10,
    'cost': 40,
    'race': 'Orc',
    'warband': 'Orc Mob',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Special',
      'Strength',
      'Waaagh! Magic',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Bondsman',
    'suggestion': 'Bondsman',
    'm': 4,
    'ws': 3,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ungors',
    'suggestion': 'Ungors',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 25,
    'race': 'Ungors',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Lowest of the Low',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Esaul',
    'suggestion': 'Esaul',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Shadow Walker',
    'suggestion': 'Shadow Walker',
    'm': 5,
    'ws': 5,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 12,
    'cost': 45,
    'race': 'Elf',
    'warband': 'Shadow warriors',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Beastmen Shaman',
    'suggestion': 'Beastmen Shaman',
    'm': 5,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 11,
    'cost': 45,
    'race': 'Bestigor',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Chaos Rituals',
      'Combat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Liche Priest',
    'suggestion': 'Liche Priest',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 55,
    'race': 'Liche',
    'warband': 'Tomb guardians',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Undead',
    ],
    'skill_lists': [
      'Academic',
      'Mortuary Cult Scroll',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Darksouls',
    'suggestion': 'Darksouls',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 4,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 35,
    'race': 'Human',
    'warband': 'Cult of the Possessed',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Crazed',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Bestigor',
    'suggestion': 'Bestigor',
    'm': 5,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 45,
    'race': 'Bestigor',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ogre Pit Fighter',
    'suggestion': 'Ogre Pit Fighter',
    'm': 6,
    'ws': 3,
    'bs': 2,
    's': 4,
    't': 4,
    'w': 3,
    'i': 3,
    'a': 2,
    'ld': 7,
    'exp': 0,
    'cost': 165,
    'race': 'Ogre',
    'warband': 'Pit fighters',
    'rating': 20,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pit Fighter',
      'Fear',
      'Large',
      'Slow Witted',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Sergeant',
    'suggestion': 'Sergeant',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Clansmen',
    'suggestion': 'Dwarf Clansmen',
    'm': 3,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 0,
    'cost': 40,
    'race': 'Dwarf',
    'warband': 'Dwarf Treasure Hunters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Orc Boss',
    'suggestion': 'Orc Boss',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 4,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 80,
    'race': 'Orc',
    'warband': 'Orc Mob',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Da cunnin\' plan',
    ],
  },
  {
    'name': '',
    'unit_type': 'Cave Squigs',
    'suggestion': 'Cave Squigs',
    'm': 0,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 15,
    'race': 'Cave Squigs',
    'warband': 'Orc Mob',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Movement',
      'Minderz',
      'Not Orcs',
      'Animals',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pirate Captain',
    'suggestion': 'Pirate Captain',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Booming Voice',
    ],
  },
  {
    'name': '',
    'unit_type': 'Sister Superior',
    'suggestion': 'Sister Superior',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Sisters of Sigmar',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Novices',
    'suggestion': 'Novices',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Sisters of Sigmar',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Troll Slayer',
    'suggestion': 'Dwarf Troll Slayer (Pit fighter)',
    'm': 3,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 8,
    'cost': 50,
    'race': 'Dwarf',
    'warband': 'Pit fighters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pit Fighter',
      'Hard to Kill',
      'Hard Head',
      'Hate Orcs and Goblins',
      'Grudgebearers',
      'Death Wish',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Ferocious Charge',
      'Monster Slayer',
      'Berserker',
    ],
  },
  {
    'name': '',
    'unit_type': 'Ulfwerenar',
    'suggestion': 'Ulfwerenar',
    'm': 6,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 2,
    'i': 4,
    'a': 2,
    'ld': 7,
    'exp': 11,
    'cost': 90,
    'race': 'Human',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Bestial',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Centigor',
    'suggestion': 'Centigor',
    'm': 8,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 80,
    'race': 'Centigor',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Drunken',
      'Trample',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Fellblade',
    'suggestion': 'Fellblade',
    'm': 5,
    'ws': 5,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 12,
    'cost': 40,
    'race': 'Elf',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Melee Specialists',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Tomb Scorpions',
    'suggestion': 'Tomb Scorpions',
    'm': 5,
    'ws': 2,
    'bs': 0,
    's': 2,
    't': 2,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 4,
    'exp': 0,
    'cost': 15,
    'race': 'Tomb Scorpions',
    'warband': 'Tomb guardians',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Animals',
      'Scorpions sting',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Witch Hunter Captain',
    'suggestion': 'Witch Hunter Captain',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Witch Hunters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Burn the Witch',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Nurglings',
    'suggestion': 'Nurglings',
    'm': 4,
    'ws': 3,
    'bs': 0,
    's': 3,
    't': 2,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 10,
    'exp': 0,
    'cost': 15,
    'race': 'Nurglings',
    'warband': 'Carnival of Chaos',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Cloud of Flies',
      'Swarm',
      'Daemonic',
      'Immune to Poison',
      'Immune to Psychology',
      'Daemonic Aura',
      'Daemonic Instability',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Goblin Warriors',
    'suggestion': 'Goblin Warriors',
    'm': 4,
    'ws': 2,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 15,
    'race': 'Goblin Warriors',
    'warband': 'Orc Mob',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Animosity',
      'Not Orcs',
      'Runts',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Rat Ogre',
    'suggestion': 'Rat Ogre',
    'm': 6,
    'ws': 3,
    'bs': 3,
    's': 5,
    't': 5,
    'w': 3,
    'i': 4,
    'a': 3,
    'ld': 4,
    'exp': 0,
    'cost': 210,
    'race': 'Rat Ogre',
    'warband': 'Skaven',
    'rating': 20,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Animal',
      'Large',
      'Fairly stupid',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ogre Bodyguard',
    'suggestion': 'Ogre Bodyguard',
    'm': 6,
    'ws': 3,
    'bs': 2,
    's': 4,
    't': 4,
    'w': 3,
    'i': 3,
    'a': 2,
    'ld': 7,
    'exp': 0,
    'cost': 80,
    'race': 'Ogre',
    'warband': 'Hired Swords',
    'rating': 25,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Large',
    ],
    'skill_lists': [
      'Combat',
      'Strength',
    ],
    'starting_equipment': [
      'Light armour',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Bandit Leader',
    'suggestion': 'Bandit Leader',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Outlaws of Stirwood forest',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Knights Errant',
    'suggestion': 'Knights Errant',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 50,
    'race': 'Human',
    'warband': 'Bretonnians',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Knights Virtue',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Squire',
    'suggestion': 'Squire',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Bretonnians',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Saurus Totem Warrior',
    'suggestion': 'Saurus Totem Warrior',
    'm': 4,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 8,
    'exp': 11,
    'cost': 60,
    'race': 'Saurus',
    'warband': 'Lizardmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Bellowing Battle Roar',
      'Toughened Hide',
    ],
  },
  {
    'name': '',
    'unit_type': 'Black Skaven',
    'suggestion': 'Black Skaven',
    'm': 6,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 6,
    'exp': 8,
    'cost': 40,
    'race': 'Skaven',
    'warband': 'Skaven',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Necromancer',
    'suggestion': 'Necromancer',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Undead',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Necromancy',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pursuers',
    'suggestion': 'Pursuers',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Pit fighters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pit Fighter',
      'Evade',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Bergjaeger',
    'suggestion': 'Bergjaeger',
    'm': 4,
    'ws': 2,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 4,
    'cost': 35,
    'race': 'Human',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Set Traps',
    ],
    'skill_lists': [
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Carnival Master',
    'suggestion': 'Carnival Master',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 70,
    'race': 'Human',
    'warband': 'Carnival of Chaos',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Nurgle Rituals',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // reiklander
    'name': '',
    'unit_type': 'Youngblood',
    'suggestion': 'Youngblood',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Reiklanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Zombies',
    'suggestion': 'Zombies',
    'm': 4,
    'ws': 2,
    'bs': 0,
    's': 3,
    't': 3,
    'w': 1,
    'i': 1,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 15,
    'race': 'Zombies',
    'warband': 'Undead',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'May not Run',
      'Immune to Psychology',
      'Immune to Poison',
      'No Pain',
      'No Brain',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Gors',
    'suggestion': 'Gors',
    'm': 5,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 35,
    'race': 'Bestigor',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Jaeger',
    'suggestion': 'Jaeger',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Ostlanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Zealots',
    'suggestion': 'Zealots',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 20,
    'race': 'Human',
    'warband': 'Witch Hunters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Shadow Master',
    'suggestion': 'Shadow Master',
    'm': 5,
    'ws': 5,
    'bs': 5,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 9,
    'exp': 20,
    'cost': 70,
    'race': 'Elf',
    'warband': 'Shadow warriors',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Plague Novices',
    'suggestion': 'Plague Novices',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 20,
    'race': 'Skaven Clan Pestilens',
    'warband': 'Clan Pestilens',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Amazon Warriors',
    'suggestion': 'Amazon Warriors',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Amazons',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // reiklander
    'name': '',
    'unit_type': 'Champion',
    'suggestion': 'Champion (Reiklander)',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Reiklanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Wolves',
    'suggestion': 'Wolves',
    'm': 9,
    'ws': 3,
    'bs': 0,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 15,
    'race': 'Wolves',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pack Leader',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ship\'s Mate',
    'suggestion': 'Ship\'s Mate',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Cossacks',
    'suggestion': 'Cossacks',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 30,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Hate Chaos',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Outlaws',
    'suggestion': 'Outlaws',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Outlaws of Stirwood forest',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Troll Slayer',
    'suggestion': 'Dwarf Troll Slayer (Hired sword)',
    'm': 3,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 0,
    'cost': 25,
    'race': 'Dwarf',
    'warband': 'Hired Swords',
    'rating': 12,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Deathwish',
      'Hard to Kill',
      'Hard Head',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Ferocious Charge',
      'Monster Slayer',
      'Berserker',
    ],
  },
  {
    'name': '',
    'unit_type': 'Swabbies',
    'suggestion': 'Swabbies',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 0,
    'race': 'Swabbies',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Not Hired',
      'No experience',
      'Rabble',
      '\'Blimey they got away',
      'No true pirates',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Corsairs',
    'suggestion': 'Corsairs',
    'm': 5,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 35,
    'race': 'Elf',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Troll Slayer',
    'suggestion': 'Dwarf Troll Slayer',
    'm': 3,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 8,
    'cost': 50,
    'race': 'Dwarf',
    'warband': 'Dwarf Treasure Hunters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Deathwish',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Ferocious Charge',
      'Monster Slayer',
      'Berserker',
    ],
  },
  {
    'name': '',
    'unit_type': 'Orc Boyz',
    'suggestion': 'Orc Boyz',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Orc',
    'warband': 'Orc Mob',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Animosity',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ghouls',
    'suggestion': 'Ghouls',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 2,
    'ld': 5,
    'exp': 0,
    'cost': 40,
    'race': 'Ghoul',
    'warband': 'Undead',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Youngblood',
    'suggestion': 'Youngblood (Averlander)',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Priestess',
    'suggestion': 'Priestess',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 70,
    'race': 'Human',
    'warband': 'Amazons',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Amazon Rituals',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Men-at-Arms',
    'suggestion': 'Men-at-Arms',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Bretonnians',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Cabin Boy',
    'suggestion': 'Cabin Boy',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Tomb Guardians',
    'suggestion': 'Tomb Guardians',
    'm': 4,
    'ws': 3,
    'bs': 2,
    's': 4,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 30,
    'race': 'Tomb Guardians',
    'warband': 'Tomb guardians',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Undead',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Hunters',
    'suggestion': 'Hunters',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // reiklander
    'name': '',
    'unit_type': 'Warriors',
    'suggestion': 'Warriors',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Reiklanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Champion',
    'suggestion': 'Champion (Outlaws)',
    'm': 4,
    'ws': 3,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Outlaws of Stirwood forest',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Sigmarite Sister',
    'suggestion': 'Sigmarite Sister',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Sisters of Sigmar',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Skeleton Warriors',
    'suggestion': 'Skeleton Warriors',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 20,
    'race': 'Skeleton Warriors',
    'warband': 'Tomb guardians',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Undead',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dire Wolves',
    'suggestion': 'Dire Wolves',
    'm': 9,
    'ws': 3,
    'bs': 0,
    's': 4,
    't': 3,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 4,
    'exp': 0,
    'cost': 50,
    'race': 'Dire Wolves',
    'warband': 'Undead',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Charge',
      'May not Run',
      'Fear',
      'Immune to Psychology',
      'Immune to Poison',
      'No Pain',
      'Unliving',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warhounds of Chaos',
    'suggestion': 'Warhounds of Chaos',
    'm': 7,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 15,
    'race': 'Warhounds of Chaos',
    'warband': 'Beastmen',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Animals',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Kroxigor',
    'suggestion': 'Kroxigor',
    'm': 6,
    'ws': 3,
    'bs': 0,
    's': 5,
    't': 4,
    'w': 3,
    'i': 1,
    'a': 3,
    'ld': 8,
    'exp': 0,
    'cost': 200,
    'race': 'Kroxigor',
    'warband': 'Lizardmen',
    'rating': 20,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Scaly skin',
      'Aquatic',
      'Fear',
      'Large',
      'Animal',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [
      'Halberd',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Tomb Lord',
    'suggestion': 'Tomb Lord',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 5,
    'w': 3,
    'i': 3,
    'a': 2,
    'ld': 8,
    'exp': 20,
    'cost': 150,
    'race': 'Tomb Lord',
    'warband': 'Tomb guardians',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Undead',
    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Blood Brother',
    'suggestion': 'Blood Brother',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 12,
    'cost': 35,
    'race': 'Human',
    'warband': 'Ostlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Boatswains',
    'suggestion': 'Boatswains',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 35,
    'race': 'Human',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Expert Riggers',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [
      'Rope & hook',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Totem Warrior',
    'suggestion': 'Totem Warrior',
    'm': 4,
    'ws': 4,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 30,
    'race': 'Human',
    'warband': 'Amazons',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Frenzy',
    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pit Fighter',
    'suggestion': 'Pit Fighter (Hired sword)',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 4,
    'a': 2,
    'ld': 7,
    'exp': 0,
    'cost': 30,
    'race': 'Human',
    'warband': 'Hired Swords',
    'rating': 22,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [
      'Morning star',
      'Spiked Gauntlet',
      'Helmet',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Brethren',
    'suggestion': 'Brethren (Carnival of Chaos)',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Carnival of Chaos',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Shades',
    'suggestion': 'Shades',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 30,
    'race': 'Elf',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Natural Stealth',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'High Born',
    'suggestion': 'High Born',
    'm': 5,
    'ws': 5,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 9,
    'exp': 20,
    'cost': 70,
    'race': 'Elf',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Sigmarite Matriarch',
    'suggestion': 'Sigmarite Matriarch',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 70,
    'race': 'Human',
    'warband': 'Sisters of Sigmar',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Prayers of Sigmar',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warrior Priest',
    'suggestion': 'Warrior Priest',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 12,
    'cost': 40,
    'race': 'Human',
    'warband': 'Witch Hunters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Prayers of Sigmar',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Marksmen',
    'suggestion': 'Marksmen (Outlaws)',
    'm': 4,
    'ws': 3,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Outlaws of Stirwood forest',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Shadow Warriors',
    'suggestion': 'Shadow Warriors',
    'm': 5,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 35,
    'race': 'Elf',
    'warband': 'Shadow warriors',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Witch Hunter',
    'suggestion': 'Witch Hunter',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 25,
    'race': 'Human',
    'warband': 'Witch Hunters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Burn the Witch',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Halflings Scouts',
    'suggestion': 'Halflings Scouts',
    'm': 4,
    'ws': 2,
    'bs': 4,
    's': 2,
    't': 2,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 20,
    'race': 'Halfling',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Promotion',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pit King',
    'suggestion': 'Pit King',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 4,
    'a': 2,
    'ld': 8,
    'exp': 20,
    'cost': 80,
    'race': 'Human',
    'warband': 'Pit fighters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pit Fighter',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Gunners',
    'suggestion': 'Gunners',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Swivel Guns is Dangerous Matey',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // reiklander
    'name': '',
    'unit_type': 'Mercenary Captain',
    'suggestion': 'Mercenary Captain',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Reiklanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Crew',
    'suggestion': 'Crew',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Pirates',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Beardlings',
    'suggestion': 'Beardlings',
    'm': 3,
    'ws': 3,
    'bs': 2,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 25,
    'race': 'Dwarf',
    'warband': 'Dwarf Treasure Hunters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pit Fighters',
    'suggestion': 'Pit Fighters',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 35,
    'race': 'Human',
    'warband': 'Pit fighters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pit Fighter',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Plague Bearers',
    'suggestion': 'Plague Bearers',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 4,
    'a': 2,
    'ld': 10,
    'exp': 0,
    'cost': 50,
    'race': 'Plague Bearers',
    'warband': 'Carnival of Chaos',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Cloud of Flies',
      'Stream of Corruption',
      'Daemonic',
      'Immune to Poison',
      'Immune to Psychology',
      'Fear',
      'Daemonic Aura',
      'Daemonic Instability',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pestilens Sorcerer',
    'suggestion': 'Pestilens Sorcerer',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 6,
    'exp': 8,
    'cost': 45,
    'race': 'Skaven Clan Pestilens',
    'warband': 'Clan Pestilens',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Magic of the Horned Rat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Orc Big \'Un',
    'suggestion': 'Orc Big \'Un',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 15,
    'cost': 40,
    'race': 'Orc',
    'warband': 'Orc Mob',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Youth',
    'suggestion': 'Youth',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warriors',
    'suggestion': 'Warriors (Kislevite)',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Skink Braves',
    'suggestion': 'Skink Braves',
    'm': 6,
    'ws': 2,
    'bs': 3,
    's': 3,
    't': 2,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 20,
    'race': 'Skink',
    'warband': 'Lizardmen',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Elf ranger',
    'suggestion': 'Elf ranger',
    'm': 5,
    'ws': 4,
    'bs': 5,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 40,
    'race': 'Elf',
    'warband': 'Hired Swords',
    'rating': 12,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Seeker',
      'Excellent Sight',
    ],
    'skill_lists': [
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [
      'Elf bow',
      'Sword',
      'Elven cloak',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Druzhina Captain',
    'suggestion': 'Druzhina Captain',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 80,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Kin',
    'suggestion': 'Kin',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Ostlanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Freelancer',
    'suggestion': 'Freelancer',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 50,
    'race': 'Human',
    'warband': 'Hired Swords',
    'rating': 21,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Ride warhorse',
    ],
    'skill_lists': [
      'Combat',
      'Strength',
    ],
    'starting_equipment': [
      'Heavy armour',
      'Shield',
      'Lance',
      'Sword',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Mutant',
    'suggestion': 'Mutant',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Cult of the Possessed',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Champion',
    'suggestion': 'Champion',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Middenheimers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Augur',
    'suggestion': 'Augur',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Sisters of Sigmar',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Blessed Sight',
    ],
    'skill_lists': [
      'Academic',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Captain',
    'suggestion': 'Captain (Averlander)',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Monk Initiates',
    'suggestion': 'Monk Initiates',
    'm': 5,
    'ws': 2,
    'bs': 3,
    's': 2,
    't': 2,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 4,
    'exp': 0,
    'cost': 20,
    'race': 'Skaven Clan Pestilens',
    'warband': 'Clan Pestilens',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Beastmen',
    'suggestion': 'Beastmen',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 2,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 45,
    'race': 'Gor',
    'warband': 'Cult of the Possessed',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Mercenary Captain',
    'suggestion': 'Mercenary Captain',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Middenheimers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Mountainguard',
    'suggestion': 'Mountainguard',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 30,
    'race': 'Human',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Assassin Adept',
    'suggestion': 'Assassin Adept',
    'm': 6,
    'ws': 4,
    'bs': 4,
    's': 4,
    't': 3,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 7,
    'exp': 20,
    'cost': 60,
    'race': 'Skaven',
    'warband': 'Skaven',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Perfect Killer',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Flagellants',
    'suggestion': 'Flagellants',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 10,
    'exp': 0,
    'cost': 40,
    'race': 'Human',
    'warband': 'Witch Hunters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fanatical',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Tilean Marksman',
    'suggestion': 'Tilean Marksman',
    'm': 4,
    'ws': 3,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 30,
    'race': 'Human',
    'warband': 'Hired Swords',
    'rating': 16,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Steady Hands',
      'Dead Eye Shot',
    ],
    'skill_lists': [
      'Shooting',
    ],
    'starting_equipment': [
      'Light armour',
      'Sword',
      'Dagger',
      'Crossbow',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Streltsi',
    'suggestion': 'Streltsi',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Gun-rest',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Bear Tamer',
    'suggestion': 'Bear Tamer',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 10,
    'cost': 35,
    'race': 'Human',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Bear Handler',
    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warlock',
    'suggestion': 'Warlock',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 30,
    'race': 'Human',
    'warband': 'Hired Swords',
    'rating': 16,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Lesser Magic',
    ],
    'starting_equipment': [
      'Staff',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dark Elf Assassin',
    'suggestion': 'Dark Elf Assassin',
    'm': 5,
    'ws': 5,
    'bs': 5,
    's': 4,
    't': 4,
    'w': 1,
    'i': 7,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 70,
    'race': 'Elf',
    'warband': 'Hired Swords',
    'rating': 25,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Perfect Killer',
      'Kindred Hatred',
    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [
      'Dark elf bladed sword',
      'Dagger',
      'Repeater crossbow',
      'Dark venom',
      'Light armour',
      'Elven cloak',
    ],
    'special_skills': [
      'Fury of Khaine',
      'Fey Quickness',
      'Master of Poisons',
      'Powerful Build',
      'Infiltration',
    ],
  },
  {
    'name': '',
    'unit_type': 'Night Runner',
    'suggestion': 'Night Runner',
    'm': 6,
    'ws': 2,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 4,
    'exp': 0,
    'cost': 20,
    'race': 'Skaven',
    'warband': 'Skaven',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Special',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warhounds',
    'suggestion': 'Warhounds',
    'm': 6,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 15,
    'race': 'Warhounds',
    'warband': 'Witch Hunters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Animals',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Magister',
    'suggestion': 'Magister',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 70,
    'race': 'Human',
    'warband': 'Cult of the Possessed',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Chaos Rituals',
      'Combat',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Verminkin',
    'suggestion': 'Verminkin',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 5,
    'exp': 0,
    'cost': 20,
    'race': 'Skaven',
    'warband': 'Skaven',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Plague Priest',
    'suggestion': 'Plague Priest',
    'm': 5,
    'ws': 4,
    'bs': 4,
    's': 4,
    't': 4,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 7,
    'exp': 20,
    'cost': 85,
    'race': 'Skaven Clan Pestilens',
    'warband': 'Clan Pestilens',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // Reiklander
    'name': '',
    'unit_type': 'Marksmen',
    'suggestion': 'Marksmen',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Reiklanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Beast Master',
    'suggestion': 'Beast Master',
    'm': 5,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 12,
    'cost': 45,
    'race': 'Elf',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Cold One Beasthound',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dark Elf Sorceress',
    'suggestion': 'Dark Elf Sorceress',
    'm': 5,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 6,
    'a': 1,
    'ld': 8,
    'exp': 12,
    'cost': 55,
    'race': 'Elf',
    'warband': 'Dark Elves',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Dark Elf Magic',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Halfling Scout',
    'suggestion': 'Halfling Scout (Hired sword)',
    'm': 4,
    'ws': 2,
    'bs': 4,
    's': 2,
    't': 2,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 15,
    'race': 'Halfling',
    'warband': 'Hired Swords',
    'rating': 5,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Cook',
    ],
    'skill_lists': [
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [
      'Bow',
      'Dagger',
      'Helmet',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Questing Knight',
    'suggestion': 'Questing Knight',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 80,
    'race': 'Human',
    'warband': 'Bretonnians',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Knights Virtue',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Brute',
    'suggestion': 'Brute',
    'm': 4,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 2,
    'ld': 7,
    'exp': 8,
    'cost': 60,
    'race': 'Human',
    'warband': 'Carnival of Chaos',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Unnatural Strength',
    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Marksmen',
    'suggestion': 'Marksmen (Reiklander)',
    'm': 4,
    'ws': 3,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Mercenaries',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Petty Thief',
    'suggestion': 'Petty Thief',
    'm': 4,
    'ws': 2,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 20,
    'race': 'Human',
    'warband': 'Outlaws of Stirwood forest',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dwarf Thunderers',
    'suggestion': 'Dwarf Thunderers',
    'm': 3,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 4,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 9,
    'exp': 0,
    'cost': 40,
    'race': 'Dwarf',
    'warband': 'Dwarf Treasure Hunters',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Saurus Braves',
    'suggestion': 'Saurus Braves',
    'm': 4,
    'ws': 3,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 1,
    'i': 1,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 40,
    'race': 'Saurus',
    'warband': 'Lizardmen',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Cleric',
    'suggestion': 'Cleric',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Outlaws of Stirwood forest',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Prayers of Sigmar',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Champion',
    'suggestion': 'Champion (Amazon)',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Amazons',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Skink Great Crest',
    'suggestion': 'Skink Great Crest',
    'm': 6,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 2,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 30,
    'race': 'Skink',
    'warband': 'Lizardmen',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Shooting',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Great Hunter',
      'Infiltration',
    ],
  },
  {
    'name': '',
    'unit_type': 'Marauders',
    'suggestion': 'Marauders',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Champion',
    'suggestion': 'Champion',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Marienburgers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Shooting',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Tainted One',
    'suggestion': 'Tainted One',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Carnival of Chaos',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Trained Bear',
    'suggestion': 'Trained Bear',
    'm': 6,
    'ws': 3,
    'bs': 0,
    's': 5,
    't': 5,
    'w': 2,
    'i': 2,
    'a': 2,
    'ld': 6,
    'exp': 0,
    'cost': 145,
    'race': 'Trained Bear',
    'warband': 'Kislevites',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Trained',
      'Fear',
      'Bear Hug',
      'Fiercely Loyal',
      'Animal',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Eshin Sorcerer',
    'suggestion': 'Eshin Sorcerer',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 6,
    'exp': 8,
    'cost': 45,
    'race': 'Skaven',
    'warband': 'Skaven',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Magic of the Horned Rat',
      'Special',
      'Speed',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Dreg',
    'suggestion': 'Dreg',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 20,
    'race': 'Human',
    'warband': 'Undead',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Possessed',
    'suggestion': 'Possessed',
    'm': 5,
    'ws': 4,
    'bs': 0,
    's': 4,
    't': 4,
    'w': 2,
    'i': 4,
    'a': 2,
    'ld': 7,
    'exp': 8,
    'cost': 90,
    'race': 'Possessed',
    'warband': 'Cult of the Possessed',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Brethren',
    'suggestion': 'Brethren (Possessed)',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Cult of the Possessed',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Jarl',
    'suggestion': 'Jarl',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 2,
    'ld': 8,
    'exp': 20,
    'cost': 70,
    'race': 'Human',
    'warband': 'Norse Explorers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [
      'Battle Tongue',
    ],
  },
  {
    'name': '',
    'unit_type': 'Wolf Priest of Ulric',
    'suggestion': 'Wolf Priest of Ulric',
    'm': 4,
    'ws': 3,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 8,
    'exp': 8,
    'cost': 60,
    'race': 'Human',
    'warband': 'Mercenaries',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Hates Templars of Sigmar',
      'Priest',
      'Wolf Companion',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Prayers of Ulric',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [
      'Wolf Pelt',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Ruffians',
    'suggestion': 'Ruffians',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 2,
    'a': 1,
    'ld': 10,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Ostlanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Drunk',
      'No respect',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warrior Priest of Sigmar',
    'suggestion': 'Warrior Priest of Sigmar (Hired Sword)',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 0,
    'cost': 40,
    'race': 'Human',
    'warband': 'Hired Swords',
    'rating': 16,
    'warrior_type': 'Hired Sword',
    'rout_test_contribution': 1,
    'special_rules': [
      'Prayers',
    ],
    'skill_lists': [
      'Academic',
      'Prayers of Sigmar',
    ],
    'starting_equipment': [
      'Light armour',
      'Hammer',
      'Shield',
    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Minotaur',
    'suggestion': 'Minotaur',
    'm': 6,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 3,
    'i': 4,
    'a': 3,
    'ld': 8,
    'exp': 0,
    'cost': 200,
    'race': 'Minotaur',
    'warband': 'Beastmen',
    'rating': 20,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Bloodgreed',
      'Animal',
      'Large',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Pit Veteran',
    'suggestion': 'Pit Veteran',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 4,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 7,
    'exp': 8,
    'cost': 35,
    'race': 'Human',
    'warband': 'Pit fighters',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Pit Fighter',
    ],
    'skill_lists': [
      'Combat',
      'Special',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Shadow Warrior Novices',
    'suggestion': 'Shadow Warrior Novices',
    'm': 5,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 5,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Elf',
    'warband': 'Shadow warriors',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Marksmen',
    'suggestion': 'Marksmen (Averlander)',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Averlanders',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Vampire',
    'suggestion': 'Vampire',
    'm': 6,
    'ws': 4,
    'bs': 4,
    's': 4,
    't': 4,
    'w': 2,
    'i': 5,
    'a': 2,
    'ld': 8,
    'exp': 20,
    'cost': 110,
    'race': 'Vampire',
    'warband': 'Undead',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [
      'Fear',
      'Immune to Psychology',
      'Immune to Poison',
      'No Pain',
    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': 'Aenur',
    'unit_type': 'Aenur, the sword of twilight',
    'suggestion': 'Aenur, the sword of twilight',
    'm': 5,
    'ws': 8,
    'bs': 4,
    's': 4,
    't': 3,
    'w': 2,
    'i': 7,
    'a': 3,
    'ld': 8,
    'exp': 0,
    'cost': 150,
    'race': 'Elf',
    'warband': 'Dramatis Personae',
    'rating': 100,
    'warrior_type': 'Dramatis Personae',
    'rout_test_contribution': 1,
    'special_rules': [
      'Strike to Injure',
      'Expert Swordsman',
      'Step Aside',
      'Sprint',
      'Lightning Reflexes',
      'Dodge',
      'Mighty Blow',
      'Invincible swordsman',
      'Wanderer',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [
      'Ienh-Khain',
      'Ithilmar armour',
      'Elven cloak',
    ],
    'special_skills': [

    ],
  },
  {
    'name': 'Johann',
    'unit_type': 'Johann the knife',
    'suggestion': 'Johann the knife',
    'm': 4,
    'ws': 3,
    'bs': 6,
    's': 4,
    't': 3,
    'w': 2,
    'i': 6,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 70,
    'race': 'Human',
    'warband': 'Dramatis Personae',
    'rating': 60,
    'warrior_type': 'Dramatis Personae',
    'rout_test_contribution': 1,
    'special_rules': [
      'Scale Sheer Surfaces',
      'Quick Shot',
      'Eagle Eyes',
      'Knife Fighter',
      'Dodge',
      'Knife Fighter Extraordinaire',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [
      'Throwing Knives',
      'Sword',
      'Sword',
      'Black Lotus',
      'Crimson Shade',
    ],
    'special_skills': [

    ],
  },
  {
    'name': 'Bertha Bestraufrung',
    'unit_type': 'Bertha Bestraufrung, high matriarch of the sisterhood',
    'suggestion': 'Bertha Bestraufrung, high matriarch of the sisterhood',
    'm': 4,
    'ws': 5,
    'bs': 3,
    's': 4,
    't': 4,
    'w': 2,
    'i': 4,
    'a': 3,
    'ld': 10,
    'exp': 0,
    'cost': 0,
    'race': 'Human',
    'warband': 'Dramatis Personae',
    'rating': 105,
    'warrior_type': 'Dramatis Personae',
    'rout_test_contribution': 1,
    'special_rules': [
      'Mighty Blow',
      'Unstoppable Charge',
      'Righteous Fury',
      'The Hammer of Sigmar',
      'Hearts of Steel',
      'Soulfire',
      'Shield of Faith',
      'Healing Hand',
      'Armour of Righteousness',
      'High Matriarch',
      'Sigmar\'s Handmaiden',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [
      'Sigmarite warhammer',
      'Sigmarite warhammer',
      'Gromril armour',
      'Blessed Water',
      'Holy Relic',
    ],
    'special_skills': [

    ],
  },
  {
    'name': 'Veskit',
    'unit_type': 'Veskit, high executioner of clan eshin',
    'suggestion': 'Veskit, high executioner of clan eshin',
    'm': 5,
    'ws': 5,
    'bs': 4,
    's': 4,
    't': 4,
    'w': 2,
    'i': 5,
    'a': 4,
    'ld': 8,
    'exp': 0,
    'cost': 80,
    'race': 'Skaven',
    'warband': 'Dramatis Personae',
    'rating': 70,
    'warrior_type': 'Dramatis Personae',
    'rout_test_contribution': 1,
    'special_rules': [
      'Unfeeling',
      'No Pain',
      'Unblinking Eye',
      'Metallic Body',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [
      'Fighting claws',
      'Warplock pistols',
    ],
    'special_skills': [

    ],
  },
  { // marienburgers
    'name': '',
    'unit_type': 'Mercenary Captain',
    'suggestion': 'Mercenary Captain',
    'm': 4,
    'ws': 4,
    'bs': 4,
    's': 3,
    't': 3,
    'w': 1,
    'i': 4,
    'a': 1,
    'ld': 8,
    'exp': 20,
    'cost': 60,
    'race': 'Human',
    'warband': 'Marienburgers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Academic',
      'Combat',
      'Shooting',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Youngblood',
    'suggestion': 'Youngblood',
    'm': 4,
    'ws': 2,
    'bs': 2,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 6,
    'exp': 0,
    'cost': 15,
    'race': 'Human',
    'warband': 'Marienburgers',
    'rating': 5,
    'warrior_type': 'Hero',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [
      'Combat',
      'Speed',
      'Strength',
    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  {
    'name': '',
    'unit_type': 'Warriors',
    'suggestion': 'Warriors',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Marienburgers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // Marienburgers
    'name': '',
    'unit_type': 'Marksmen',
    'suggestion': 'Marksmen',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Marienburgers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // Marienburgers
    'name': '',
    'unit_type': 'Swordsmen',
    'suggestion': 'Swordsmen',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 35,
    'race': 'Human',
    'warband': 'Marienburgers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Expert Swordsmen',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // Middenheimers
    'name': '',
    'unit_type': 'Warriors',
    'suggestion': 'Warriors',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Middenheimers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // Middenheimers
    'name': '',
    'unit_type': 'Marksmen',
    'suggestion': 'Marksmen',
    'm': 4,
    'ws': 3,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 25,
    'race': 'Human',
    'warband': 'Middenheimers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [

    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
  { // Middenheimers
    'name': '',
    'unit_type': 'Swordsmen',
    'suggestion': 'Swordsmen',
    'm': 4,
    'ws': 4,
    'bs': 3,
    's': 3,
    't': 3,
    'w': 1,
    'i': 3,
    'a': 1,
    'ld': 7,
    'exp': 0,
    'cost': 35,
    'race': 'Human',
    'warband': 'Middenheimers',
    'rating': 5,
    'warrior_type': 'Henchmen',
    'rout_test_contribution': 1,
    'special_rules': [
      'Expert Swordsmen',
    ],
    'skill_lists': [

    ],
    'starting_equipment': [

    ],
    'special_skills': [

    ],
  },
];

const heroUnitIndexesByWarband = {};
const henchmanUnitIndexesByWarband = {};
const hiredSwordsIndex = [];
const dramaticPersonaeIndex = [];

units.forEach((unit, index) => {
  //
  // "warband": "Orc Mob",
  // "rating": 20,
  // "warrior_type": "Henchmen",

  if (unit.warrior_type === 'Henchmen') {

    if (!henchmanUnitIndexesByWarband[unit.warband]) {
      henchmanUnitIndexesByWarband[unit.warband] = [index];
    } else {
      henchmanUnitIndexesByWarband[unit.warband].push(index);
    }
  } else if (unit.warrior_type === 'Hero') {

    if (!heroUnitIndexesByWarband[unit.warband]) {
      heroUnitIndexesByWarband[unit.warband] = [index];
    } else {
      heroUnitIndexesByWarband[unit.warband].push(index);
    }

  } else if (unit.warrior_type === 'Hired Sword') {

    if (!hiredSwordsIndex[unit.warband]) {
      hiredSwordsIndex[unit.warband] = [index];
    } else {
      hiredSwordsIndex[unit.warband].push(index);
    }

  } else if (unit.warrior_type === 'Dramatis Personae') {

    if (!dramaticPersonaeIndex[unit.warband]) {
      dramaticPersonaeIndex[unit.warband] = [index];
    } else {
      dramaticPersonaeIndex[unit.warband].push(index);
    }

  }

});

console.log('hero index');
console.log(heroUnitIndexesByWarband);
console.log('henchman index');
console.log(henchmanUnitIndexesByWarband);
console.log('hired sword index');
console.log(hiredSwordsIndex);
console.log('dramatic personae');
console.log(dramaticPersonaeIndex);
