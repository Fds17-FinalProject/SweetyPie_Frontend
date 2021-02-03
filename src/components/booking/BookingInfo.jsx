import React from 'react';

const BookingInfo = () => {
  return (
    <section className="mt-10">
      <div>
        <h3 className="text-2.2rem font-semibold">예약 정보</h3>
      </div>
      <div className="mt-10 relative">
        <p className="text-1.6rem font-semibold">날짜</p>
        <button className="text-1.6rem font-semibold underline absolute right-0 top-0">
          수정
        </button>
        <div className="text-1.6rem text-#717171 mt-3">2021.3.16-2021.3.21</div>
      </div>
      <div className="mt-10 relative">
        <p className="text-1.6rem font-semibold">게스트</p>
        <button className="text-1.6rem font-semibold underline absolute right-0 top-0">
          수정
        </button>
        <div className="text-1.6rem text-#717171 mt-3">게스트 1명</div>
      </div>
    </section>
  );
};

export default BookingInfo;
