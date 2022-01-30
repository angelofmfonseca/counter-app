import * as axios from 'axios';
import { postDecrementCounter } from './';

jest.mock('axios');

describe('postDecrementCounter Testing', () => {
  it('should execute try block function', async () => {
    axios.post.mockReturnValue({ data: '' });
    const result = await postDecrementCounter();
    expect(result).toEqual({ data: '' });
  });
  it('should execute catch block function', async () => {
    axios.post.mockImplementation(() => {
      throw '';
    });
    const result = await postDecrementCounter();
    expect(result).toEqual(undefined);
  });
});
