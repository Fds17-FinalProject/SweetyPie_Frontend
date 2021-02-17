import React from 'react';
import SVG from '../../assets/Svg';

const BookingRoomInfo = ({ reservationInfo }) => {
  const {
    accommodationPicture,
    city,
    gu,
    title,
    bedroomNum,
    bedNum,
    bathNum,
    ratingAvg,
    reviewNum,
  } = reservationInfo;

  // 평균 평점 소수점 2째자리 까지 반올림
  const roundedRating = ratingAvg.toFixed(2);

  return (
    <div className="flex pb-5">
      <div className="w-48 h-40 rounded-2xl flex-grow-0 flex-shrink-0 overflow-hidden">
        <div className="inline-block w-full h-full">
          <img
            src={accommodationPicture.url}
            alt="#"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* overflow-hidden overflow-ellipsis */}
      {/* <div className="pl-6 flex-row flex-wrap content-between"> */}
      <div className="pl-6 flex flex-col justify-between min-w-0">
        <p className="text-1.2rem truncate">
          {gu && `${gu}`} {city && `${city}`}
        </p>
        <p className="text-1.4rem truncate">{title}</p>
        <p className="text-1.2rem text-#717171  truncate">
          침실{bedroomNum}개 · 침대 {bedNum}개 · 욕실 {bathNum ? bathNum : 0}개
        </p>
        <span className="flex items-center">
          <span className="flex items-center">
            <SVG
              name="rating"
              width="12px"
              height="12px"
              viewBox="0 0 32 32"
              color="#ff385c"
              xmlns="http://www.w3.org/2000/svg"
            />
            <span className="pl-2 text-1.4rem font-semibold">
              {roundedRating}
            </span>
          </span>
          <span className="pl-2 text-1.4rem text-#717171">({reviewNum})</span>
        </span>
      </div>
    </div>
  );
};

export default BookingRoomInfo;
