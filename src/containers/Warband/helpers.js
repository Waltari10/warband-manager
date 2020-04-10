import { path } from 'ramda';

export const getTotalExperience = (warband) => {
  let total = 0;
  const heroes = path(['heroes'], warband) || {};
  const henchmen = path(['henchmen'], warband) || {};

  Object.values(heroes).forEach((hero) => {

    if (hero.name && hero.exp) {
      total += parseInt(hero.exp);
    }
  });

  Object.values(henchmen).forEach((henchman) => {

    if (henchman.count && henchman.exp) {
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


const henchmanLevelArr = [
  2,
  5,
  9,
  14,
];

const heroLevelArr = [
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

export const getHeroLevel = (exp = 0) => {

  let level = 1;

  const expInt = parseInt(exp);

  if (!expInt || isNaN(expInt)) {
    return level;
  }

  heroLevelArr.forEach((threshold, index) => {

    if (expInt >= threshold) {
      level = index + 2;
    }

  });

  return level;
};

export const getHenchmanLevel = (exp = 0) => {

  let level = 1;

  const expInt = parseInt(exp);

  if (!expInt || isNaN(expInt)) {
    return 1;
  }

  henchmanLevelArr.forEach((threshold, index) => {

    if (expInt >= threshold) {
      level = index + 2;
    }

  });

  return level;

};