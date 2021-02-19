import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateBefore } from 'react-icons/md';

const BookingTitle = ({ subPage, query }) => {
  // url에서 accommodationId 가져오기
  const accommodationId = window.location.pathname.split('/')[3];

  const { checkInDate, checkoutDate, adultNum, childNum, infantNum } = query;

  return (
    <div className="flex items-center pb-7 px-32 pt-6.4rem xl:mx-48 md:mx-0">
      <div className="w-20 h-20 -ml-8 flex items-center justify-center rounded-50% hover:bg-#f7f7f7">
        {subPage === 'modify' ? (
          <Link
            // 예약 내역 페이지로 이동
            to="/reservation?tab=upcoming"
            className="w-full h-full flex items-center justify-center"
          >
            <MdNavigateBefore className="w-10 h-10" />
          </Link>
        ) : (
          <Link
            // 숙소 상세보기 페이지로 이동
            to={`/accommodation/${accommodationId}?checkInDate=${checkInDate}&checkoutDate=${checkoutDate}&adultNum=${adultNum}&childNum=${childNum}&infantNum=${infantNum}`}
            className="w-full h-full flex items-center justify-center"
          >
            <MdNavigateBefore className="w-10 h-10" />
          </Link>
        )}
      </div>
      {subPage === 'modify' ? (
        <h1 className="ml-10 text-3.2rem font-semibold">예약 수정하기</h1>
      ) : (
        <h1 className="ml-10 text-3.2rem font-semibold">예약 요청하기</h1>
      )}
    </div>
  );
};
export default BookingTitle;
