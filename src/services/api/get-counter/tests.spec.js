import * as axios from 'axios';
import { getCounter } from './';

jest.mock('axios');

describe('getCounter Testing', () => {
  it('should execute try block function', async () => {
    axios.get.mockReturnValue({ data: '' });
    const result = await getCounter();
    expect(result).toEqual({ data: '' });
  });
  it('should execute catch block function', async () => {
    axios.get.mockImplementation(() => {
      throw '';
    });
    const result = await getCounter();
    expect(result).toEqual(undefined);
  });
});
