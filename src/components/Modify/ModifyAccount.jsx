import React from 'react';
// import {HeaderLogo, HeaderUser} from '../common/CommonHeader';
import Footer from '../Main/Footer';
import { Link } from 'react-router-dom';
import ModifyInput from './ModifyInput';
import ModifyContent from './ModifyContent';
import HeaderLogo from '../Main/HeaderLogo';
import HeaderUser from '../Main/HeaderUser';
import SVG from '../../assets/Svg';
import ModifyDescription from './ModifyDescription';

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
      <header
        className="
        max-w-screen-2xl px-32 bg-white w-full h-32 flex items-center justify-between	fixed z-10
         ">
        <HeaderLogo color="#FF385C"/>
        <HeaderUser/>
      </header>
      {/* <CommonHeader/> */}
      <div className="max-w-screen-2xl w-full flex-grow-1 px-72 pt-32 min-h-75rem">
        <h1 className="a11y-hidden">개인정보 수정</h1>
        {/* <Link className="text-#727272 text-1.4rem">계정</Link> */}
        <h2 className="text-3.2rem font-extrabold text-#727272 py-16">개인정보</h2>
        <div className="max-w-screen-2xl flex justify-between ">
          {/* left */}
          <div className=" w-3/5 pt-8">
            {modify.email ? <ModifyInput name="email" onClick={onClick} content={res.email}>이메일 수정</ModifyInput> : 
            <ModifyContent htmlFor="email-input" id="email-input" name="email" onClick={onClick} content={res.email} >이메일</ModifyContent>}
          
            {modify.name ? <ModifyInput name="name" onClick={onClick} content={res.name}>이름 수정</ModifyInput> : 
            <ModifyContent htmlFor="name-input" id="name-input" name="name" onClick={onClick} content={res.name}>이름</ModifyContent>}
          
            {modify.birthDate ? <ModifyInput name="birthDate" onClick={onClick} content={res.birthDate}>생년월일 수정</ModifyInput> : 
            <ModifyContent htmlFor="birthDate-input" id="birthDate-input" name="birthDate" onClick={onClick} content={res.birthDate}>생년월일</ModifyContent>}
            
            {modify.password ? <ModifyInput name="password" onClick={onClick} content={res.password}>비밀번호 수정</ModifyInput> : 
            <ModifyContent htmlFor="password-input" id="password-input" name="password" onClick={onClick} content={res.password}>비밀번호</ModifyContent>}
          
            {modify.contact ? <ModifyInput name="contact" onClick={onClick} content={res.contact}>전화번호 수정</ModifyInput> : 
            <ModifyContent htmlFor="contact-input" id="contact-input" name="contact" onClick={onClick} content={res.contact}>전화번호</ModifyContent>}
          </div>
          {/* right */}
          <ModifyDescription/>
          {/* <div className=" w-1/3 h-full py-12 pl-10 pr-12	border rounded-lg">
            <div>
              <div className="relative">
                <SVG viewBox="0 0 24 24" width="4rem" height="4rem" color="rgb(96, 182, 181" name="locksub" className="absolute top-0 left-0"/>
                <SVG viewBox="0 0 24 24" width="4rem" height="4rem" name="lock" className="absolute top-0 left-0"/>
              </div>
              <div className="pt-20">
                <h2 className="text-1.8rem font-bold text-#727272 pb-3">수정할 수 있는 세부 정보는 무엇인가요?</h2>
                <span className="text-1.6rem text-#727272">
                  에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다.
                  연락처 정보와 일부 개인정보는 수정할 수 있지만,
                  다음번 예약 또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
                  </span>
              </div>
              <div className="relative">
                <SVG viewBox="0 0 24 24" width="4rem" height="4rem" color="rgb(96, 182, 181" name="camerasub" className="absolute top-0 left-0"/>
                <SVG viewBox="0 0 24 24" width="4rem" height="4rem" name="camera" className="absolute top-0 left-0"/>
              </div>
              <div className="pt-20">
                <h2 className="text-1.8rem font-bold text-#727272 pb-3">다른 사람에게 어떤 정보가 공개되나요?</h2>
                <span className="text-1.6rem text-#727272">
                에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.
                  </span>
              </div>
            </div>
            
          </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ModifyAccount;


