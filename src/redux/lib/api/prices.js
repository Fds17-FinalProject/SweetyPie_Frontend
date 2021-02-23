import axios from 'axios';

export const getPrices = async query =>
  await axios.get(
    'http://3.34.50.91/api/accommodations/price?searchKeyword=서울시',
  );
