import React from 'react';
import { HiStar, HiOutlineHeart, HiHeart } from 'react-icons/hi';

const Title = () => {
  const title = '스파의 이완과 테라스의 풍경이 멋진 강릉의 302호 객실';
  const ratingAvg = 4.58;
  const reviewNum = 24;
  const city = '강원도';
  const gu = '강릉시';

  return (
    <div className="pt-2.4rem">
      <div className="text-2.6rem font-bold">{title}</div>
      <div className="mt-3 text-1.4rem flex justify-between	">
        <div className="inline-flex items-center flex-start">
          <span className="inline-flex items-center flex-start mr-2">
            <HiStar className="inline-block text-airbnb" />
          </span>
          <span className="font-bold mr-2">{ratingAvg}</span>
          <span className="text-#717171">({reviewNum})</span>
          <span className="text-#717171 mr-1"> ㆍ </span>
          <span className="text-#717171 font-bold underline mr-2">
            {gu}, {city}, 대한민국
          </span>
        </div>
        <button className="inline-flex items-center justify-center w-24 h-12 font-bold text-black text-xl transition-colors duration-150 focus:outline-none bg-white rounded-md focus:shadow-outline hover:bg-gray-200 transform hover:scale-110">
          <HiOutlineHeart className="text-3xl inline-block mr-2" />
          <span className="underline text-1.4rem">저장</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
