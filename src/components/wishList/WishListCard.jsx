import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { postBookMark, deleteBookMark } from '../../redux/lib/api/bookmark';

const WishListCard = ({ bookmark }) => {
  const { accommodationId, title, city, gu, accommodationPicture } = bookmark;

  // 북마크 상태 여부
  const [mark, setMark] = useState(true);

  // 북마크 삭제
  const removeBookmark = async accommodationId => {
    try {
      await deleteBookMark(accommodationId);
      setMark(false);
    } catch (e) {
      console.log(e);
    }
  };

  // 북마크 추가
  const updateBookmark = async accommodationId => {
    try {
      await postBookMark(accommodationId);
      setMark(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <li className="px-6 w-1/3">
      <div className="mt-6 mb-8 rounded-2xl shadow-before hover:transition-shadow hover:shadow-after relative">
        {mark ? (
          <HiHeart
            onClick={() => removeBookmark(accommodationId)}
            className="w-10 h-10 text-airbnb cursor-pointer absolute top-5 right-5"
          />
        ) : (
          <HiOutlineHeart
            onClick={() => updateBookmark(accommodationId)}
            className="w-10 h-10 cursor-pointer absolute top-5 right-5"
          />
        )}
        <Link className="block" to={`/accommodation/${accommodationId}`}>
          <div>
            <img
              src={accommodationPicture.url}
              alt="#"
              className="h-72 w-full rounded-t-2xl object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col flex-grow mt-10">
          <p className="text-2.2rem font-semibold my-2 px-10 truncate">
            {gu && `${gu}`} {city && `, ${city}`}
          </p>
          <div className="mt-2 flex flex-col flex-1">
            <div className="flex flex-row items-center h-24 px-10 mb-5">
              <img
                src={accommodationPicture.url}
                alt="#"
                className="h-16 w-16 rounded-xl mr-6"
              />
              <p className="text-1.4rem truncate flex-1">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WishListCard;
