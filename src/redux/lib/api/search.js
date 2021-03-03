import axios from 'axios';

export const getList = async query =>
  await axios.get(
    `https://sweetypie.ga/api${query}`,
    localStorage.getItem('token') && {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
