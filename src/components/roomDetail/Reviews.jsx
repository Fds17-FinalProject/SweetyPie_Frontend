import React from 'react';
import { HiStar } from 'react-icons/hi';
import ReviewProfile from './ReviewProfile';

const Reviews = ({ name, guestPhoto }) => {
  const ratingAvg = 4.58;
  const reviewNum = 24;

  return (
    <div className="border bg-gray-100 pt-20">
      <div className="inline-flex text-2.2rem font-bold mb-12">
        <span className="inline-flex items-center flex-start mr-1 mb-1">
          <HiStar className="inline-block text-airbnb" />
        </span>
        <span className="mr-2">{ratingAvg}점</span>
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
                <div className="w-44 h-2 bg-gray-500"></div>
              </div>
              <span>4.9</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="flex">
          <ReviewProfile
            name="YoungSeo"
            photo={guestPhoto}
            className="mr-9.5rem"
          />
          <ReviewProfile name="영원" photo={guestPhoto} />
        </div>
        <div className="flex">
          <ReviewProfile name="한슬" photo={guestPhoto} />
          <ReviewProfile name="DongChan" photo={guestPhoto} />
        </div>
        <div className="flex">
          <ReviewProfile
            name="jaebok"
            photo={guestPhoto}
            className="mr-9.5rem"
          />
          <ReviewProfile name="준철" photo={guestPhoto} />
        </div>
      </div>
      <div className="mb-20 border-b"></div>
    </div>
  );
};

export default Reviews;
