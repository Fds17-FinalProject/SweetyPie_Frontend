import axios from 'axios';

// 작성된 리뷰 GET 요청
export const readReview = reservationId =>
  axios.get(`http://3.34.50.91/api/review/${reservationId}`);

// 작성한 리뷰 POST 요청
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
