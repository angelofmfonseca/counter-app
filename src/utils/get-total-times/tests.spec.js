import { getTotalTimes } from './';

describe('getTotalTimes Testing', () => {
  it('should execute getTotalTimes function', () => {
    const result = getTotalTimes([{ count: 0 }, { count: 3 }]);
    expect(result).toEqual(3);
  });
});
