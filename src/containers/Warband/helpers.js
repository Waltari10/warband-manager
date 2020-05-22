export const getTotalExperience = (heroes = {}, henchmen = {}) => {
  let total = 0;

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

export const getWarbandMemberCount = (heroes = {}, henchmen = {}) => {


  let total = 0;

  Object.values(heroes).forEach(() => {

    total++;
  });

  Object.values(henchmen).forEach((henchman) => {

    if (henchman.count) {
      total += parseInt(henchman.count);
    }
  });

  return total;

};

export const getRatingFromMemberCount = (heroes = {}, henchmen = {}) => {

  let total = 0;

  Object.values(heroes).forEach((hero) => {

    if (hero.isLarge === 'true') {
      total += 20;
    } else {
      total += 5;
    }


  });

  Object.values(henchmen).forEach((henchman) => {

    if (henchman.count) {
      if (henchman.isLarge === 'true') {
        total += (parseInt(henchman.count) * 20);
      } else {
        total += (parseInt(henchman.count) * 5);
      }
    }

  });

  return total;


  // TODO: add hired swords calculations
};

export const getRating = (heroes = {}, henchmen = {}) => {
  return getRatingFromMemberCount(heroes, henchmen) + getTotalExperience(heroes, henchmen);

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

const advancementCache = new Map();

advancementCache.set(henchmanAdvancementArr, {});
advancementCache.set(heroAdvancementArr, {});


// Calculate advancements without starting exp
// Calculate advancements only for starting exp
// Subtract advancements from starting exp, from regular advancements


const getAdvancementFactory = (arr) => (exp) => {

  let advancements = 0;

  const expInt = parseInt(exp);

  if (!expInt || isNaN(expInt)) {
    return advancements;
  }

  arr.forEach((threshold) => {

    if (expInt >= threshold) {
      advancements += 1;
    }

  });

  return advancements;
};


const _getHeroAdvancements = getAdvancementFactory(heroAdvancementArr);

export const getHeroAdvancements = (exp, startingExp = 0) => {

  const expAdvancements = _getHeroAdvancements(exp + startingExp);
  const startingExpAdvancements = _getHeroAdvancements(startingExp);


  return expAdvancements - startingExpAdvancements;
};

export const getHenchmanAdvancements = getAdvancementFactory(henchmanAdvancementArr);
