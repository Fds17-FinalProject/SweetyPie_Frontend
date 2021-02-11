import axios from 'axios';

// 리뷰 작성 POST 요청
export const postReview = ({
  memberId,
  accommodationId,
  reservationId,
  rating,
  content,
}) =>
  axios.post(`http://3.34.50.91/api/review`, {
    memberId: 1,
    accommodationId,
    reservationId,
    rating,
    content,
  });
