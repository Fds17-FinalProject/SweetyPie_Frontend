import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reservationAPI from '../lib/api/reservations';
import { takeLatest } from 'redux-saga/effects';

// 사가 액션 타입 정의
const [
  READ_RESERVATION,
  READ_RESERVATION_SUCCESS,
  READ_RESERVATION_FAILURE,
] = createRequestActionTypes('reservation/GETRESERVATION');

const UNLOAD_RESERVATION = 'preservation/UNLOAD_RESERVATION';

export const readReservation = createAction(READ_RESERVATION);
export const unloadReservation = createAction(UNLOAD_RESERVATION);

const readReservationSaga = createRequestSaga(
  READ_RESERVATION,
  reservationAPI.readReservation,
);

export function* reservationSaga() {
  yield takeLatest(READ_RESERVATION, readReservationSaga);
}

const initialState = {
  reservations: null,
  error: null,
};

const reservation = handleActions(
  {
    [READ_RESERVATION_SUCCESS]: (state, { payload: reservations }) => ({
      ...state,
      reservations,
    }),
    [READ_RESERVATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_RESERVATION]: () => initialState,
  },
  initialState,
);

export default reservation;
