import { Henchman, Hero } from '../../ducks/warbands';
import { numberify } from './helpers';

const reduceHeroSum = (total: number, unit: Hero = {}): number => total + numberify(unit.totalGoldValue);


const reduceHenchmanSum = (total: number, unit: Henchman = {}): number => {
  const totalGoldValue = numberify(unit.totalGoldValue);
  const count = numberify(unit.count);

  return total + (totalGoldValue * count);
};

export const useTotalGoldValue = (
  heroes: Record<string, Hero> = {},
  henchmen: Record<string, Henchman> = {},
): number => {
  let sum = Object.values(heroes).reduce(reduceHeroSum, 0);
  sum += Object.values(henchmen).reduce(reduceHenchmanSum, 0);

  return sum;
};
