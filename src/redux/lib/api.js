import axios from 'axios';

export const getList = async query =>
  await axios.get(
    `http://3.34.50.91/api/accommodations/search?searchKeyword=종로구&checkIn=2021-02-20&checkout=2021-03-04`,
  );
