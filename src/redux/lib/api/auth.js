import axios from 'axios';

// 로그인
export const login = ({ email, password }) =>
  axios.post('http://3.34.122.155/api/login', { email, password });

// 회원가입
export const register = async ({ name, email, contact, birthDate, password }) =>
  await axios.post('http://3.34.122.155/api/member', { name, email, contact, birthDate, password });


// export const register = async (payload) => {
//   console.log(payload);
//   return await axios.post('http://3.34.122.155/api/member', {
//     name: payload.name,
//     email: payload.email,
//     contact: payload.contact,
//     birthDate: payload.birthDate,
//     password: payload.password
//   })
// }


  // REGISTER action이 발생하면 감시하고있다가 비동기 처리를 한다.
  // dispatch가 날라오면 여기로 흐름이 이동한다
  // 얘의 처리에 따라 success, failure

export const socialRegister = ({ email, contact, birthDate }) =>
  // social도 똑같이 ? 
  axios.post('http://3.34.122.155/api/member', { email, contact, birthDate });

// 로그인 상태 확인 ??? 
// export const check = () => axios.get()