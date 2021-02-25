import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
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

const SafetyModal = styled.div`
  animation: ${slideUp} 0.25s ease-out;
`;

const RoomDetailSafetyModal = ({ onCloseModal }) => {
  return (
    <ModalBackground
      className="fixed top-0 left-0 bg-modal flex justify-center items-center w-full h-full z-20"
      onClick={onCloseModal}
      data-name="close"
    >
      <SafetyModal className="bg-searchBackground w-78rem rounded-2xl">
        <div className="h-7.2rem" data-name="close">
          <button
            className="inline-flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl transition-colors duration-150 focus:outline-none border-black bg-white rounded-full focus:shadow-outline hover:bg-gray-200 transform hover:scale-110 relative left-5 top-5"
            data-name="close"
          >
            <HiOutlineX data-name="close" />
          </button>
        </div>
        <div className="px-3.5rem pb-2.4rem text-1.6rem">
          <h1 className="text-2.2rem font-bold mb-2rem">건강과 안전</h1>
          <ul>
            <li className="mb-0.8rem flex">
              <div className="w-2rem h-1.6rem mr-1.2rem">
                <FiAlertTriangle className="w-8 h-8" />
              </div>
              <span>에어비앤비의 강화된 청소 절차 준수에 동의했습니다.</span>
            </li>
            <li className="mb-0.8rem flex">
              <div className="w-2rem h-1.6rem mr-1.2rem">
                <FiAlertTriangle className="w-8 h-8 mr-1.2rem" />
              </div>
              <span>
                코로나바이러스감염증-19(코로나19)가 유행하는 동안 모든 호스트와
                게스트는 에어비앤비의 사회적 거리 두기 및 관련 가이드라인을
                준수해야 합니다.
              </span>
            </li>
            <li className="mb-0.8rem flex">
              <div className="w-2rem h-1.6rem mr-1.2rem">
                <FaCheckCircle className="w-8 h-8 " />
              </div>
              <span className="">일산화탄소 경보기</span>
            </li>
            <li className="mb-5 flex">
              <div className="w-2rem h-1.6rem mr-1.2rem">
                <FaCheckCircle className="w-8 h-8 " />
              </div>
              <span className="">화재 경보기</span>
            </li>
          </ul>
        </div>
      </SafetyModal>
    </ModalBackground>
  );
};
export default RoomDetailSafetyModal;
