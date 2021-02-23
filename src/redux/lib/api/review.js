import axios from 'axios';

// 작성된 리뷰 GET 요청
export const readReview = reservationId =>
  axios.get(`http://3.34.50.91/api/review/${reservationId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

// 작성한 리뷰 POST 요청
export const postReview = ({
  accommodationId,
  reservationId,
  rating,
  content,
}) =>
  axios.post(
    `http://3.34.50.91/api/review`,
    {
      accommodationId,
      reservationId,
      rating,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );

// 임시 리뷰 삭제용 DELETE
export const deleteReview = () =>
  axios.delete(`http://3.34.50.91/api/review/96554`);
