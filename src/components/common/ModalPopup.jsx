import React from 'react';

const ModalPopup = ({ hidePost }) => {
  return (
    <div
      onClick={hidePost}
      className="w-screen h-screen bg-modal flex justify-center items-center text-white fixed top-0"
      // style={{
      //   width: '100vw',
      //   height: '100vh',
      //   background: 'rgba(62, 60, 70, 0.5)',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   color: '#fff',
      //   position: 'fixed',
      //   top: 0
      // }}
    >
      <div
        className="w-96 h-60 p-12 z-50 bg-white relative top-0 overflow-y-auto bg-#444 flex flex-col items-center"
        // style={{
        //   width: '800px',
        //   height: '500px',
        //   zIndex: '100',
        //   padding: '30px',
        //   background: '#fff',
        //   position: 'relative',
        //   top: 0,
        //   overflowY: 'auto',
        //   color: '#444',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center'
        // }}
      ></div>
    </div>
  );
};

export default ModalPopup;
