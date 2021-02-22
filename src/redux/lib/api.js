import axios from 'axios';

export const getList = async query => {
  console.log('QUERY', query);
  return await axios.get(`http://3.34.50.91/api${query}`);
};
