import { Hero, Henchman } from '../../ducks/warbands';

export const numberify = (s: string | number | null | undefined): number => {
  if (s === null || s === undefined) {
    return 0;
  } else if (typeof s === 'string') {
    if (!isNaN(parseInt(s))) {
      return parseInt(s);
    } else {
      return 0;
    }
  } else if (typeof s === 'number') {
    if (isNaN(s)) {
      return 0;
    }
    return s;
  }
  return 0;
};

export const getTotalExperience = (
  heroes: Record<string, Hero> = {},
  henchmen: Record<string, Henchman> = {},
): number => {
  let total = 0;

  Object.values(heroes).forEach(hero => {
    total += numberify(hero.exp);
    total += numberify(hero.startingExp);
  });

  Object.values(henchmen).forEach(henchman => {
    if (numberify(henchman.count) && numberify(henchman.exp)) {
      total += numberify(henchman.count) * numberify(henchman.exp);
    }
  });

  return total;
};

export const getWarbandMemberCount = (
  heroes: Record<string, Hero> = {},
  henchmen: Record<string, Henchman> = {},
): number => {
  let total = 0;

  Object.values(heroes).forEach(() => {
    total++;
  });

  Object.values(henchmen).forEach(henchman => {
    if (henchman.count) {
      total += numberify(henchman.count);
    }
  });

  return total;
};

export const getRatingFromMemberCount = (
  heroes: Record<string, Hero> = {},
  henchmen: Record<string, Henchman> = {},
): number => {
  let total = 0;

  Object.values(heroes).forEach((hero: Hero) => {
    if (hero.isLarge === 'true') {
      total += 20;
    } else {
      total += 5;
    }
  });

  Object.values(henchmen).forEach(henchman => {
    if (henchman.count) {
      if (henchman.isLarge === 'true') {
        total += numberify(henchman.count) * 20;
      } else {
        total += numberify(henchman.count) * 5;
      }
    }
  });

  return total;

  // TODO: add hired swords calculations
};

export const getRating = (
  heroes: Record<string, Hero> = {},
  henchmen: Record<string, Henchman> = {},
): number => {
  return (
    getRatingFromMemberCount(heroes, henchmen) +
    getTotalExperience(heroes, henchmen)
  );
};

const henchmanAdvancementArr = [2, 5, 9, 14];

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

const getAdvancementFactory = arr => (exp: undefined | number | string) => {
  let advancements = 0;

  const expInt = numberify(exp);

  if (!expInt || isNaN(expInt)) {
    return advancements;
  }

  arr.forEach(threshold => {
    if (expInt >= threshold) {
      advancements += 1;
    }
  });

  return advancements;
};

const _getHeroAdvancements = getAdvancementFactory(heroAdvancementArr);

export const getHeroAdvancements = (exp: undefined | number | string, startingExp = 0): number => {
  const expInt = numberify(exp);
  const startingExpInt =
    typeof startingExp === 'string' ? parseInt(startingExp) : startingExp;

  const expAdvancements = _getHeroAdvancements(expInt + startingExpInt);
  const startingExpAdvancements = _getHeroAdvancements(startingExp);

  const res = expAdvancements - startingExpAdvancements;

  return res;
};

export const getHenchmanAdvancements = getAdvancementFactory(
  henchmanAdvancementArr,
);
