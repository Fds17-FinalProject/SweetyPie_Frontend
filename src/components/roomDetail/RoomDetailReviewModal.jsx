import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HiStar, HiOutlineX } from 'react-icons/hi';
import ReviewProfile from './ReviewProfile';

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

const RoomDetailReviewModal = ({
  onCloseModal,
  rating,
  reviewNum,
  reviews,
}) => {
  const img = window.location.origin;
  const ratingRoundUp = rating.toFixed(2);
  const names = [
    '동찬 킴',
    'YoungSeo Lim',
    '한슬',
    'Forever Na',
    'BokBok',
    '준철',
  ];
  const profileImages = [
    img + '/img/avatar.png',
    img + '/img/profile_01.jpg',
    img + '/img/profile_02.jpg',
    img + '/img/profile_03.jpg',
  ];

  return (
    <ModalBackground
      className="fixed top-0 left-0 bg-modal flex justify-center items-center w-full h-full z-20"
      onClick={onCloseModal}
      data-name="close"
    >
      <SafetyModal className="bg-searchBackground w-103rem rounded-2xl">
        <div className="h-7.2rem" data-name="close">
          <button
            className="inline-flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl transition-colors duration-150 focus:outline-none border-black bg-white rounded-full focus:shadow-outline hover:bg-gray-200 transform hover:scale-110 relative left-5 top-5"
            data-name="close"
          >
            <HiOutlineX data-name="close" />
          </button>
        </div>
        <div className="px-3.5rem pb-3.6rem text-1.6rem">
          <div className="flex items-center flex-start text-3.2rem font-bold pb-2.4rem">
            <span className="mr-1 mb-1">
              <HiStar className="inline-block text-airbnb" />
            </span>
            <span className="mr-2">{ratingRoundUp}점</span>
            <span className="">(후기 {reviewNum}개)</span>
          </div>
          <div className=" flex overflow-y-scroll">
            <div className="pt-20 w-2/5 h-full">
              <ul className="w-full mr-9.5rem text-1.4rem">
                <li className="flex justify-between mb-5">
                  <div className="">청결도</div>
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                      <div className="w-44 h-2 bg-gray-800"></div>
                    </div>
                    <span className="font-semibold">4.8</span>
                  </div>
                </li>
                <li className="flex justify-between mb-5">
                  <div className="">의사소통</div>
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                      <div className="w-48 h-2 bg-gray-800"></div>
                    </div>
                    <span className="font-semibold">5.0</span>
                  </div>
                </li>
                <li className="flex justify-between mb-5">
                  <div className="">체크인</div>
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                      <div className="w-44 h-2 bg-gray-800"></div>
                    </div>
                    <span className="font-semibold">4.7</span>
                  </div>
                </li>
                <li className="flex justify-between mb-5">
                  <div className="">정확성</div>
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                      <div className="w-48 h-2 bg-gray-800"></div>
                    </div>
                    <span className="font-semibold">5.0</span>
                  </div>
                </li>
                <li className="flex justify-between mb-5">
                  <div className="">위치</div>
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                      <div className="w-44 h-2 bg-gray-800"></div>
                    </div>
                    <span className="font-semibold">4.8</span>
                  </div>
                </li>
                <li className="flex justify-between mb-5">
                  <div className="">가격 대비 만족도</div>
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                      <div className="w-48 h-2 bg-gray-800"></div>
                    </div>
                    <span className="font-semibold">4.9</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-20 w-2/3 h-40rem ml-32">
              {reviews.map(review => (
                <div className="mr-8% w-full">
                  <ReviewProfile
                    name={names[review.id % 6]}
                    profileImage={profileImages[review.id % 4]}
                    reviews={review}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SafetyModal>
    </ModalBackground>
  );
};
export default RoomDetailReviewModal;
