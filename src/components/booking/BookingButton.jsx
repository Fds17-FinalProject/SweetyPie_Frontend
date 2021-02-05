import React from 'react';
import SVG from '../../assets/svg';

const BookingButton = ({ bookingEdit }) => {
  return (
    <div className="mt-10 flex">
      <button className="flex items-center justify-center w-60 h-20 mr-10 bg-#D70466 text-white font-bold rounded-2xl relative">
        <SVG
          name="lock"
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          color="#fff"
        />
        {bookingEdit ? (
          <span className="m-2 text-2xl">수정 완료</span>
        ) : (
          <span className="m-2 text-2xl">결제 완료</span>
        )}
      </button>
      {bookingEdit && (
        <button className="flex items-center justify-center w-60 h-20 bg-gray-400 text-black font-bold rounded-2xl">
          <span className="m-2 text-2xl">예약 취소</span>
        </button>
      )}
    </div>
  );
};

export default BookingButton;
