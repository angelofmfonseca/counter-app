import axios from 'axios';

const baseURL = '/api/v1/counter';

export const getCounter = async () => {
  try {
    const res = await axios.get(baseURL);
    return res;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
