import React from 'react';
import SVG from '../../assets/svg';
import {
  modifyReservation,
  paymentReservation,
} from '../../redux/lib/api/reservations';

const BookingButton = ({
  showModal,
  reservationId,
  checkInDate,
  checkoutDate,
  query,
  subPage,
  accommodationInfo,
  nights,
}) => {
  // 쿼리에서 가져올 정보들
  const { totalGuestNum, adultNum, childNum, infantNum } = query;
  // url에서 accommodationId 가져오기
  const accommodationId = window.location.pathname.split('/')[3];

  const { pricePerDay } = subPage === 'modify' && query;
  const { price } = subPage === 'payment' && accommodationInfo;

  // 서비스 수수료 계산
  const fees = Math.round(
    subPage === 'modify' ? pricePerDay * nights * 0.07 : price * nights * 0.07,
  );

  // 총 가격 계산
  const totalPrice =
    subPage === 'modify'
      ? pricePerDay * nights + 10000 + fees
      : price * nights + 10000 + fees;

  // 수정 완료 버튼 클릭 시 patch 요청 및 확인 모달창 show
  const patchReservation = async type => {
    // 예약 수정 patch 요청
    await modifyReservation({
      reservationId,
      checkInDate,
      checkoutDate,
      totalGuestNum,
      adultNum,
      childNum,
      infantNum,
      totalPrice,
    });

    // 확인 버튼 모달 open
    showModal(type);
  };

  // 결제 완료 버튼 클릭 시 post 요청 및 확인 모달창 show
  const postReservation = async type => {
    // 예약 하기 post 요청
    await paymentReservation({
      accommodationId,
      checkInDate,
      checkoutDate,
      totalGuestNum: +adultNum + +childNum + +infantNum,
      adultNum,
      infantNum,
      childNum,
      totalPrice,
    });

    // 확인 버튼 모달 open
    showModal(type);
  };

  return (
    <div className="mt-10 flex">
      <button
        onClick={
          subPage === 'modify'
            ? () => patchReservation('edit')
            : () => postReservation('edit')
        }
        className="flex items-center justify-center w-60 h-20 mr-10 bg-airbnb hover:bg-airbnbHover text-white font-bold rounded-2xl relative shadow-lg transform focus:scale-90 duration-150"
      >
        <SVG
          name="lock"
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          color="#fff"
        />
        <span className="m-2 text-2xl">
          {subPage === 'modify' ? '수정 완료' : '결제 완료'}
        </span>
      </button>
      {subPage === 'modify' && (
        <button
          onClick={() => showModal('delete')}
          className="flex items-center justify-center w-60 h-20 bg-#b0b0b0 text-black font-bold rounded-2xl shadow-lg transform focus:scale-90 duration-150 hover:bg-gray-300"
        >
          <span className="m-2 text-2xl">예약 취소</span>
        </button>
      )}
    </div>
  );
};
export default BookingButton;
