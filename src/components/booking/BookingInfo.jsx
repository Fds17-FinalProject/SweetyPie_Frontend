import React from 'react';

const BookingInfo = ({
  bookingEdit,
  showModal,
  checkInDateArr,
  checkoutDateArr,
  query,
}) => {
  const { totalGuestNum } = query;

  // 체크인 날짜
  const checkinYear = checkInDateArr[0];

  const checkinMonth =
    checkInDateArr[1] < 10 ? checkInDateArr[1].slice(1, 2) : checkInDateArr[1];

  const checkinDay =
    checkInDateArr[2] < 10 ? checkInDateArr[2].slice(1, 2) : checkInDateArr[2];

  // 체크아웃 날짜
  const checkoutYear = checkoutDateArr[0];

  const checkoutMonth =
    checkoutDateArr[1] < 10
      ? checkoutDateArr[1].slice(1, 2)
      : checkoutDateArr[1];

  const checkoutDay =
    checkoutDateArr[2] < 10
      ? checkoutDateArr[2].slice(1, 2)
      : checkoutDateArr[2];

  return (
    <section className="mt-10">
      <div>
        <h3 className="text-2.2rem font-semibold">예약 정보</h3>
      </div>
      <div className="mt-10 relative">
        <p className="text-1.6rem font-semibold">날짜</p>
        {bookingEdit && (
          <button
            className="text-1.6rem font-semibold underline absolute right-0 top-0"
            onClick={() => showModal('date')}
          >
            수정
          </button>
        )}
        <div className="text-1.6rem text-#717171 mt-3">
          {`${checkinYear}.${checkinMonth}.${checkinDay} - ${checkoutYear}.${checkoutMonth}.${checkoutDay}`}
        </div>
      </div>
      <div className="mt-10 relative">
        <p className="text-1.6rem font-semibold">게스트</p>
        {bookingEdit && (
          <button
            className="text-1.6rem font-semibold underline absolute right-0 top-0"
            onClick={() => showModal('guest')}
          >
            수정
          </button>
        )}
        <div className="text-1.6rem text-#717171 mt-3">
          {`게스트 ${totalGuestNum}명`}
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
