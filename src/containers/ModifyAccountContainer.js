import React, { useState } from 'react';
import ModifyAccount from '../components/modify/ModifyAccount';
import { withdrawal } from '../redux/lib/api/auth';

const ModifyAccountContainer = () => {
  const [modify, setModify] = useState({
    email: false,
    name: false,
    birthDate: false,
    password: false,
    contact: false,
  });
  const onClick = e => {
    e.preventDefault();
    // console.log(['TARGET'], e.target.name);
    setModify({ ...modify, [e.target.name]: !modify[e.target.name] });
    // console.log(['MODIFY'], modify);
  };
  const onWithdrawal = e => {
    console.log('e', e);
    withdrawal();
    localStorage.removeItem('token');
    console.log('회원삭제완료');
    // setAuthVisible(false);
    // setToken(false);
  };
  return <ModifyAccount onClick={onClick} modify={modify} onWithdrawal={onWithdrawal}/>;
};

export default ModifyAccountContainer;
