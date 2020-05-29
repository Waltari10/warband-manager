
const reduceSum = (total, unit = {}) => {

  const parsed = parseInt(unit.totalGoldValue);

  if (isNaN(parsed)) {
    return total;
  }

  return total + parsed;

};

export const useTotalGoldValue = (heroes = {}, henchmen = {}) => {


  let sum = Object.values(heroes).reduce(reduceSum, 0);

  sum += Object.values(henchmen).reduce(reduceSum, 0);

  return sum;
};

