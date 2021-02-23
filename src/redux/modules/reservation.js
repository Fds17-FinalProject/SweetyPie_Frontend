import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reservationAPI from '../lib/api/reservations';
import { takeLatest } from 'redux-saga/effects';

// 액션 타입 정의 -> 예약내역 api GET 요청 액션
const [
  READ_RESERVATION,
  READ_RESERVATION_SUCCESS,
  READ_RESERVATION_FAILURE,
] = createRequestActionTypes('reservation/GETRESERVATION');

// 액션 타입 정의 -> 예약내역 api DELETE 요청 액션
// const [
//   DELETE_RESERVATION,
//   DELETE_RESERVATION_SUCCESS,
//   DELETE_RESERVATION_FAILURE,
// ] = createRequestActionTypes('reservation/DELETERESERVATION');

// 액션 타입 정의 -> reservations 리듀서의 상태를 초기화하는 액션
const INITIALIZE_RESERVATION = 'reservation/INITIALIZE_RESERVATION';

// 액션 생성자 함수 -> 예약 내역
export const readReservation = createAction(READ_RESERVATION);
// export const deleteReservation = createAction(DELETE_RESERVATION);
export const initializeReservation = createAction(INITIALIZE_RESERVATION);

// 사가 생성 -> 예약 내역 GET
const readReservationSaga = createRequestSaga(
  // 액션 타입
  READ_RESERVATION,
  // 요청 API
  reservationAPI.readReservation,
);

// 사가 생성 -> 예약 내역 DELETE
// const deleterReservationSaga = createRequestSaga(
//   DELETE_RESERVATION,
//   reservationAPI.removeReservation,
// );

// 사가 함수
export function* reservationSaga() {
  // 가장 마지막으로 실행된 작업을 수행
  yield takeLatest(READ_RESERVATION, readReservationSaga);
  // yield takeLatest(DELETE_RESERVATION, deleterReservationSaga);
}

// 초기 상태
const initialState = {
  reservations: [],
  error: null,
};

// 리듀서
const reservation = handleActions(
  {
    [READ_RESERVATION_SUCCESS]: (state, { payload: reservations }) => ({
      ...state,
      reservations: reservations,
    }),
    [READ_RESERVATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INITIALIZE_RESERVATION]: () => initialState,
  },
  initialState,
);

export default reservation;
