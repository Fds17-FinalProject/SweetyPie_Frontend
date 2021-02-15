import React, { useEffect, useState } from 'react';
import TripTemplate from '../components/trip/TripTemplate';
import { useDispatch, useSelector } from 'react-redux';
import reservation, { readReservation } from '../redux/modules/reservation';
import dayjs from 'dayjs';
import axios from 'axios';

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

  // 리뷰 테스트
  const [reviewStatus, setReviewStatus] = useState(false);

  // 오늘 날짜
  const today = dayjs().format('YYYY-MM-DD');

  // 오늘 날짜와 체크아웃 날짜를 기준으로 예정된 예약 및 이전 예약 구분
  let pastReservations = [];
  let upcomingReservations = [];

  // 예약 리스트 읽기 요청 GET
  useEffect(() => {
    dispatch(readReservation());
  }, [dispatch, reviewStatus]);

  // 로딩이 완료되면 날짜에 따라 필터링
  if (loading === false) {
    pastReservations = reservations.filter(
      reservation => reservation.checkoutDate < today,
    );
    upcomingReservations = reservations.filter(
      reservation => reservation.checkoutDate > today,
    );
  }

  return (
    <TripTemplate
      loading={loading}
      pastReservations={pastReservations}
      upcomingReservations={upcomingReservations}
      reviewStatus={reviewStatus}
      setReviewStatus={setReviewStatus}
    />
  );
};

export default TripListContainer;
