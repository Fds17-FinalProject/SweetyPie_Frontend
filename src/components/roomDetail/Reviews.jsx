import React from 'react';
import { HiStar } from 'react-icons/hi';
import ReviewProfile from './ReviewProfile';

const Reviews = () => {
  const ratingAvg = 4.58;
  const reviewNum = 24;

  return (
    <div className="border bg-gray-100">
      <div className="inline-flex text-1.4rem ml-36">
        <span className="inline-flex items-center flex-start mr-1 mb-1">
          <HiStar className="inline-block text-airbnb" />
        </span>
        <span className="font-bold mr-2">{ratingAvg}</span>
        <span className="text-#717171">({reviewNum})</span>
      </div>
      <div className="">
        <ul>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
        </ul>
        <ul>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
        </ul>
      </div>
      <div>
        <div>
          <ReviewProfile />
          <ReviewProfile />
          <ReviewProfile />
        </div>
        <div>
          <ReviewProfile />
          <ReviewProfile />
          <ReviewProfile />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
