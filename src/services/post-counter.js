import axios from 'axios';

export const postCounter = () => {
  axios
    .post('/api/v1/counter', { title: 'paulo' })
    .then((res) => res.data)
    .catch((error) => console.log(`ERROR: ${error}`));
};
