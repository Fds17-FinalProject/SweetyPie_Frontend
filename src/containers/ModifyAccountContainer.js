import React, { useState } from 'react';
import ModifyAccount from '../components/modify/ModifyAccount';

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
  return <ModifyAccount onClick={onClick} modify={modify} />;
};

export default ModifyAccountContainer;
