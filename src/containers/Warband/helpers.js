import { path } from 'ramda';

export const getTotalExperience = (warband) => {
  let total = 0;
  const heroes = path(['heroes'], warband) || {};
  const henchmen = path(['henchmen'], warband) || {};

  Object.values(heroes).forEach((hero) => {

    if (parseInt(hero.exp)) {
      total += parseInt(hero.exp);
    }

    if (parseInt(hero.startingExp)) {
      total += parseInt(hero.startingExp);
    }


  });

  Object.values(henchmen).forEach((henchman) => {

    if (henchman.count && parseInt(henchman.exp)) {
      total += parseInt(henchman.count) * parseInt(henchman.exp);
    }

  });

  return total;

};

export const getWarbandMemberCount = (warband) => {

  let total = 0;
  const heroes = path(['heroes'], warband) || {};
  const henchmen = path(['henchmen'], warband) || {};

  Object.values(heroes).forEach((hero) => {

    if (hero.name) {
      total++;
    }
  });

  Object.values(henchmen).forEach((henchman) => {

    if (henchman.count) {
      total += parseInt(henchman.count);
    }
  });

  return total;

};

export const getRatingFromMemberCount = (warband) => {
  // TODO: add large calculation and hired swords calculation
  return getWarbandMemberCount(warband) * 5;
};

export const getRating = (warband) => {
  return getRatingFromMemberCount(warband) + getTotalExperience(warband);

};


const henchmanAdvancementArr = [
  2,
  5,
  9,
  14,
];

const heroAdvancementArr = [
  2,
  4,
  6,
  8,
  11,
  14,
  17,
  20,
  24,
  28,
  32,
  36,
  41,
  46,
  51,
  56,
  62,
  69,
  76,
  83,
  90,
];

// TODO: Exp to next level

const getAdvancementFactory = (arr) => (exp, startingExp) => {

  const startingIndex = arr.findIndex((threshold) => threshold >= startingExp) || -1;


  let advancements = 0;

  const expInt = parseInt(exp);

  if (!expInt || isNaN(expInt)) {
    return advancements;
  }

  arr.forEach((threshold, index) => {

    if (startingExp) {
      if (expInt >= (threshold - startingExp) && index > startingIndex) {
        advancements += 1;
      }
      return;
    }


    if (expInt >= threshold) {
      advancements += 1;
    }

  });

  return advancements;
};

export const getHeroAdvancements = getAdvancementFactory(heroAdvancementArr);

export const getHenchmanAdvancements = getAdvancementFactory(henchmanAdvancementArr);
