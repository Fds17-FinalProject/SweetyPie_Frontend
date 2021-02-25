import React from 'react';
import { useHistory } from 'react-router-dom';

const CommonSuccessModal = ({ hideModal, children }) => {
  const history = useHistory();

  const moveReservationPage = () => {
    history.push('/reservation');
  };

  return (
    <div
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0 z-20"
    >
      <div
        className="w-54rem px-3.2rem py-3.2rem bg-white relative top-0 
        overflow-y-auto flex flex-col text-black rounded-2xl border border-#b0b0b0"
      >
        <h3 className="text-2rem font-bold my-6 flex justify-center">
          {children}
        </h3>
        <div className="flex items-center justify-center mt-2">
          <button
            data-name="close"
            onClick={moveReservationPage}
            className="h-16 w-32 px-5 m-2 text-xl bg-black text-white font-bold rounded-2xl transform focus:scale-90 shadow-lg duration-150"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonSuccessModal;
