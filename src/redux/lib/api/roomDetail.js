import axios from 'axios';

// 예약 내역 GET 요청
export const readRoomDetail = async accommodation_id => {
  return await axios.get(
    `http://3.34.50.91/api/accommodation/${accommodation_id}`,
  );
};

// 북마크에 숙소 등록 (POST)
export const postBookmarkRoom = async () =>
  await axios.post(`http://3.34.50.91/api/accommodation`);

// 북마크에서 숙소 제거 (DELETE)
export const deleteBookmarkedRoom = async accommodation_id =>
  await axios.delete(`http://3.34.50.91/api/accommodation/${accommodation_id}`);
