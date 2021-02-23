import axios from 'axios';

export const getList = async query =>
  await axios.get(`http://3.34.50.91/api${query}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
