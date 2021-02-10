import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import error from './error';
import accommodations, { searchSaga } from './accommodations';

const rootReducer = combineReducers({
  accommodations,
  loading,
  error,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 한다.
  // put은 디스패치를 해준다.
  yield all([searchSaga()]);
}

export default rootReducer;
