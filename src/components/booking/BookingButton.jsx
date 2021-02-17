import React from 'react';
import SVG from '../../assets/svg';
import { modifyReservation } from '../../redux/lib/api/reservations';

const BookingButton = ({
  bookingEdit,
  showModal,
  reservationId,
  checkInDate,
  checkoutDate,
  query,
}) => {
  const { totalGuestNum, adultNum, childNum, infantNum, totalPrice } = query;

  // 수정 완료 버튼 클릭 시 patch 요청 및 확인 모달창 show
  const patchReservation = async type => {
    // 예약 수정 patch 요청
    const res = await modifyReservation({
      reservationId,
      checkInDate,
      checkoutDate,
      totalGuestNum,
      adultNum,
      childNum,
      infantNum,
      totalPrice,
    });
    console.log(res);

    // 확인 버튼 모달 open
    showModal(type);
  };

  return (
    <div className="mt-10 flex">
      <button
        // bookingEdit ? () => showModal('edit') : () => showModal('payment')
        onClick={() => patchReservation('edit')}
        className="flex items-center justify-center w-60 h-20 mr-10 bg-#D70466 text-white font-bold rounded-2xl relative"
      >
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
        <button
          onClick={() => showModal('delete')}
          className="flex items-center justify-center w-60 h-20 bg-gray-400 text-black font-bold rounded-2xl"
        >
          <span className="m-2 text-2xl">예약 취소</span>
        </button>
      )}
    </div>
  );
};

export default BookingButton;
