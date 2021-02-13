import axios from 'axios';

// 예약 내역 GET 요청
export const readRoomDetail = async room_id => {
  console.log('GET');
  return await axios.get(`http://3.34.50.91/api/accommodation/${room_id}`);
};

// 숙소 북마크에 등록
export const postBookmarkRoom = async room_id =>
  await axios.post(`http://3.34.50.91/api/accommodation/${room_id}`);
