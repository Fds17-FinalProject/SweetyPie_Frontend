// import { createAction, handleActions } from 'redux-actions';

// const CHANGE_FIELD = 'auth/CHANGE_FIELD';
// const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// export const changeField = createAction(
//   CHANGE_FIELD,

//   ({ form, key, value }) => ({
//     form, // register, socialRegister, login(로그인도 같이 할 수 있을까요)
//     key, // username, password, passwordConfirm, email, contact, birthDate
//     value, // 실제 바꾸려는 값
//   }),
// );


// export const initializeForm = createAction(INITIALIZE_FORM, form => form);
// // initializeForm의 결과 { type: INITIALIZE_FORM, payload: form}
// // 함수가 어떤 파라미터를 필요로 하는지 파악 할 수 있다( 선택 사항 )

// const initialState = {
//   register: {
//     email: '',
//     contact: '',
//     birthDate: '',
//     password: '',
//     passwordConfirm: '',
//   },
//   socialRegister: {
//     email: '',
//     contact: '',
//     birthDate: '',
//   },
//   login: {
//     email: '',
//     password: '',
//   },
// };

// // 파라미터가 존재하는 경우의 리듀서 함수
// // handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// // 두번째 파라미터는 초기 상태입니다.
// const auth = handleActions({
//   // 아래 코드는 action 객체를 비구조화 할당하고, payload 값을 form, key, value를 쓰게겠다는 의미입니다.
//   [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
//     ...state,
//     login: {
//       // email: 
//     }
//     });
// });

// export default auth;