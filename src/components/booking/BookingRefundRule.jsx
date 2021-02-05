import React from 'react';
import { Link } from 'react-router-dom';

const BookingRefundRule = ({ checkInDate, checkoutDate }) => {
  return (
    <section className="mt-10">
      <div className="pl-10 border-l-8 border-orange">
        <h3 className="text-2.2rem font-semibold mb-10">환불 정책</h3>
        <span className="text-1.6rem text-#717171 tracking-tight leading-8">
          3월 15일 1:00 PM까지 무료로 취소할 수 있습니다. 그 후에는 3월 16일
          1:00 PM 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한
          요금 전액이 환불됩니다.&nbsp;
          <button className="text-1.6rem text-black font-semibold underline">
            자세히 알아보기
          </button>
        </span>
      </div>
      <div className="pt-10 pl-10 border-l-8 border-orange">
        <strong className="text-1.6rem">
          호스트가 제공하는 환불 정책이 내게 적합한지 확인하세요.&nbsp;
        </strong>
        <span className="text-1.6rem text-#717171 tracking-tight leading-8">
          코로나19와 같이 이미 알려진 사건 또는 일반적인 악천후와 같이 예측
          가능한 사건으로 인한 여행 장애는 에어비앤비의 정상참작이 가능한 상황
          정책의 적용 대상이 아닐 수 있습니다.&nbsp;
        </span>
        <Link
          href="www.naver.com"
          className="text-1.6rem text-black font-semibold underline"
        >
          자세히 알아보기
        </Link>
      </div>
    </section>
  );
};

export default BookingRefundRule;
