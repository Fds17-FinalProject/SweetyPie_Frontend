import axios from 'axios';

// 예약 내역 GET 요청
export const readRoomDetail = async accommodation_id =>
  await axios.get(
    `https://sweetypie.ga/api/accommodation/${accommodation_id}`,
    localStorage.getItem('token') && {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
