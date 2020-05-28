

import units, { heroIndexes, henchmenIndexes } from './unitTemplates';

const basicSkillCategories = {
  'Academic': true,
  'Special': true,
  'Speed': true,
  'Combat': true,
  'Strength': true,
  'Shooting': true,
  'Lesser Magic': true,
};

// Objective: Figure out which skills(spells) are available for each warband
// Steps:
// Iterate through all units of each warband
// Mark up skills they have available
// Those are the skills that that warband can use
export const getWarbandSkills = (warbandId) => {


  const heroesIndexArr = heroIndexes[warbandId];
  const henchmenIndexArr = henchmenIndexes[warbandId];

  if (!warbandId || !henchmenIndexArr) {
    return Object.keys(basicSkillCategories);
  }


  const warbandSkills = { ...basicSkillCategories };

  if (heroesIndexArr) {
    heroesIndexArr.forEach((heroIndex) => {
      const template = units[heroIndex] || { skill_lists: [] };
      template.skill_lists.forEach((skill) => {
        if (!warbandSkills[skill]) {
          warbandSkills[skill] = true;
        }
      });
    });
  }

  if (henchmenIndexArr) {
    henchmenIndexArr.forEach((heroIndex) => {
      const template = units[heroIndex] || { skill_lists: [] };
      template.skill_lists.forEach((skill) => {
        if (!warbandSkills[skill]) {
          warbandSkills[skill] = true;
        }
      });
    });
  }

  return Object.keys(warbandSkills);
};