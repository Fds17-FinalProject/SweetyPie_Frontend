import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import *as authAPI from '../lib/api/auth'
import { takeLatest } from 'redux-saga/effects';

// Action type
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
// social register
const SOCIAL = 'auth/SOCIAL';

// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
// const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
// const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// 위의 반복되는 코드를 아래처럼 작성

const [SOCIAL_REGISTER, SOCIAL_REGISTER_SUCCESS, SOCIAL_REGISTER_FAILURE] = createRequestActionTypes(
  'auth/SOCIAL_REGISTER',
);
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);


const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// Create action
// export const changeField = createAction(
  // CHANGE_FIELD,
  // ({ form, key, value }) => ({
  //   form, // register, socialRegister, login(로그인도 같이 할 수 있을까요)
  //   key, // username, password, passwordConfirm, email, contact, birthDate
  //   value, // 실제 바꾸려는 값
  // }),
  // ({ form, key, value }) => ({
  //  }),
// );

// social 
export const socialRegister = createAction(SOCIAL);
// export const social = createAction()

export const changeField = createAction(CHANGE_FIELD);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
// initializeForm의 결과 { type: INITIALIZE_FORM, payload: form}
// 함수가 어떤 파라미터를 필요로 하는지 파악 할 수 있다( 선택 사항 )
export const socialRegisterSubmitAction = createAction(SOCIAL_REGISTER, ({ email, name, contact, birthDate, socialId }) => ({
  email,
  name,
  contact,
  birthDate,
  socialId,
}));
export const authRegister = createAction(REGISTER, ({ name, email, contact, birthDate, password, passwordConfirm }) => ({
  name,
  email,
  contact,
  birthDate,
  password,
  passwordConfirm,
}));

export const authLogin = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));


export const startLoading = createAction(
  START_LOADING,
  requestType => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType,
)

// Initialize form
const initialState = {
  register: {
    name: '',
    email: '',
    contact: '',
    birthDate: '',
    password: '',
    passwordConfirm: '',
  },
  socialRegister: {
    name: '',
    email: '',
    contact: '',
    birthDate: '',
    socialId: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: '',
};

// 1. saga 생성
// REGISTER가 발생하면 authAPI.register 함수(비동기)를 실행하겠다. 즉, 곧 registerSaga함수가 제너레이트 함수가 된다.
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
// const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const loginSaga = createRequestSaga(LOGIN, authAPI.getToken);
const socialRegisterSaga = createRequestSaga(SOCIAL_REGISTER, authAPI.socialRegister);

export function* authSaga() {
  // 사가 로직
  // takeLates - 코드를 진행하는 중간에 타입에 맞는 디스패치가 추가로 들어와도 가장 마지막에 들어온 것만 실행한다.
  // takeLates가 첫번째 파라미터로 들어온 함수가 발생했는지 감시한다.
  // 만약 발생을 했다면 registerSaga generator 함수를 실행
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SOCIAL_REGISTER, socialRegisterSaga)
}
// 2. 만든 사가 함수를 모듈의 인덱스 파일에서 합쳐주기.
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: {form, key, value}}) => {
      return ({
        ...state,
      [form]: {
        ...state[form],
          [key]: value,
      }
    })},
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: '', // 폼 전환 시 회원 인증 에러 초기화
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [START_LOADING]: (state, action) => ({
       ...state,
        [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
    [SOCIAL]: (state, action) => {
      return {
        ...state,
        socialRegister: {
          ...state.socialRegister,
          email: action.payload.email,
          name: action.payload.name,
          socialId: action.payload.socialId,
        }
      }
    },

    [SOCIAL_REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SOCIAL_REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
},
  initialState,
);

export default auth;