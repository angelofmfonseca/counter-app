import axios from 'axios';

const baseURL = '/api/v1/counter';

export const getCounter = () => {
  return axios
    .get(baseURL)
    .then((res) => res.data)
    .catch((error) => console.log(`ERROR: ${error}`));
};
