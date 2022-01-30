import axios from 'axios';

const baseURL = '/api/v1/counter/dec';

export const postDecrementCounter = async (id) => {
  try {
    const res = await axios.post(baseURL, { id: id });
    return res;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};
