import axios from 'axios';

export const readReservation = () =>
  axios.get(`http://3.34.50.91/api/reservation/1`);
