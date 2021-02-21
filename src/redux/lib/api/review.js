import axios from 'axios';

// 작성된 리뷰 GET 요청
export const readReview = reservationId =>
  axios.get(`http://3.34.50.91/api/review/${reservationId}`);

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
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MTIzQGdtYWlsLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsIm1lbWJlcklkIjoxLCJleHAiOjE2NDUyNjUzOTR9.v84KuW7pEJvr7-Ff848gNY2hNL8KNYv7gNYnymL56BPgiCRnzWVe0HPSoQpCyb-c4yJYHRUPlowJqNKU4HiWXA`,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );

// 임시 리뷰 삭제용 DELETE
export const deleteReview = () =>
  axios.delete(`http://3.34.50.91/api/review/96554`);
