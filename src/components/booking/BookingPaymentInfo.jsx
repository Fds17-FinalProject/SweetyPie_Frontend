import React from 'react';

const BookingPaymentInfo = () => {
  return (
    <section className="mt-10">
      <h3 className="text-2.2rem font-semibold">요금 세부정보</h3>
      <ul className="mt-10 text-1.6rem">
        <li className="flex mb-3">
          <div className="flex-grow">₩40,000 x 1박</div>
          <div>₩40,000</div>
        </li>
        <li className="flex mb-3">
          <div className="flex-grow underline">청소비</div>
          <div>₩25,000</div>
        </li>
        <li className="flex">
          <div className="flex-grow underline">서비스 수수료</div>
          <div>₩9,177</div>
        </li>
      </ul>
      <div className="mt-10 border-b"></div>
      <div className="flex mt-10 text-1.6rem font-semibold">
        <div className="flex-grow">
          총 합계<span className="underline">(KRW)</span>
        </div>
        <div>₩75,095</div>
      </div>
    </section>
  );
};

export default BookingPaymentInfo;
