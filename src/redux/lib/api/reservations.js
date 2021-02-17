import axios from 'axios';

// 예약 내역 GET 요청
export const readReservation = () =>
  axios.get(`http://3.34.50.91/api/reservation/1`);

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
  axios.patch(`http://3.34.50.91/api/reservation/${reservationId}`, {
    checkInDate,
    checkoutDate,
    totalGuestNum,
    adultNum,
    childNum,
    infantNum,
    totalPrice,
  });

// 예약 취소 DELETE 요청
export const removeReservation = reservationId => {
  axios.delete(`http://3.34.50.91/api/reservation/${reservationId}`);
};
