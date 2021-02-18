import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { removeReservation } from '../../redux/lib/api/reservations';

const CommonChoiceModal = ({ hideModal, children, reservationId }) => {
  const history = useHistory();

  // 예약 취소
  const cancleReservation = async () => {
    await removeReservation(reservationId);
    history.push('/reservation');
  };

  return (
    <div
      data-name="modal"
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div
        className="w-54rem px-3.2rem py-3.2rem z-50 bg-white relative top-0 
      overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <h3 className="text-2rem font-bold mb-10 flex justify-center">
          {children}
        </h3>
        <div className="flex items-center justify-center">
          <button
            data-name="post"
            onClick={cancleReservation}
            className="h-16 w-32 px-5 mr-7rem text-xl bg-black text-white font-bold rounded-2xl"
          >
            확인
          </button>
          <button
            data-name="close"
            onClick={hideModal}
            className="h-16 w-32 px-5 m-2 text-xl bg-#b0b0b0 text-black font-bold rounded-2xl"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonChoiceModal;
