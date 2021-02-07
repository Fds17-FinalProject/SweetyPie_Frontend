import React from 'react';

const BookingInfo = ({
  checkInDate,
  checkoutDate,
  guestNum,
  bookingEdit,
  showModal,
  showGuestModal,
}) => {
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
            onClick={showModal}
          >
            수정
          </button>
        )}
        <div className="text-1.6rem text-#717171 mt-3">
          {`${checkInDate}-${checkoutDate}`}
        </div>
      </div>
      <div className="mt-10 relative">
        <p className="text-1.6rem font-semibold">게스트</p>
        {bookingEdit && (
          <button
            className="text-1.6rem font-semibold underline absolute right-0 top-0"
            onClick={showGuestModal}
          >
            수정
          </button>
        )}
        <div className="text-1.6rem text-#717171 mt-3">
          {`게스트 ${guestNum}명`}
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
