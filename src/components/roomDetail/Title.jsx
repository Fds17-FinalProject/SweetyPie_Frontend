import React from 'react';
import { HiStar, HiOutlineHeart, HiHeart } from 'react-icons/hi';

const Title = ({
  title,
  rating,
  reviewNum,
  address,
  bookmarked,
  postBookmark,
  deleteBookmark,
}) => {
  const ratingRoundUp = rating.toFixed(2);

  return (
    <div className="pt-2.4rem">
      <div className="text-2.6rem font-bold">{title}</div>
      <div className="mt-3 text-1.4rem flex justify-between	">
        <div className="inline-flex items-center flex-start">
          <span className="inline-flex items-center flex-start mr-2">
            <div>
              <HiStar className="inline-block text-airbnb" />
            </div>
          </span>
          <span className="font-bold mr-2">{ratingRoundUp}</span>
          <span className="text-#717171">({reviewNum})</span>
          <span className="text-#717171 mr-1"> ㆍ </span>
          <span className="text-#717171 font-bold underline mr-2">
            {address}
          </span>
        </div>
        <button
          className="inline-flex items-center justify-center px-2 h-12 font-bold text-black text-xl transition-colors duration-150 focus:outline-none bg-white rounded-md focus:shadow-outline hover:bg-gray-200 transform hover:scale-110"
          onClick={bookmarked ? deleteBookmark : postBookmark}
        >
          {bookmarked ? (
            <HiHeart className="text-3xl inline-block mr-2 text-airbnb" />
          ) : (
            <HiOutlineHeart className="text-3xl inline-block mr-2" />
          )}

          <span className="underline text-1.4rem">
            {bookmarked ? '저장 완료' : '저장'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Title;
