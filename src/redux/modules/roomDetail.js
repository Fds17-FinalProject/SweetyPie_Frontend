import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as roomDetailAPI from '../lib/api/roomDetail';
import { takeLatest } from 'redux-saga/effects';

// action types
const [
  READ_ROOMDETAIL,
  READ_ROOMDETAIL_SUCCESS,
  READ_ROOMDETAIL_FAILURE,
] = createRequestActionTypes('roomDetail/READ_ROOMDETAIL');

// action creators
// payload로 room_id를 보낸다. 왜냐하면 url room_id에 따라 DB를 보내주기 때문!
export const readRoomDetail = createAction(READ_ROOMDETAIL);

// saga
const readRoomDetailSaga = createRequestSaga(
  READ_ROOMDETAIL,
  roomDetailAPI.readRoomDetail,
);
console.log(roomDetailAPI.readRoomDetail);

export function* RoomDetailSaga() {
  yield takeLatest(READ_ROOMDETAIL, readRoomDetailSaga);
}

// initialState
const initialState = {
  accommodation: {},
  roomDetailError: null,
};

// reducer
const roomDetail = handleActions(
  {
    [READ_ROOMDETAIL_SUCCESS]: (state, { payload: accommodation }) => {
      // console.log(state, accommodation);
      return {
        ...state,
        accommodation,
      };
    },
    [READ_ROOMDETAIL_FAILURE]: (state, { payload: error }) => {
      // console.log(state, error);
      return {
        ...state,
        roomDeatilError: error,
      };
    },
  },
  initialState,
);

export default roomDetail;
