import React, { useState } from 'react';
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

const BookingTemplate = ({ visible, showModal, hideModal, confirmModal }) => {
  return (
    <>
      {visible.type === 'date' && visible.state && (
        <Modal>
          <BookingDateEditModal hideModal={hideModal} />
        </Modal>
      )}
      {visible.type === 'guest' && visible.state && (
        <Modal>
          <BookingGuestEditModal hideModal={hideModal} />
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
          <CommonChoiceModal hideModal={hideModal} confirmModal={confirmModal}>
            예약을 취소하시겠습니까?
          </CommonChoiceModal>
        </Modal>
      )}
      <BookingTitle bookingEdit />
      <main className="max-w-screen-2xl px-32 mx-48 pb-4.8rem">
        <div className="flex justify-between">
          <div className="w-3/5">
            <BookingBanner />
            <BookingBorder />
            <BookingInfo
              checkInDate="2021.3.16"
              checkoutDate="2021.3.21"
              guestNum="1"
              bookingEdit
              showModal={showModal}
            />
            <BookingBorder />
            <BookingRefundRule
              checkInDate="2021.3.16"
              checkoutDate="2021.3.21"
            />
            <BookingBorder />
            <BookingButton
              bookingEdit
              showModal={showModal}
              confirmModal={confirmModal}
            />
          </div>
          <BookingDetailTemplate />
        </div>
      </main>
    </>
  );
};

export default BookingTemplate;
