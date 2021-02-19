import React from 'react';

const BookingPaymentInfo = ({ nights, subPage, query, accommodationInfo }) => {
  const { pricePerDay } = subPage === 'modify' && query;
  const { price } = subPage === 'payment' && accommodationInfo;

  // 가격 3자 단위 콤마(,) 정규표현식
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 서비스 수수료 계산
  const fees = Math.round(
    subPage === 'modify' ? pricePerDay * nights * 0.07 : price * nights * 0.07,
  );

  // 총 가격 계산
  const totalPrice =
    subPage === 'modify'
      ? pricePerDay * nights + 10000 + fees
      : price * nights + 10000 + fees;

  return (
    <section className="mt-10">
      <h3 className="text-2.2rem font-semibold">요금 세부정보</h3>
      <ul className="mt-10 text-1.6rem">
        <li className="flex mb-3 ">
          <div className="flex-grow underline">
            ₩{numberWithCommas(subPage === 'modify' ? pricePerDay : price)} x{' '}
            {nights}박
          </div>
          <div>
            ₩
            {numberWithCommas(
              subPage === 'modify' ? pricePerDay * nights : price * nights,
            )}
            원
          </div>
        </li>
        <li className="flex mb-3">
          <div className="flex-grow underline">청소비</div>
          <div>₩10,000원</div>
        </li>
        <li className="flex">
          <div className="flex-grow underline">서비스 수수료</div>
          <div>₩{numberWithCommas(fees)}원</div>
        </li>
      </ul>
      <div className="mt-10 border-b"></div>
      <div className="flex mt-10 text-1.6rem font-semibold">
        <div className="flex-grow">
          총 합계<span className="underline">(KRW)</span>
        </div>
        <div>₩{numberWithCommas(totalPrice)}원</div>
      </div>
    </section>
  );
};
export default BookingPaymentInfo;
