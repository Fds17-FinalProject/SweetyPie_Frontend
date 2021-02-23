import React from 'react';
import { HiStar } from 'react-icons/hi';
import { BiCool, BiMessageCheck } from 'react-icons/bi';
import ReviewProfile from './ReviewProfile';

const Reviews = ({ rating, reviewNum, reviews, onShowModal }) => {
  const img = window.location.origin;
  const ratingRoundUp = rating.toFixed(2);
  const names = [
    '동찬 킴',
    'YoungSeo Im',
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
        {reviewNum === 0 ? (
          <span className="">후기 (아직)없음</span>
        ) : (
          <>
            <span className="inline-flex items-center flex-start mr-1 mb-1">
              <HiStar className="inline-block text-airbnb" />
            </span>
            <span className="mr-2">{ratingRoundUp}점</span>
            <span className="">(후기 {reviewNum}개)</span>
          </>
        )}
      </div>
      {reviewNum === 0 ? (
        <>
          <div className="flex text-1.6rem px-0.8rem mb-12">
            <div className="flex mr-10% w-5/12">
              <BiCool className="w-20 h-10 mr-1.6rem" />
              <div className="mb-20 text-1.6rem">
                이 숙소를 이용하고 후기를 처음으로 남겨주세요. 호스트가 당신의
                후기를 기다리고 있어요:)
              </div>
            </div>
            <div className="flex mr-10% w-5/12">
              <BiMessageCheck className="w-20 h-10 mr-1.6rem" />
              <div className="mb-20 text-1.6rem">
                여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은
                <b> </b>
                <a href="https://www.airbnb.co.kr/help/article/544/%EC%88%99%EC%86%8C%EB%82%98-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%97%90-%EB%AC%B8%EC%A0%9C%EA%B0%80-%EC%9E%88%EC%96%B4-%EC%98%88%EC%95%BD%EC%9D%84-%EC%B7%A8%EC%86%8C%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%BD%EC%9A%B0%EC%97%90%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%98%EB%82%98%EC%9A%94">
                  <b className="underline">에어비앤비의 게스트 환불 정책</b>
                </a>
                에 따라 보호를 받습니다.
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Reviews;
