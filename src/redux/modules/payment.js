import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api/prices';
import createRequestSaga from '../lib/createRequestSaga';

// 액션 타입 선언
const GET_PRICES = 'prices/GET_PRICES';
const GET_PRICES_SUCCESS = 'prices/GET_PRICES_SUCCESS';
const GET_PRICES_FAILURE = 'prices/GET_PRICES_FAILURE';

// 액션 생성
export const getPricesAction = createAction(GET_PRICES);

// lib에 있는 api 요청들을 api.어쩌구로 가져올 수 있다.
export const getPricesSaga = createRequestSaga(GET_PRICES, api.getPrices);

// createRequestSaga를 호출하면 api 요청을 실행해주는 함수가 반환된다.
// getAccommListSaga = api 요청하는 함수 그자체

export function* pricesSaga() {
  yield takeLatest(GET_PRICES, getPricesSaga);
}

// 초기 상태 선언
const initialState = { prices: [], error: null };

const payment = handleActions(
  {
    [GET_PRICES_SUCCESS]: (state, action) => ({
      ...state,
      prices: action.payload,
    }),
    [GET_PRICES_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default payment;
