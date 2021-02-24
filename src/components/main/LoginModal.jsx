import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const LoginModal = ({ hideModal, changeModal, onChange, loginSubmit, state, checkedLogin }) => {
  const { login } = state;
  return (
    <>
          <h1 className="a11y-hidden">로그인 팝업창</h1>
          <h2 className="text-1.6rem font-extrabold border-b pb-8 mb-2rem">로그인</h2>
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
        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=358569667723-j52n7u0kd91fst85dotu0pssmk55qro9.apps.googleusercontent.com&redirect_uri=http://localhost:3000/redirect&response_type=code&scope=email%20profile%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&access_type=offline"
            className="flex-grow">구글 계정으로 로그인</a>
          </button>

          
          <div className="h-5rem flex justify-center items-center relative">
            <div className="w-full h-0.05rem bg-#e5e7eb my-3rem"></div>
            <span className="text-#717171 text-1.2rem bg-white w-3.5rem absolute my-0 mx-auto text-center">또는</span>
          </div>

       <form onSubmit={loginSubmit}>
            <div className="flex items-center mb-8">
              <label className="a11y-hidden" htmlFor="email-input">이메일</label>
              <input className="border rounded-lg py-4 px-1.2rem focus:ring-1 focus:ring-#727272 w-full h-full" type="text" id="email-input" name="email" placeholder="이메일" onChange={(e) => onChange({ e, form: 'login' })} value={login.email}/>
            </div>

            <div className="flex items-center">
              <label className="a11y-hidden" htmlFor="password-input">비밀번호</label>
              <input className="border rounded-lg py-4 px-1.2rem focus:ring-1 focus:ring-#727272 w-full h-full" type="text" id="password-input" name="password" placeholder="비밀번호" onChange={(e) => onChange({ e, form: 'login' })} value={login.password}/>
            </div>
            <span className="text-airbnb flex justify-center items-center h-1.2rem my-1.2rem">{checkedLogin && '이메일과 비밀번호를 확인해주세요.'}</span>
            <button className="flex items-center w-full rounded-lg	 py-4 px-1.2rem text-#fff bg-airbnb">
              <span className="flex-grow w-full h-full">로그인</span>
        </button>
      </form>
      

          <div className="mt-8 mb-2">
            <span>이미 에어비앤비 계정이 있나요?</span>
            <button className="text-#008489 ml-0.8rem border-b border-#008489" onClick={() => changeModal('register')}>회원가입</button>
          </div>
        </>
  );
};

export default LoginModal;
