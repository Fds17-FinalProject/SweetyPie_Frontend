import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`;
const ModalBackground = styled.div`
animation: ${fadeIn} 0.25s ease-in;
`;

const SocialRegisterModal = ({ hideModal, onChange, socialRegisterSubmit, state }) => {
  const { socialRegister, authError } = state;
  const emailReg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const nameReg = /^[가-힇]{2,30}$/;
  const contactReg = /^\d{3}\d{3,4}\d{4}$/;
  // 오늘 날짜 Get (생년월일 오늘 날짜 이전만 선택 가능하게 하기 위해서)
  const date = new Date();
  // 년, 월, 일 (월, 일은 한자리 수 일 경우 앞에 + 0,  ex 1995-02-02)
  const year = date.getUTCFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : '0' + month;
  let day = date.getDate();
  day = day >= 10 ? day : '0' + day;
  // 오늘 날짜 2021-02-18
  const curDate = year + '-' + month + '-' + day;

  return (
    <div
      onClick={hideModal}
      data-name="close"
      className="w-full h-full overflow-hidden flex bg-modal justify-center items-center text-white fixed top-0 z-50"
    >
      <ModalBackground className="w-56rem z-50 bg-white border rounded-2xl flex flex-col overflow-y-auto text-#727272 text-center p-8 relative text-1.4rem">
      <h1 className="a11y-hidden">회원가입 팝업창</h1>
          <h2 className="text-1.6rem font-extrabold border-b pb-8 mb-2rem">회원가입 완료</h2>
          <button
            data-name="close"
            className="flex w-3.6rem h-3.6rem absolute top-5 left-4 justify-center items-center rounded-50% hover:bg-#f7f7f7"
            onClick={hideModal}>
            <img
              data-name="close"
              src="/img/close.png"
              alt="#"
              className="w-1.8rem h-1.8rem"
            />
      </button>
        <form onSubmit={socialRegisterSubmit} className="flex flex-wrap	w-full" >
        <label htmlFor="email-input" className="a11y-hidden">이메일</label>
        <input className="w-full border rounded-lg py-4 px-1.2rem" id="email-input" type="text" name="email" placeholder="이메일" autoComplete="off" onChange={(e) => onChange({ e, form: 'socialRegister' })} value={socialRegister.email}></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">{!socialRegister.email.match(emailReg) && socialRegister.email.length > 0 && '이메일 형식을 맞춰주세요'}</span>

        <label htmlFor="name-input" className="a11y-hidden">이름</label>
        <input className="w-full border rounded-lg py-4 px-1.2rem" id="name-input" type="text" name="name" placeholder="이름" autoComplete="off" onChange={(e) => onChange({ e, form: 'socialRegister' })} value={socialRegister.name}></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">{!socialRegister.name.match(nameReg) && socialRegister.name.length > 0 && '한글로 2글자 이상 작성해주세요'}</span>

        <label htmlFor="contact-input" className="a11y-hidden">휴대폰 번호</label>
        <input className="w-full border rounded-lg py-4 px-1.2rem" id="contact-input" type="text" name="contact" placeholder="휴대폰 번호" autoComplete="off" onChange={(e) => onChange({e, form:'socialRegister'})} value={socialRegister.contact}></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">{!socialRegister.contact.match(contactReg) && socialRegister.contact.length > 0 && '휴대폰 번호를 작성해주세요'}</span>

        <label htmlFor="birth-input" className="a11y-hidden">생년월일</label>
        <input className="w-full border rounded-lg py-4 px-1.2rem" id="birth-input" type="date" min="1920-01-01" max={curDate}  name="birthDate" placeholder="휴대폰 번호" autoComplete="off" onChange={(e) => onChange({e, form:'socialRegister'})} value={socialRegister.birthDate}></input>
          <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem"></span>
          
          <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">{authError && '중복된 이메일입니다.'}</span>


        <button className="mt-8 w-full h-20 px-6 m-2 text-2xl transform focus:scale-90 bg-airbnb hover:bg-airbnbHover text-white font-bold rounded-2xl transition-all duration-150 shadow-md focus:outline-none">회원가입</button>

        </form>
      </ModalBackground>
    </div>
  );
};

export default SocialRegisterModal;
