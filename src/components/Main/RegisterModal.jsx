import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import SVG from '../../assets/svg';
const RegisterModal = ({ hideModal }) => {
  return (
    <>
      <h1 className="a11y-hidden">회원가입 팝업창</h1>
      <h2 className="text-1.6rem font-extrabold border-b pb-8 mb-2rem">회원 가입</h2>
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
      <button className="flex items-center rounded-lg	border border-#e5e7eb py-4 px-1.2rem hover:border-#727272">
        <FcGoogle className="w-2.4rem h-2rem"/>
        <span className="flex-grow">구글 계정으로 회원가입</span>
      </button>

      <div className="h-5rem flex justify-center items-center relative">
        <div className="w-full h-0.05rem bg-#e5e7eb my-3rem"></div>
        <span className="text-#717171 text-1.2rem bg-white w-3.5rem absolute my-0 mx-auto text-center">또는</span>
      </div>

      <button className="flex items-center rounded-lg py-4 px-1.2rem text-#fff bg-airbnb">
        <SVG name="letter" width="2rem" height="2rem" viewBox="0 0 24 24" color="#fff"/>
        <span className="flex-grow">이메일로 회원가입</span>
      </button>

      <div className="mt-8 mb-2">
        <span>이미 에어비앤비 계정이 있나요?</span>
        <button className="text-#008489 ml-0.8rem border-b border-#008489">로그인</button>
      </div>
  </>
  );
};

export default RegisterModal;
