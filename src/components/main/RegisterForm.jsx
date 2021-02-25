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


const RegisterForm = ({ hideModal, onChange, registerSubmit, state }) => {
  const { register, authError } = state;
  const emailReg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const nameReg = /^[가-힇]{2,30}$/;
  const contactReg = /^\d{3}\d{3,4}\d{4}$/;
  const passwordReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*[#?!@$%^&*-]).{8,30}$/;
  // 인풋이 하나라도 비어있는 경우 버튼 disabled
  const emptyInput =
    register.email.length === 0 ||
    register.name.length === 0 ||
    register.contact.length === 0 ||
    register.birthDate.length === 0 ||
    register.password.length === 0 ||
    register.passwordConfirm.length === 0;
  // 인풋을 제대로 작성하지 않은 경우 버튼 disabled
  const invalidValue =
    !register.email.match(emailReg) ||
    !register.name.match(nameReg) ||
    !register.contact.match(contactReg) ||
    !register.password.match(passwordReg) ||
    register.password !== register.passwordConfirm;

  // 오늘 날짜 Get (생년월일 오늘 날짜 이전만 선택 가능하게 하기 위해서)
  const date = new Date();
  // 년, 월, 일 (월, 일은 한자리 수 일 경우 앞에 + 0,  ex 1995-02-02)
  const year = date.getUTCFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : '0' + month;
  let day = date.getDate() - 1;
  day = day >= 10 ? day : '0' + day;
  // 오늘 날짜 2021-02-18
  const curDate = year + '-' + month + '-' + day;

  return (
    <ModalBackground>
      <h1 className="a11y-hidden">회원가입 팝업창</h1>
      <h2 className="text-1.6rem font-extrabold border-b pb-8 mb-2rem">
        회원가입 완료
      </h2>
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
      <form className="flex flex-wrap	w-full" onSubmit={registerSubmit}>
        <label htmlFor="email-input" className="a11y-hidden">
          이메일
        </label>
        <input
          className="w-full border rounded-lg py-4 px-1.2rem"
          id="email-input"
          type="text"
          name="email"
          placeholder="이메일"
          autoComplete="off"
          onChange={e => onChange({ e, form: 'register' })}
          value={register.email}
        ></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">
          {!register.email.match(emailReg) &&
            register.email.length > 0 &&
            '이메일 형식을 맞춰주세요'}
        </span>

        <label htmlFor="name-input" className="a11y-hidden">
          이름
        </label>
        <input
          className="w-full border rounded-lg py-4 px-1.2rem"
          id="name-input"
          type="text"
          name="name"
          placeholder="이름"
          autoComplete="off"
          onChange={e => onChange({ e, form: 'register' })}
          value={register.name}
        ></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">
          {!register.name.match(nameReg) &&
            register.name.length > 0 &&
            '한글로 2글자 이상 작성해주세요'}
        </span>

        <label htmlFor="contact-input" className="a11y-hidden">
          휴대폰 번호
        </label>
        <input
          className="w-full border rounded-lg py-4 px-1.2rem"
          id="contact-input"
          type="text"
          name="contact"
          placeholder="휴대폰 번호"
          autoComplete="off"
          onChange={e => onChange({ e, form: 'register' })}
          value={register.contact}
        ></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">
          {!register.contact.match(contactReg) &&
            register.contact.length > 0 &&
            '휴대폰 번호를 작성해주세요'}
        </span>

        <label htmlFor="birth-input" className="a11y-hidden">
          생년월일
        </label>
        <input
          className="w-full border rounded-lg py-4 px-1.2rem"
          id="birth-input"
          type="date"
          min="1920-01-01"
          max={curDate}
          name="birthDate"
          placeholder="휴대폰 번호"
          autoComplete="off"
          onChange={e => onChange({ e, form: 'register' })}
          value={register.birth}
        ></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem"></span>

        <label htmlFor="password-input" className="a11y-hidden">
          비밀번호
        </label>
        <input
          className="w-full border rounded-lg py-4 px-1.2rem"
          id="password-input"
          type="password"
          name="password"
          placeholder="비밀 번호"
          autoComplete="off"
          onChange={e => onChange({ e, form: 'register' })}
          value={register.password}
        ></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">
          {!register.password.match(passwordReg) &&
            register.password.length > 0 &&
            '특수문자, 영문, 숫자를 포함해서 8자 이상 작성해주세요'}
        </span>

        <label htmlFor="password-confirm-input" className="a11y-hidden">
          비밀번호 확인
        </label>
        <input
          className="w-full border rounded-lg py-4 px-1.2rem"
          id="password-confirm-input"
          type="password"
          name="passwordConfirm"
          placeholder="비밀 번호 확인"
          autoComplete="off"
          onChange={e => onChange({ e, form: 'register' })}
          value={register.passwordConfirm}
        ></input>
        <span className="block py-2 px-4 h-3rem text-airbnb text-1.2rem">
          {register.password !== register.passwordConfirm &&
            register.passwordConfirm.length > 0 &&
            '비밀번호가 일치하지 않습니다.'}
        </span>

        <span className="block py-2 px-4 w-full h-3rem text-airbnb text-center text-1.4rem">
          {authError && '중복된 이메일입니다.'}
        </span>
        <button
          className="mt-8 w-full h-20 px-6 m-2 text-2xl transform focus:scale-90 bg-airbnb hover:bg-airbnbHover text-white font-bold rounded-2xl transition-all duration-150 shadow-md focus:outline-none"
          disabled={emptyInput || invalidValue}
        >
          회원가입
        </button>
      </form>
    </ModalBackground>
  );
};

export default RegisterForm;
