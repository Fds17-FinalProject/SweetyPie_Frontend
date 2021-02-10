import axios from 'axios';

export const getList = query =>
  axios.get(`http://3.34.50.91/api/accommodations`);

// export const postAuth = (url) => axios.get(`http://13.124.101.93/api/login/google/${url}`);



// export const postLogin = () =>
//   axios.post(`http://3.34.50.91/api/login/google`, {

// });