import React from 'react';
import { DiRuby } from 'react-icons/di';

const BookingBanner = () => {
  return (
    <section className="flex items-center p-10 border rounded-2xl">
      <DiRuby className="w-12 h-12 mr-10 text-airbnb" />
      <div className="inline-block text-1.6rem">
        <p className="font-semibold">흔치 않은 기회입니다.</p>
        <span className="text-#717171">
          NaNa님의 숙소는 보통 예약이 가득 차 있습니다.
        </span>
      </div>
    </section>
  );
};

export default BookingBanner;
