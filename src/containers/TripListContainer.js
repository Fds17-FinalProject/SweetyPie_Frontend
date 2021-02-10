import React, { useEffect, useRef, useState } from 'react';
import TripTemplate from '../components/trip/TripTemplate';
import { useDispatch, useSelector } from 'react-redux';
import reservation, { readReservation } from '../redux/modules/reservation';
import dayjs from 'dayjs';

const TripListContainer = () => {
  // dispatch 함수
  const dispatch = useDispatch();

  // reservation, error, loading 상태를 가져온다
  const { reservations, error, loading } = useSelector(
    ({ reservation, loading }) => ({
      reservations: reservation.reservations,
      error: reservation.error,
      loading: loading['reservation/GETRESERVATION'],
    }),
  );

  // 모달창 상태
  const [visible, setVisible] = useState(false);

  // 별점 상태
  const [ratings, setRatings] = useState([true, true, true, true, false]);

  // 오늘 날짜
  const today = dayjs().format('YYYY-MM-DD');

  // 오늘 날짜와 체크아웃 날짜를 기준으로 예정된 예약 및 이전 예약 구분
  let pastReservations = [];
  let upcomingReservations = [];

  // 예약 리스트 읽기 요청 GET
  useEffect(() => {
    dispatch(readReservation());
  }, [dispatch]);

  // 로딩이 완료되면 날짜에 따라 필터링
  if (loading === false) {
    pastReservations = reservations.filter(
      reservation => reservation.checkoutDate < today,
    );
    upcomingReservations = reservations.filter(
      reservation => reservation.checkoutDate > today,
    );
  }

  // 모달 열기
  const showModal = () => {
    setVisible(true);
    setRatings([true, true, true, true, false]);
  };

  // 모달 숨기기
  const hideModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible(false);
    }
  };

  // 별점 변경
  const changeRating = id => {
    let newRatings = [...ratings];
    for (let i = 0; i < 5; i++) {
      i <= id ? (newRatings[i] = true) : (newRatings[i] = false);
    }
    setRatings(newRatings);
  };

  // 리뷰 쓰기 요청 POST
  const postingReview = () => {};

  return (
    <TripTemplate
      visible={visible}
      hideModal={hideModal}
      showModal={showModal}
      ratings={ratings}
      changeRating={changeRating}
      loading={loading}
      pastReservations={pastReservations}
      upcomingReservations={upcomingReservations}
    />
  );
};

export default TripListContainer;
