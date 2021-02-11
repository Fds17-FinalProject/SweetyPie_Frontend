import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
};

// api 요청을 보낼때 반복되는 코드를 줄이기 위해 함수를 만들었다.
export default function createRequestSaga(type, request) {
  // type = 액션 타입
  // request = api 요청 보낼때 필요한 url 정보
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    // api 요청 날리기 전에 로딩을 true로 바꾼다.
    yield put(startLoading(type));
    // yield put(resetError(type));
    // put은 특정 액션을 디스패치 해준다.

    try {
      const response = yield call(request, action.payload);
      // console.log(response.data);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      // console.log(e);
      // 에러 객체 디스패치
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    // api 요청 끝났으면 로딩을 false로 바꾼다.
    yield put(finishLoading(type));
  };
}
