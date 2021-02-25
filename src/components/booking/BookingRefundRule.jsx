import React from 'react';

const BookingRefundRule = ({ checkInDateArr }) => {
  // 체크인 월이 10보다 작을 경우 09가 아닌 9로 출력
  const checkinMonth =
    checkInDateArr[1] < 10 ? checkInDateArr[1].slice(1, 2) : checkInDateArr[1];

  // 체크인 일자가 10보다 작을 경우 09가 아닌 9로 출력
  const checkinDay =
    checkInDateArr[2] < 10 ? checkInDateArr[2].slice(1, 2) : checkInDateArr[2];

  return (
    <section className="mt-10">
      <div className="pl-10 border-l-8 border-orange">
        <h3 className="text-2.2rem font-semibold mb-10">환불 정책</h3>
        <span className="text-1.6rem text-#717171 tracking-tight leading-8">
          {checkinMonth}월 {checkinDay - 1}일 1:00 PM까지 무료로 취소할 수
          있습니다. 그 후에는 {checkinMonth}월 {checkinDay}일 1:00 PM 전에
          예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한 요금 전액이
          환불됩니다.&nbsp;
          {/* <button className="text-1.6rem text-black font-semibold underline">
            자세히 알아보기
          </button> */}
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
        <a
          href="https://www.airbnb.co.kr/help/article/2701/%EC%A0%95%EC%83%81%EC%B0%B8%EC%9E%91%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%83%81%ED%99%A9-%EC%A0%95%EC%B1%85-%EB%B0%8F-%EC%BD%94%EB%A1%9C%EB%82%98%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4%EA%B0%90%EC%97%BC%EC%A6%9D19%EC%BD%94%EB%A1%9C%EB%82%9819"
          target="_blank"
          rel="noreferrer"
          className="text-1.6rem text-black font-semibold underline"
        >
          자세히 알아보기
        </a>
      </div>
    </section>
  );
};

export default BookingRefundRule;
