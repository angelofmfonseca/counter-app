import axios from 'axios';

const baseURL = '/api/v1/counter';

export const deleteCounter = async (id) => {
  try {
    const res = await axios.delete(baseURL, { data: { id } });
    return res;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};
