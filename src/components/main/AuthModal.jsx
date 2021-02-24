import React from 'react';
import LoginModal from './LoginModal';
import RegisterForm from './RegisterForm';
import RegisterModal from './RegisterModal';
const AuthModal = ({ hideModal, authVisible, changeModal, onChange, registerSubmit, loginSubmit, state, checkedLogin }) => {

  return (
    <div
      onClick={hideModal}
      data-name="close"
      className="w-full h-full overflow-hidden flex bg-modal justify-center items-center text-white fixed top-0 z-50"
    >
      <div className="w-56rem z-50 bg-white border rounded-2xl flex flex-col overflow-y-auto text-#727272 text-center p-8 relative text-1.4rem">
        {authVisible.type === 'login' && <LoginModal changeModal={changeModal} onChange={onChange} loginSubmit={loginSubmit} state={state} checkedLogin={checkedLogin}/>}
        {authVisible.type === 'register' && <RegisterModal changeModal={changeModal}/>}
        {authVisible.type === 'form' && <RegisterForm changeModal={changeModal} onChange={onChange} registerSubmit={registerSubmit} state={state}/>}
      </div>
    </div>
  );
};

export default AuthModal;
