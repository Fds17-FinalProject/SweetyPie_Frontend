import React from 'react';
import BookingRoomInfo from './BookingRoomInfo';
import BookingPaymentInfo from './BookingPaymentInfo';
import BookingBorder from './BookingBorder';

const BookingDetailTemplate = () => {
  return (
    <section className="sticky top-20 w-1/3 h-full p-10 border rounded-2xl">
      <BookingRoomInfo />
      <BookingBorder />
      <BookingPaymentInfo />
    </section>
  );
};

export default BookingDetailTemplate;
