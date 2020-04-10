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