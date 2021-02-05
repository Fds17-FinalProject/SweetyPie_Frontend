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

const BookingTemplate = ({ visible, showModal, hideModal, modalElement }) => {
  return (
    <>
      {visible && (
        <Modal>
          <BookingDateEditModal
            hideModal={hideModal}
            modalElement={modalElement}
          />
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
            <BookingButton bookingEdit />
          </div>
          <BookingDetailTemplate />
        </div>
      </main>
    </>
  );
};

export default BookingTemplate;
