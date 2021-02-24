import axios from 'axios';
// 예약 내역 GET 요청
export const readReservation = memberId =>
  axios.get(`https://sweetypie.ga/api/reservation`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

// 예약 하기 POST 요청
export const paymentReservation = ({
  // memberId,
  accommodationId,
  checkInDate,
  checkoutDate,
  totalGuestNum,
  adultNum,
  infantNum,
  childNum,
  totalPrice,
}) =>
  axios.post(
    `https://sweetypie.ga/api/reservation`,
    {
      memberId: 1,
      accommodationId,
      checkInDate,
      checkoutDate,
      totalGuestNum,
      adultNum,
      infantNum,
      childNum,
      totalPrice,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );

// 예약 수정 PATCH 요청
export const modifyReservation = ({
  reservationId,
  checkInDate,
  checkoutDate,
  totalGuestNum,
  adultNum,
  childNum,
  infantNum,
  totalPrice,
}) =>
  axios.patch(
    `https://sweetypie.ga/api/reservation/${reservationId}`,
    {
      checkInDate,
      checkoutDate,
      totalGuestNum,
      adultNum,
      childNum,
      infantNum,
      totalPrice,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );

// 예약 취소 DELETE 요청
export const removeReservation = reservationId => {
  axios.delete(`https://sweetypie.ga/api/reservation/${reservationId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
