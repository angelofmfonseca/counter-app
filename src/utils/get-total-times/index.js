export const getTotalTimes = (count) => {
  const totalTimes = count?.reduce(
    (previousValue, currentValue) => previousValue + currentValue.count,
    0
  );
  console.log('totalTimes: ', totalTimes);
  return totalTimes;
};
