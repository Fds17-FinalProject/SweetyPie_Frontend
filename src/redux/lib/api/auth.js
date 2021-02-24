import axios from 'axios';

export const getToken = async ({ email, password }) => {
  return await axios.post('https://sweetypie.ga/api/login', { email, password });
}
export const getUser = async () => {
   const res = await axios.get('https://sweetypie.ga/api/member', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
     }
    });
    console.log('res', res);
  return res;
}
export const register = async ({ name, email, contact, birthDate, password, passwordConfirm }) => 
  await axios.post('https://sweetypie.ga/api/member', { name, email, contact, birthDate, password, passwordConfirm });

export const socialRegister = async ({ email, name, contact, birthDate, socialId }) => {
  const res = await axios.post('https://sweetypie.ga/api/login/google', { email, name, contact, birthDate, socialId });
  await console.log('socialRes', res);
  return res;
}

export const logout = async () => {
  const res = await axios.get('https://sweetypie.ga/api/logout', {
    headers: { "Authorization": `Bearer ${localStorage.getItem('token')}`}
  });
  console.log('res', res);
  return res;
};

export const withdrawal = async () => {
  const res = await axios.delete('https://sweetypie.ga/api/member', {
    headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
  });
  console.log('auth.js(res)', res);
  return res;
};