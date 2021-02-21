const reduceSum = (total: number, unit: any = {}): number => {
  const parsed = parseInt(unit.totalGoldValue);
  const count = parseInt(unit.count);

  if (isNaN(parsed)) {
    return total;
  } else if (!isNaN(parsed) && !isNaN(count)) {
    return total + parsed * count;
  }
  return total + parsed;
};

export const useTotalGoldValue = (heroes = {}, henchmen = {}) => {
  // @ts-ignore
  let sum = Object.values(heroes).reduce(reduceSum, 0);
  // @ts-ignore
  sum += Object.values(henchmen).reduce(reduceSum, 0);

  return sum;
};
