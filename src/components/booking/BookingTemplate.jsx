import React, { useState } from 'react';
import BookingDetailTemplate from './BookingDetailTemplate';
import Modal from '../common/Modal';
import ModalPopup from '../common/ModalPopup';
import BookingTitle from './BookingTitle';

import BookingBanner from './BookingBanner';
import BookingInfo from './BookingInfo';
import BookingRefundRule from './BookingRefundRule';
import BookingButton from './BookingButton';
import BookingBorder from './BookingBorder';

const BookingTemplate = () => {
  return (
    <>
      <BookingTitle />
      <main className="max-w-screen-2xl px-32 mx-48 pb-4.8rem">
        <div className="flex justify-between">
          <div className="w-3/5">
            <BookingBanner />
            <BookingBorder />
            <BookingInfo />
            <BookingBorder />
            <BookingRefundRule />
            <BookingBorder />
            <BookingButton />
          </div>
          <BookingDetailTemplate />
        </div>
      </main>
    </>
  );
};

export default BookingTemplate;
