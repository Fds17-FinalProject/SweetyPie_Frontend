import React from 'react';
import BookingRoomInfo from './BookingRoomInfo';
import BookingPaymentInfo from './BookingPaymentInfo';
import BookingBorder from './BookingBorder';

const BookingDetailTemplate = ({ reservationInfo, query, nights, fees }) => {
  const { totalPrice, pricePerDay } = query;

  return (
    <section className="sticky top-20 w-2/5 ml-10% h-full p-10 border rounded-2xl">
      <BookingRoomInfo reservationInfo={reservationInfo} />
      <BookingBorder />
      <BookingPaymentInfo
        totalPrice={totalPrice}
        pricePerDay={pricePerDay}
        nights={nights}
        fees={fees}
      />
    </section>
  );
};

export default BookingDetailTemplate;
