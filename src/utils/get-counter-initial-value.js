export const getCounterInitialValue = (count) => {
  const onlyCount = count?.map((times) => times.count);
  const onlyValues = Object.values(onlyCount);
  for (let i = 0; i <= onlyValues.length; i++) {
    return onlyValues[i];
  }
};
