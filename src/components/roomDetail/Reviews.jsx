import React from 'react';
import { HiStar } from 'react-icons/hi';
import ReviewProfile from './ReviewProfile';

const Reviews = ({ rating, reviewNum, reviews, onShowModal }) => {
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
    <div className="pt-20" id="reviews">
      <div className="inline-flex text-2.2rem font-bold mb-12">
        <span className="inline-flex items-center flex-start mr-1 mb-1">
          <HiStar className="inline-block text-airbnb" />
        </span>
        <span className="mr-2">{ratingRoundUp}점</span>
        <span className="">(후기 {reviewNum}개)</span>
      </div>
      <div className="flex text-1.6rem px-0.8rem mb-12">
        <ul className="w-full mr-9.5rem">
          <li className="flex justify-between">
            <div className="">청결도</div>
            <div className="flex items-center">
              <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                <div className="w-44 h-2 bg-gray-500"></div>
              </div>
              <span>4.8</span>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="">의사소통</div>
            <div className="flex items-center">
              <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                <div className="w-48 h-2 bg-gray-500"></div>
              </div>
              <span>5.0</span>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="">체크인</div>
            <div className="flex items-center">
              <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                <div className="w-44 h-2 bg-gray-500"></div>
              </div>
              <span>4.7</span>
            </div>
          </li>
        </ul>
        <ul className="w-full mr-9.5rem">
          <li className="flex justify-between">
            <div className="">정확성</div>
            <div className="flex items-center">
              <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                <div className="w-48 h-2 bg-gray-500"></div>
              </div>
              <span>5.0</span>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="">위치</div>
            <div className="flex items-center">
              <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                <div className="w-44 h-2 bg-gray-500"></div>
              </div>
              <span>4.8</span>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="">가격 대비 만족도</div>
            <div className="flex items-center">
              <div className="w-48 h-2 bg-gray-300 mr-8 rounded-2xl overflow-hidden">
                <div className="w-48 h-2 bg-gray-500"></div>
              </div>
              <span>4.9</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="flex">
          {reviews
            .map(review => (
              <div className="inline-block mr-8% w-5/12">
                <ReviewProfile
                  name={names[review.id % 6]}
                  profileImage={profileImages[review.id % 4]}
                  reviews={review}
                />
              </div>
            ))
            .slice(0, 2)}
        </div>
        <div className="flex">
          {reviews
            .map(review => (
              <div className="inline-block mr-8% w-5/12">
                <ReviewProfile
                  name={names[review.id % 6]}
                  profileImage={profileImages[review.id % 4]}
                  reviews={review}
                />
              </div>
            ))
            .slice(2, 4)}
        </div>
        <div className="flex">
          {reviews
            .map(review => (
              <div className="inline-block mr-8% w-5/12">
                <ReviewProfile
                  name={names[review.id % 6]}
                  profileImage={profileImages[review.id % 4]}
                  reviews={review}
                />
              </div>
            ))
            .slice(4, 6)}
        </div>
      </div>
      <button
        className="text-1.6rem px-2.4rem py-1.3rem bg-white font-bold border border-black rounded-2xl transform focus:scale-90 shadow-md hover:bg-gray-100 transition-all duration-150 "
        onClick={() => onShowModal('review')}
      >
        후기 {reviewNum}개 모두 보기
      </button>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Reviews;
