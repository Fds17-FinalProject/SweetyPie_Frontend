import React from 'react';
import BookingDetailTemplate from './BookingDetailTemplate';
import Modal from '../common/Modal';
import BookingTitle from './BookingTitle';
import BookingBanner from './BookingBanner';
import BookingInfo from './BookingInfo';
import BookingRefundRule from './BookingRefundRule';
import BookingButton from './BookingButton';
import BookingBorder from './BookingBorder';
import BookingDateEditModal from './BookingDateEditModal';
import BookingGuestEditModal from './BookingGuestEditModal';
import CommonSuccessModal from '../common/CommonSuccessModal';
import CommonChoiceModal from '../common/CommonChoiceModal';
import queryStirng from 'query-string';
import { useLocation } from 'react-router-dom';

const BookingTemplate = ({
  visible,
  showModal,
  hideModal,
  reservationInfo,
  setVisible,
  reservationId,
}) => {
  const location = useLocation();

  // url 쿼리 정보
  const query = queryStirng.parse(location.search);

  const { checkInDate, checkoutDate, pricePerDay } = query;

  // 숙박일수 계산
  const nights =
    (new Date(checkoutDate).getTime() - new Date(checkInDate).getTime()) /
    86400000;

  // 서비스 수수료 계산
  const fees = Math.round(pricePerDay * nights * 0.07);

  // 총 가격 계산
  const totalPrice = pricePerDay * nights + 10000 + fees;

  // 체크인과 체크아웃 날짜형태에서 '-' 제거
  const checkInDateArr = checkInDate.split('-');
  const checkoutDateArr = checkoutDate.split('-');

  return (
    <>
      {visible.type === 'date' && visible.state && (
        <Modal>
          <BookingDateEditModal
            hideModal={hideModal}
            setVisible={setVisible}
            checkInDate={checkInDate}
            checkoutDate={checkoutDate}
            totalPrice={totalPrice}
          />
        </Modal>
      )}
      {visible.type === 'guest' && visible.state && (
        <Modal>
          <BookingGuestEditModal
            hideModal={hideModal}
            setVisible={setVisible}
            query={query}
          />
        </Modal>
      )}
      {visible.type === 'edit' && visible.state && (
        <Modal>
          <CommonSuccessModal hideModal={hideModal}>
            수정이 완료되었습니다.
          </CommonSuccessModal>
        </Modal>
      )}
      {visible.type === 'payment' && visible.state && (
        <Modal>
          <CommonSuccessModal hideModal={hideModal}>
            결제가 완료되었습니다.
          </CommonSuccessModal>
        </Modal>
      )}
      {visible.type === 'delete' && visible.state && (
        <Modal>
          <CommonChoiceModal
            hideModal={hideModal}
            reservationId={reservationId}
          >
            예약을 취소하시겠습니까?
          </CommonChoiceModal>
        </Modal>
      )}
      <BookingTitle bookingEdit />
      <main className="max-w-screen-2xl px-32 xl:mx-48 md:mx-0 pb-4.8rem">
        <div className="flex justify-between">
          <div className="w-1/2">
            <BookingBanner reservationInfo={reservationInfo} />
            <BookingBorder />
            <BookingInfo
              bookingEdit
              checkInDateArr={checkInDateArr}
              checkoutDateArr={checkoutDateArr}
              query={query}
              showModal={showModal}
            />
            <BookingBorder />
            <BookingRefundRule
              checkInDateArr={checkInDateArr}
              checkoutDateArr={checkoutDateArr}
            />
            <BookingBorder />
            <BookingButton
              bookingEdit
              showModal={showModal}
              checkInDate={checkInDate}
              checkoutDate={checkoutDate}
              query={query}
              reservationId={reservationId}
            />
          </div>
          <BookingDetailTemplate
            reservationInfo={reservationInfo}
            query={query}
            nights={nights}
            fees={fees}
          />
        </div>
      </main>
    </>
  );
};

export default BookingTemplate;
