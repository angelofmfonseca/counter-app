import * as axios from 'axios';
import { postCounter } from './';

jest.mock('axios');

describe('postCounter Testing', () => {
  it('should execute try block function', async () => {
    axios.post.mockReturnValue({ data: '' });
    const result = await postCounter();
    expect(result).toEqual({ data: '' });
  });
  it('should execute catch block function', async () => {
    axios.post.mockImplementation(() => {
      throw '';
    });
    const result = await postCounter();
    expect(result).toEqual(undefined);
  });
});
