import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HiOutlineX } from 'react-icons/hi';

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

const RefundModal = styled.div`
  animation: ${slideUp} 0.25s ease-out;
`;

const RoomDetailRefundModal = ({ onCloseModal, visible }) => {
  return (
    <ModalBackground
      className="fixed top-0 left-0 bg-modal flex justify-center items-center w-full h-full z-20"
      onClick={onCloseModal}
      data-name="close"
    >
      <RefundModal className="bg-searchBackground w-78rem rounded-2xl">
        <div className="h-7.2rem" data-name="close">
          <button
            className="inline-flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl transition-colors duration-150 focus:outline-none border-black bg-white rounded-full focus:shadow-outline hover:bg-gray-200 transform hover:scale-110 relative left-5 top-5"
            data-name="close"
          >
            <HiOutlineX data-name="close" />
          </button>
        </div>
        <div className="px-3.5rem pb-2.4rem text-1.6rem">
          <h1 className="text-2.2rem font-bold mb-2rem">환불 정책</h1>
          <p className="my-10">
            체크인 30일 전까지 취소하시면 전액이 환불됩니다.
          </p>
        </div>
      </RefundModal>
    </ModalBackground>
  );
};

export default RoomDetailRefundModal;
