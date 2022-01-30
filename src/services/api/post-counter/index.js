import axios from 'axios';

const baseURL = '/api/v1/counter';

export const postCounter = async (title) => {
  try {
    const res = await axios.post(baseURL, { title });
    return res;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};
