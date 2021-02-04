import React from 'react';
import CommonHeader from '../common/CommonHeader';
import Footer from '../Main/Footer';
import { Link } from 'react-router-dom';
import ModifyInput from './ModifyInput';
import ModifyContent from './ModifyContent';

const res = {
  email: "gg2922914@gmail.com",
  name: "영서 임",
  birthDate: "1995년 10월 28일",
  password: "*******",
  contact: "+82 10 6525 2914",
};

const ModifyAccount = ({ onClick, modify }) => {
  return (
    <div>
      <CommonHeader />
      <div className="max-w-screen-2xl w-full h-full flex-grow-1 px-72 pt-32 ">
        <h1 className="a11y-hidden">개인정보 수정</h1>
        <Link className="text-#727272 text-1.4rem">계정</Link>
        <h2 className="text-3.2rem font-extrabold text-#727272 py-16">개인정보</h2>
        <div className="max-w-screen-2xl flex justify-between ">
          {/* left */}
          <div className=" w-3/5">
            {modify.email ? <ModifyInput name="email" onClick={onClick} content={res.email}>이메일</ModifyInput> : 
            <ModifyContent htmlFor="email-input" id="email-input" name="email" onClick={onClick} content={res.email} >이메일 수정</ModifyContent>}
          
            {modify.name ? <ModifyInput name="name" onClick={onClick} content={res.name}>이름</ModifyInput> : 
            <ModifyContent htmlFor="name-input" id="name-input" name="name" onClick={onClick} content={res.name}>이름 수정</ModifyContent>}
          
            {modify.birthDate ? <ModifyInput name="birthDate" onClick={onClick} content={res.birthDate}>생년월일</ModifyInput> : 
            <ModifyContent htmlFor="birthDate-input" id="birthDate-input" name="birthDate" onClick={onClick} content={res.birthDate}>생년월일 수정</ModifyContent>}
            
            {modify.password ? <ModifyInput name="password" onClick={onClick} content={res.password}>비밀번호</ModifyInput> : 
            <ModifyContent htmlFor="password-input" id="password-input" name="password" onClick={onClick} content={res.password}>비밀번호 수정</ModifyContent>}
          
            {modify.contact ? <ModifyInput name="contact" onClick={onClick} content={res.contact}>전화번호</ModifyInput> : 
            <ModifyContent htmlFor="contact-input" id="contact-input" name="contact" onClick={onClick} content={res.contact}>전화번호 수정</ModifyContent>}
          </div>
          {/* right */}
          <div className=" w-1/3 bg-#717171"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ModifyAccount;
