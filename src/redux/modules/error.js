// import { createAction, handleActions } from 'redux-actions';

// // 액션 타입 설정
// const RESET_ERROR = 'error/RESET_ERROR';
// const ASSIGN_ERROR = 'error/ASSIGN_ERROR';

// // 액션 생성자 함수
// export const resetError = createAction(
//   // 액션의 타입
//   RESET_ERROR,
//   requestType => requestType,
// );

// export const assignError = createAction(
//   ASSIGN_ERROR,
//   requestType => requestType,
// );

// // 초기 상태값 설정
// const initialState = null;

// // handle actions로 리듀서 함수 작성
// const error = handleActions(
//   {
//     [RESET_ERROR]: (state, action) => ({
//       ...state,
//       [action.payload]: null,
//     }),
//     [ASSIGN_ERROR]: (state, action) => {
//       console.log(state, action);
//       return {
//         ...state,
//         [action.payload]: action.payload,
//       };
//     },
//   },
//   initialState,
// );

// export default error;
