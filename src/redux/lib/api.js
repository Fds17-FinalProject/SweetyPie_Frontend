import axios from 'axios';

export const getList = query =>
  axios.get(`http://3.34.50.91/api/accommodations`);
