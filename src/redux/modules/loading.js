import { createAction, handleActions } from 'redux-actions';

// 액션 타입 설정
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 액션 생성자 함수
export const startLoading = createAction(
  // 액션의 타입
  START_LOADING,
  // 두번째 파라미터는 payload creator이다.
  // 생략해도 상관없지만 표기해준다면 여기 페이로드로 뭘 받기로 했더라? 라는 고민을 할 시간을 줄일 수 있다.
  requestType => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType,
);

// 초기 상태값 설정
const initialState = {};

// handle actions로 리듀서 함수 작성
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => {
      // console.log(state, action);

      return {
        ...state,
        [action.payload]: false,
      };
    },
  },
  initialState,
);

export default loading;
// 디스패치할 액션 예시
/*
{
  type: 'loading/START_LOADING',
  payload: 'sample/GET_POST'
}
*/
