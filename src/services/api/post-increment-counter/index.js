import axios from 'axios';

const baseURL = '/api/v1/counter/inc';

export const postIncrementCounter = async (id) => {
  try {
    const res = await axios.post(baseURL, { id: id });
    return res;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
