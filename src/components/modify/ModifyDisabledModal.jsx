import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50%);
  } to {
    transform: translateY(0);
  }
`;

const ModalBackground = styled.div`
  animation: ${fadeIn} 0.25s ease-in;
`;

const DisableModal = styled.div`
  animation: ${slideUp} 0.25s ease-out;
`;

const ModifyDisabledModal = ({ onCloseModal, onWithdrawal }) => {
  const history = useHistory();

  // 예약 취소
  const cancleDisable = async () => {
    onWithdrawal();
    history.push('/');
  };

  return (
    <ModalBackground
      onClick={onCloseModal}
      data-name="close"
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0 z-20"
    >
      <DisableModal
        className="w-54rem px-3.2rem py-3.2rem z-50 bg-white relative top-0 
      overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <h3 className="text-2rem font-bold mb-10 flex justify-center">
          계정을 비활성화 하시겠습니까?
        </h3>
        <div className="flex items-center justify-center">
          <button
            onClick={cancleDisable}
            className="h-16 w-32 px-5 mr-7rem text-xl bg-black text-white font-bold rounded-2xl shadow-lg transform focus:scale-90"
          >
            확인
          </button>
          <button
            data-name="close"
            className="h-16 w-32 px-5 m-2 text-xl bg-#b0b0b0 text-black font-bold rounded-2xl shadow-lg transform focus:scale-90"
          >
            취소
          </button>
        </div>
      </DisableModal>
    </ModalBackground>
  );
};

export default ModifyDisabledModal;
