export const getTotalTimes = (count) => {
  const onlyTimes = count?.map((times) => times.count);
  const totalTimes = onlyTimes.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return totalTimes;
};
