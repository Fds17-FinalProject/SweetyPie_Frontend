import React from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
const AuthModal = ({ hideModal, authVisible, changeModal }) => {
  console.log('authVisible', authVisible);
  
  return (
    <div
      onClick={hideModal}
      data-name="close"
      // className="w-screen h-screen flex bg-modal justify-center items-center text-white fixed top-0"
      className="w-full h-full overflow-hidden flex bg-modal justify-center items-center text-white fixed top-0"
    >
      <div className="w-56rem z-50 bg-white border rounded-2xl flex flex-col overflow-y-auto text-#727272 text-center p-8 relative text-1.4rem">
        {authVisible.type === 'login' && <LoginModal changeModal={changeModal}/>}
        {authVisible.type === 'register' && <RegisterModal changeModal={changeModal}/>}
        {/* <RegisterModal /> */}
      </div>
    </div>
  );
};

export default AuthModal;
