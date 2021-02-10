import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// 액션 타입 선언
const GET_ACCOMM_LIST = 'search/GET_ACCOMM_LIST';
const GET_ACCOMM_LIST_SUCCESS = 'search/GET_ACCOMM_LIST_SUCCESS';
const GET_ACCOMM_LIST_FAILURE = 'search/GET_ACCOMM_LIST_FAILURE';

// 액션 생성
export const getAccommList = createAction(GET_ACCOMM_LIST);

// lib에 있는 api 요청들을 api.어쩌구로 가져올 수 있다.
export const getAccommListSaga = createRequestSaga(
  GET_ACCOMM_LIST,
  api.getList,
);

// createRequestSaga를 호출하면 api 요청을 실행해주는 함수가 반환된다.
// getAccommListSaga = api 요청하는 함수 그자체

export function* searchSaga() {
  yield takeLatest(GET_ACCOMM_LIST, getAccommListSaga);
}

// 초기 상태 선언
const initialState = { accommodations: [], error: null };

const accommodations = handleActions(
  {
    [GET_ACCOMM_LIST_SUCCESS]: (state, action) => {
      console.log(state, action);
      return { ...state, accommodations: action.payload.content };
    },
    [GET_ACCOMM_LIST_FAILURE]: (state, action) => {
      console.log(state, action);
      return { ...state, error: action.payload };
    },
  },
  initialState,
);

export default accommodations;
