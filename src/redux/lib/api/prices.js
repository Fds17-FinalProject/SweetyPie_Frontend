import axios from 'axios';

export const getPrices = async query =>
  await axios.get(
    'https://sweetypie.ga/api/accommodations/price?searchKeyword=서울시',
  );
