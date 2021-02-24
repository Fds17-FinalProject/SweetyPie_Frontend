import React from 'react';
import CommonFooter from '../common/CommonFooter';
import ModifyInput from './ModifyInput';
import ModifyContent from './ModifyContent';
import ModifyDescription from './ModifyDescription';
import ModifyHeader from './ModifyHeader';

const ModifyAccount = ({
  onClick,
  modify,
  onWithdrawal,
  showModal,
  hideModal,
  changeModal,
  authVisible,
  visible,
  showAuthModal,
  socialModal,
  onChange,
  registerSubmit,
  loginSubmit,
  socialRegisterSubmit,
  userLogout,
  state,
  checkedToken,
  userInfo,
  modifyMemberInfo,
  dispatch,
  setModify,
}) => {
  // auth 리듀서에서 유저 정보들을 받아온다
  const { email, name, contact, birthDate, socialMember, password } = userInfo;

  // 정규 표현식
  const nameReg = /^[가-힇]{2,30}$/;
  const contactReg = /^\d{3}\d{4}\d{4}$/;
  const passwordReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*[#?!@$%^&*-]).{8,30}$/;

  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    birthDate: '',
    contact: '',
    password: '',
  });

  const changeInputValue = (e, name) => {
    console.log(e.target.value);
    setInputValue({ [name]: e.target.value });
  };

  // 비밀번호 default 값
  const defaultPassword = '********';

  // 개인정보 변경
  const patchMemberInfo = async (e, name, value) => {
    if (name === 'name' && value.match(nameReg)) {
      await dispatch(
        modifyMemberInfo({
          name: value,
          birthDate: birthDate,
          contact: contact,
          password: password,
        }),
      );
      setModify({ ...modify, [e.target.name]: !modify[e.target.name] });
    } else if (name === 'birthDate') {
      await dispatch(
        modifyMemberInfo({
          name: userInfo.name,
          birthDate: value,
          contact: contact,
          password: password,
        }),
      );
      setModify({ ...modify, [e.target.name]: !modify[e.target.name] });
    } else if (name === 'contact' && value.match(contactReg)) {
      await dispatch(
        modifyMemberInfo({
          name: userInfo.name,
          birthDate: birthDate,
          contact: value,
          password: password,
        }),
      );
      setModify({ ...modify, [e.target.name]: !modify[e.target.name] });
    } else if (name === 'password' && value.match(passwordReg)) {
      await dispatch(
        modifyMemberInfo({
          name: userInfo.name,
          birthDate: birthDate,
          contact: contact,
          password: value,
        }),
      );
      setModify({ ...modify, [e.target.name]: !modify[e.target.name] });
    }
  };

  return (
    <div>
      <ModifyHeader
        showModal={showModal}
        hideModal={hideModal}
        changeModal={changeModal}
        authVisible={authVisible}
        visible={visible}
        showAuthModal={showAuthModal}
        socialModal={socialModal}
        onChange={onChange}
        registerSubmit={registerSubmit}
        loginSubmit={loginSubmit}
        socialRegisterSubmit={socialRegisterSubmit}
        userLogout={userLogout}
        state={state}
        checkedToken={checkedToken}
      />
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
                {email}
              </span>
            </div>
            {modify.name ? (
              <ModifyInput
                name="name"
                onClick={onClick}
                content={name}
                patchMemberInfo={patchMemberInfo}
                modifyMemberInfo={modifyMemberInfo}
                value={inputValue.name}
                changeInputValue={changeInputValue}
                nameReg={nameReg}
                modify={modify}
              >
                이름 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="name-input"
                id="name-input"
                name="name"
                onClick={onClick}
                content={name}
              >
                이름
              </ModifyContent>
            )}
            {modify.birthDate ? (
              <ModifyInput
                name="birthDate"
                onClick={onClick}
                content={birthDate}
                patchMemberInfo={patchMemberInfo}
                modifyMemberInfo={modifyMemberInfo}
                value={inputValue.birthDate}
                changeInputValue={changeInputValue}
              >
                생년월일 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="birthDate-input"
                id="birthDate-input"
                name="birthDate"
                onClick={onClick}
                content={birthDate}
              >
                생년월일
              </ModifyContent>
            )}
            {socialMember ? (
              <></>
            ) : modify.password ? (
              <ModifyInput
                name="password"
                onClick={onClick}
                content={defaultPassword}
                patchMemberInfo={patchMemberInfo}
                modifyMemberInfo={modifyMemberInfo}
                value={inputValue.password}
                changeInputValue={changeInputValue}
                passwordReg={passwordReg}
              >
                비밀번호 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="password-input"
                id="password-input"
                name="password"
                onClick={onClick}
                content={defaultPassword}
              >
                비밀번호
              </ModifyContent>
            )}
            {modify.contact ? (
              <ModifyInput
                name="contact"
                onClick={onClick}
                content={contact}
                patchMemberInfo={patchMemberInfo}
                modifyMemberInfo={modifyMemberInfo}
                value={inputValue.contact}
                changeInputValue={changeInputValue}
                contactReg={contactReg}
              >
                전화번호 수정
              </ModifyInput>
            ) : (
              <ModifyContent
                htmlFor="contact-input"
                id="contact-input"
                name="contact"
                onClick={onClick}
                content={contact}
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
          <button
            onClick={onWithdrawal}
            className="text-#008489 text-1.4rem font-semibold"
          >
            지금 처리하기
          </button>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};
export default ModifyAccount;
