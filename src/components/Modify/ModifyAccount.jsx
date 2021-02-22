import React from 'react';
import Footer from '../main/Footer';
import ModifyInput from './ModifyInput';
import ModifyContent from './ModifyContent';
import HeaderLogo from '../main/HeaderLogo';
import HeaderUser from '../main/HeaderUser';
import ModifyDescription from './ModifyDescription';

const res = {
  email: 'gg2922914@gmail.com',
  name: '영서 임',
  birthDate: '1995년 10월 28일',
  password: '*******',
  contact: '+82 10 6525 2914',
};

const ModifyAccount = ({ onClick, modify, onWithdrawal }) => {
  return (
    <div>
      <header className="max-w-screen-2xl px-32 bg-white w-full h-32 flex items-center justify-between	fixed z-10">
        <HeaderLogo color="#FF385C" />
        <HeaderUser />
      </header>
      <div className="max-w-screen-2xl w-full flex-grow-1 px-72 pt-32 min-h-75rem">
        <h1 className="a11y-hidden">개인정보 수정</h1>
        <h2 className="text-3.2rem font-extrabold text-#727272 py-16">
          개인정보
        </h2>
        <div className="max-w-screen-2xl flex justify-between ">
          {/* left */}
          <div className=" w-3/5 pt-8">
            <div className=" flex relative flex-wrap border-b border-#rgb235 pt-0.4rem pb-2.4rem">
              <span className="w-full text-1.6rem font-semibold text-#727272">
                이메일
              </span>
              <span className="w-full pt-2 text-1.6rem font-normal text-#717171">
                {res.email}
              </span>
            </div>
            {modify.name ? (
              <ModifyInput name="name" onClick={onClick} content={res.name}>
                이름 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="name-input"
                id="name-input"
                name="name"
                onClick={onClick}
                content={res.name}
              >
                이름
              </ModifyContent>
            )}

            {modify.birthDate ? (
              <ModifyInput
                name="birthDate"
                onClick={onClick}
                content={res.birthDate}
              >
                생년월일 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="birthDate-input"
                id="birthDate-input"
                name="birthDate"
                onClick={onClick}
                content={res.birthDate}
              >
                생년월일
              </ModifyContent>
            )}

            {modify.password ? (
              <ModifyInput
                name="password"
                onClick={onClick}
                content={res.password}
              >
                비밀번호 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="password-input"
                id="password-input"
                name="password"
                onClick={onClick}
                content={res.password}
              >
                비밀번호
              </ModifyContent>
            )}

            {modify.contact ? (
              <ModifyInput
                name="contact"
                onClick={onClick}
                content={res.contact}
              >
                전화번호 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="contact-input"
                id="contact-input"
                name="contact"
                onClick={onClick}
                content={res.contact}
              >
                전화번호
              </ModifyContent>
            )}
          </div>
          {/* right */}
          <ModifyDescription />
        </div>
        <div className="flex flex-col justify-center items-center pt-16 pb-20">
          <h2 className="text-#717171 text-1.6rem">
            계정을 비활성화 하셔야 하나요?
          </h2>
          <button onClick={onWithdrawal} className="text-#008489 text-1.4rem font-semibold">
            지금 처리하기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModifyAccount;
