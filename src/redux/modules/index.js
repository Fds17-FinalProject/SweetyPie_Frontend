import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';
import loading from './loading';
import reservation, { reservationSaga } from './reservation';
import roomDetail, { RoomDetailSaga } from './roomDetail';
import accommodations, { searchSaga } from './accommodations';
import auth, { authSaga } from './auth';
import bookmark, { bookmarkSaga } from './bookmark';

const rootReducer = combineReducers({
  loading,
  reservation,
  roomDetail,
  accommodations,
  auth,
  bookmark,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 한다.
  // put은 디스패치를 해준다.
  yield all([
    reservationSaga(),
    searchSaga(),
    RoomDetailSaga(),
    authSaga(),
    bookmarkSaga(),
  ]);
}

export default rootReducer;
