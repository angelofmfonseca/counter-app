import axios from 'axios';

const baseURL = '/api/v1/counter';

export const postCounter = async () => {
  try {
    const res = await axios.post(baseURL, { title: 'buzios' });
    return res;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
