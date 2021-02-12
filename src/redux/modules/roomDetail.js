import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/roomDetail';
import { takeLatest } from 'redux-saga/effects';

// action types
const [
  READ_ROOMDETAIL,
  READ_ROOMDETAIL_SUCCESS,
  READ_ROOMDETAIL_FAILURE,
] = createRequestActionTypes('roomDetail/READ_ROOMDETAIL');

// action creators
export const readRoomDetail = createAction(
  READ_ROOMDETAIL,
  ({ accommodation }) => ({
    accommodation,
  }),
);

// saga
const readRoomDetailSaga = createRequestSaga(
  READ_ROOMDETAIL,
  authAPI.readRoomDetail,
);
export function* RoomDetailSaga() {
  yield takeLatest(READ_ROOMDETAIL, readRoomDetailSaga);
}

// initialState
const initialState = {
  accommodation: {},
  roomDeatilError: null,
};

// reducer
const roomDetail = handleActions({
  [READ_ROOMDETAIL_SUCCESS]: (state, { payload: { accommodation } }) => ({
    ...state,
    accommodation,
  }),
  [READ_ROOMDETAIL_FAILURE]: (state, { payload: { error } }) => ({
    ...state,
    roomDeatilError: error,
  }),
});

export default roomDetail;
