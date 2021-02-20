import React from 'react';
import BookingRoomInfo from './BookingRoomInfo';
import BookingPaymentInfo from './BookingPaymentInfo';
import BookingBorder from './BookingBorder';

const BookingDetailTemplate = ({
  reservationInfo,
  query,
  nights,
  accommodationInfo,
  subPage,
}) => {
  return (
    <section className="sticky top-20 w-2/5 ml-10% h-full p-10 border rounded-2xl">
      <BookingRoomInfo
        reservationInfo={reservationInfo}
        accommodationInfo={accommodationInfo}
        subPage={subPage}
      />
      <BookingBorder />
      <BookingPaymentInfo
        nights={nights}
        subPage={subPage}
        query={query}
        accommodationInfo={accommodationInfo}
      />
    </section>
  );
};
export default BookingDetailTemplate;
