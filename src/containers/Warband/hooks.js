
const reduceSum = (total, unit = {}) => {

  const parsed = parseInt(unit.totalGoldValue);
  const count = parseInt(unit.count);

  if (
    isNaN(parsed)
  ) {
    return total;
  } else if (
    !isNaN(parsed) &&
    !isNaN(count)) {
    return total + (parsed * count);
  }
  return total + parsed;
};

export const useTotalGoldValue = (heroes = {}, henchmen = {}) => {


  let sum = Object.values(heroes).reduce(reduceSum, 0);

  sum += Object.values(henchmen).reduce(reduceSum, 0);

  return sum;
};

