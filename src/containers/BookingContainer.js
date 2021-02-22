import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryStirng from 'query-string';
import BookingTemplate from '../components/booking/BookingTemplate';
import { useSelector } from 'react-redux';
import { modifyReservation } from '../redux/lib/api/reservations';

const BookingContainer = () => {
  const location = useLocation();
  // 쿼리에 저장된 예약번호를 Number로 변경하여 가져온다
  const reservationId = +queryStirng.parse(location.search).reservationId;

  // reservation, error, loading 상태를 가져온다
  const { reservations, error, loading } = useSelector(
    ({ reservation, loading }) => ({
      reservations: reservation.reservations,
      error: reservation.error,
      loading: loading['reservation/DELETERESERVATION'],
    }),
  );

  // reservations 리듀서에 저장된 예약 중 일치하는 숙소의 정보를 받아온다
  const reservationInfo = reservations
    ? reservations.filter(
        reservation => reservation.reservationId === reservationId,
      )[0]
    : JSON.parse(localStorage.getItem('modifyreservation'));

  // 최초 렌더링 이후 해당 숙소 정보를 localstorage에 저장
  localStorage.setItem('modifyreservation', JSON.stringify(reservationInfo));

  // 모달창 상태
  const [visible, setVisible] = useState({
    state: false,
    type: null,
  });

  // 모달 열기
  const showModal = type => {
    setVisible({ ...visible, state: true, type });
  };

  // 모달 숨기기
  const hideModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible({ ...visible, state: false });
    }
  };

  return (
    <BookingTemplate
      visible={visible}
      showModal={showModal}
      hideModal={hideModal}
      reservationInfo={reservationInfo}
      setVisible={setVisible}
      reservationId={reservationId}
    />
  );
};

export default BookingContainer;
