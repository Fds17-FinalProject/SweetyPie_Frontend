import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HiOutlineX } from 'react-icons/hi';
import SVG from '../../assets/svg';

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

const GreenBar = styled.div`
  width: 0.4rem;
  height: 11.8rem;
  background: rgb(91, 202, 206);
  margin-left: 0.2rem;
`;

const GreenSubBar = styled.div`
  width: 3rem;
  height: 0.1rem;
  background: rgb(91, 202, 206);
  transform: translateY(3rem);
`;

const ReserveDsc = styled.div`
  margin-left: 3rem;
  transform: translateY(2rem);
`;

const RedBar = styled.div`
  width: 0.4rem;
  height: 4rem;
  background: rgb(241, 130, 106);
  margin-left: 0.2rem;
`;

const RedSubBar = styled.div`
  width: 3rem;
  height: 0.1rem;
  background: rgb(241, 130, 106);
  transform: translateY(0.8rem);
`;

const YellowBar = styled.div`
  width: 0.4rem;
  height: 11.8rem;
  background: rgb(244, 176, 42);
  margin-left: 0.2rem;
`;

const YellowSubBar = styled.div`
  width: 3rem;
  height: 0.1rem;
  background: rgb(244, 176, 42);
  transform: translateY(0.8rem);
`;

const YellowSvg = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 999rem;
  background: rgb(244, 176, 42);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YellowInnerSvg = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 999rem;
  background: #fff;
`;

const RoomDetailRefundModal = ({ onCloseModal }) => {
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
        <div className="px-3.5rem pb-6rem text-1.6rem">
          <h1 className="text-2.2rem font-bold mb-2rem">환불 정책</h1>
          <p className="my-10">
            체크인 30일 전까지 취소하시면 전액이 환불됩니다.
          </p>
          <div>
            <div className="relative flex">
              <GreenBar>
                <div className="w-3rem h-3rem rounded-full bg-white absolute top-1.4rem -left-4 z-10 flex justify-center items-center">
                  <SVG
                    viewBox="0 0 24 24"
                    focusable="false"
                    height="24px"
                    width="24px"
                    color="rgb(91, 202, 206)"
                    name="check"
                  />
                </div>
                <GreenSubBar />
              </GreenBar>
              <ReserveDsc>
                <span className="block text-1.4rem">
                  예약이 확정되었습니다.
                </span>
                <span className="block text-1.4rem">전액 환불</span>
              </ReserveDsc>
            </div>
          </div>
          <div>
            <div className="relative flex">
              <YellowBar>
                <div className="absolute top-0 -left-2 z-10 flex justify-center items-center">
                  <YellowSvg>
                    <YellowInnerSvg />
                  </YellowSvg>
                </div>
                <YellowSubBar />
              </YellowBar>
              <div className="ml-3rem">
                <span className="block text-1.4rem">체크인 30일 전</span>
                <span className="block text-1.4rem">
                  총 숙박 요금의 50%와 서비스 수수료 전액 환불
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex">
              <RedBar>
                <div className="w-3rem h-3rem rounded-full bg-white absolute -top-0.4rem -left-4 z-10 flex justify-center items-center">
                  <SVG
                    viewBox="0 0 24 24"
                    focusable="false"
                    height="24px"
                    width="24px"
                    color="rgb(241, 130, 106)"
                    name="home"
                  />
                </div>
                <RedSubBar />
              </RedBar>
              <div className="ml-3rem">
                <span className="block text-1.4rem">체크인</span>
              </div>
            </div>
          </div>
        </div>
      </RefundModal>
    </ModalBackground>
  );
};

export default RoomDetailRefundModal;
