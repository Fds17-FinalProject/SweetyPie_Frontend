import axios from 'axios';

// 예약 내역 GET 요청
export const readRoomDetail = async accommodation_id =>
  await axios.get(`http://3.34.50.91/api/accommodation/${accommodation_id}`);
