import React, { useRef, useState } from 'react';
import Button from '../common/Button';
// import LoginModal from './LoginModal';
import {RegisterInput} from './RegisterForm';
// import RegisterModal from './RegisterModal';
const AuthModal = ({ hideModal, authVisible, changeModal }) => {
  // console.log('authVisible', authVisible);
  const [visible, setVisible] = useState(false);
  const modalElement = useRef(null);
  // 유저 메뉴 모달 open
  const showModal = () => {
    setVisible(true);
  };


  return (
    <div
      onClick={hideModal}
      data-name="close"
      // className="w-screen h-screen flex bg-modal justify-center items-center text-white fixed top-0"
      className="w-full h-full overflow-hidden flex bg-modal justify-center items-center text-white fixed top-0">
      <div className="w-56rem z-50 bg-white border rounded-2xl flex flex-col overflow-y-auto text-#727272 text-center p-8 relative text-1.4rem">
          <h1 className="a11y-hidden">회원가입 팝업창</h1>
          <h2 className="text-1.6rem font-extrabold border-b pb-8 mb-2rem">회원가입 완료</h2>
          <button
            data-name="close"
            className="flex w-3.6rem h-3.6rem absolute top-5 left-4 justify-center items-center rounded-50% hover:bg-#f7f7f7"
            onClick={hideModal}
          >
            <img
              data-name="close"
              src="/img/close.png"
              alt="#"
              className="w-1.8rem h-1.8rem"
            />
      </button>
      
      <form className="flex flex-wrap	w-full">
        <RegisterInput htmlFor="email-input" id="email-input" type="text" placeholder="이메일" msg="이메일 형식이 맞지않네요" label="이메일" />
        <RegisterInput htmlFor="contact-input" id="contact-input" type="text" placeholder="휴대폰 번호" msg="번호는 11자 이상 작성하세요~" label="휴대폰 번호" />
        <RegisterInput htmlFor="birth-input" id="birth-input" type="date" placeholder="생년월일" msg="미래에서 오셨나요?" label="생년월일" />
        {/* 소셜로 회원가입 하는 경우 비밀번호 인풋창 x */}
        {/* <RegisterInput htmlFor="password-input" id="password-input" type="password" placeholder="비밀번호" msg="특수문자, 문자, 숫자를 포함해서 8자 이상 작성해주세요" label="비밀번호" /> */}
        {/* <RegisterInput htmlFor="password-confirm-input" id="password-confirm-input" type="password" placeholder="비밀번호 확인" msg="비밀번호가 일치하지 않습니다" label="비밀번호 확인" /> */}
        <Button color='pink' size='lg' className="mt-8">회원가입</Button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

