import axios from 'axios';

export const getToken = async ({ email, password }) => {
  return await axios.post('http://3.34.122.155/api/login', { email, password });
};
// await localStorage.setItem('token', response.data.token);
// 계정 페이지에서 회원정보 GET
export const getUser = async () =>
  await axios.get('https://sweetypie.ga/api/member', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

// 계정 페이지 회원수정 PUT
export const modifyUser = async ({
  email,
  name,
  birthDate,
  contact,
  password,
}) => {
  console.log(email, name, birthDate, contact, password);
  await axios.put(
    'https://sweetypie.ga/api/member',
    {
      email,
      name,
      birthDate,
      contact,
      password,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
};

// 회원가입
// { headers: {"Authorization" : `Bearer ${token}`} }

export const register = async ({
  name,
  email,
  contact,
  birthDate,
  password,
  passwordConfirm,
}) =>
  await axios.post('http://3.34.122.155/api/member', {
    name,
    email,
    contact,
    birthDate,
    password,
    passwordConfirm,
  });

export const socialRegister = async ({
  email,
  name,
  contact,
  birthDate,
  socialId,
}) => {
  const res = await axios.post('http://3.34.122.155/api/login/google', {
    email,
    name,
    contact,
    birthDate,
    socialId,
  });
  await console.log('socialRes', res);
  return res;
};

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
export const logout = async () => {
  const res = await axios.get('http://3.34.122.155/api/logout', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  console.log('res', res);
  return res;
};

export const withdrawal = async () => {
  const res = await axios.delete('http://3.34.122.155/api/member', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  console.log('auth.js(res)', res);
  return res;
};
