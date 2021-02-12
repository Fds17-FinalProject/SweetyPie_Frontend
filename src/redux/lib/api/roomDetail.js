import axios from 'axios';

// 예약 내역 GET 요청
export const readRoomDetail = id =>
  axios.get(`http://3.34.50.91/api/accommodation/${id}`);
