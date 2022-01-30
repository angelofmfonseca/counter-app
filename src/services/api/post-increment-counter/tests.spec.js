import * as axios from 'axios';
import { postIncrementCounter } from './';

jest.mock('axios');

describe('postIncrementCounter Testing', () => {
  it('should execute try block function', async () => {
    axios.post.mockReturnValue({ data: '' });
    const result = await postIncrementCounter();
    expect(result).toEqual({ data: '' });
  });
  it('should execute catch block function', async () => {
    axios.post.mockImplementation(() => {
      throw '';
    });
    const result = await postIncrementCounter();
    expect(result).toEqual(undefined);
  });
});
