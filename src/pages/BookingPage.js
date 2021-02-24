import React from 'react';
import BookingContainer from '../containers/BookingContainer';
import { Helmet } from 'react-helmet-async';

const bookingPage = () => {
  return (
    <>
      <Helmet>
        <title>예약 | SweetyPie💛</title>
      </Helmet>
      <div>
        <BookingContainer />
      </div>
    </>
  );
};

export default bookingPage;
