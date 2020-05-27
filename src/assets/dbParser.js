

// Objective. You want an index of each warband's units.
// Not used in web, run with node locally

const units = require('./units');


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


console.log(heroUnitIndexesByWarband, henchmanUnitIndexesByWarband, hiredSwordsIndex, dramaticPersonaeIndex);


const heroes = {
  Lizardmen: [1, 50, 150],
  Beastmen: [2, 25, 28, 39],
  'Dwarf Treasure Hunters': [3, 7, 72],
  Ostlanders: [8, 9, 89],
  Mercenaries: [
    10, 19, 56, 64,
    104, 119, 124, 152,
    160,
  ],
  'Tomb guardians': [11, 26, 88],
  'Clan Pestilens': [15, 109, 122, 137],
  'Shadow warriors': [16, 24, 61],
  'Norse Explorers': [18, 21, 38, 159],
  'Orc Mob': [20, 32, 110],
  Kislevites: [23, 111, 115, 130],
  Averlanders: [30, 54, 75, 121],
  Pirates: [34, 66, 78],
  'Sisters of Sigmar': [35, 96, 120],
  'Pit fighters': [37, 102, 164],
  'Dark Elves': [40, 95, 139, 140],
  'Witch Hunters': [42, 97, 100],
  'Outlaws of Stirwood forest': [47, 82, 145, 148],
  Bretonnians: [48, 49, 142],
  Skaven: [51, 126, 133, 155],
  Undead: [52, 156, 167],
  'Carnival of Chaos': [55, 143, 153],
  Amazons: [76, 91, 149],
  'Cult of the Possessed': [118, 135, 157],
};

const henchmen = {
  'Orc Mob': [0, 33, 44, 73],
  Ostlanders: [4, 59, 116, 161],
  Mercenaries: [5, 81, 138, 144],
  'Dark Elves': [6, 71, 94],
  Amazons: [12, 63],
  Bretonnians: [13, 77],
  Skaven: [17, 45, 136],
  Beastmen: [22, 58, 86, 163],
  'Cult of the Possessed': [27, 123, 158],
  'Pit fighters': [29, 53, 107],
  'Dwarf Treasure Hunters': [31, 106, 146],
  'Sisters of Sigmar': [36, 83],
  'Tomb guardians': [41, 79, 84],
  'Carnival of Chaos': [43, 93, 108],
  Undead: [57, 74, 85],
  'Witch Hunters': [60, 127, 134],
  'Clan Pestilens': [62],
  'Norse Explorers': [65, 80, 151],
  Kislevites: [67, 112, 129, 154],
  'Outlaws of Stirwood forest': [68, 98],
  Pirates: [70, 90, 103, 105],
  Lizardmen: [87, 113, 147],
  'Shadow warriors': [99, 165],
  Averlanders: [101, 125, 166],
};

const hiredSword = [
  14, 46, 69, 92,
  114, 117, 128, 131,
  132, 141, 162,
];

const dramatisPersonae = [168, 169, 170, 171];
