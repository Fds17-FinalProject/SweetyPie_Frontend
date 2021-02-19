import React from 'react';
import SVG from '../../assets/svg';

const BookingRoomInfo = ({ reservationInfo, accommodationInfo, subPage }) => {
  // 예약 수정 페이지, 예약 하기 페이지 조건부 할당
  const { city, gu, title, bedroomNum, bedNum, bathNum, reviewNum } =
    subPage === 'modify' ? reservationInfo : accommodationInfo;

  const { bathroomNum } = subPage === 'payment' && accommodationInfo;

  // 평균 평점 소수점 2째자리 까지 반올림
  const roundedRating =
    subPage === 'modify'
      ? reservationInfo.ratingAvg.toFixed(2)
      : accommodationInfo.rating.toFixed(2);

  return (
    <div className="flex pb-5">
      <div className="w-48 h-40 rounded-2xl flex-grow-0 flex-shrink-0 overflow-hidden">
        <div className="inline-block w-full h-full">
          <img
            src={
              subPage === 'modify'
                ? reservationInfo.accommodationPicture.url
                : accommodationInfo.accommodationPictures[0].url
            }
            alt="#"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pl-6 flex flex-col justify-between min-w-0">
        <p className="text-1.2rem truncate">
          {gu && `${gu}`} {city && `${city}`}
        </p>
        <p className="text-1.4rem truncate">{title}</p>
        <p className="text-1.2rem text-#717171  truncate">
          침실{bedroomNum}개 · 침대 {bedNum}개 · 욕실{' '}
          {subPage === 'modify'
            ? bathNum
              ? bathNum
              : 0
            : bathroomNum
            ? bathroomNum
            : 0}
          개
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
