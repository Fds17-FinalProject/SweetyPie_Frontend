import axios from 'axios';

// 예약 내역 GET 요청
export const readReservation = () =>
  axios.get(`http://3.34.50.91/api/reservation/1`);
