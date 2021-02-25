import React from 'react';
import { Link } from 'react-router-dom';

const TripReservation = () => {
  return (
    <div className="flex">
      <Link
        className="p-6 mr-2 text-1.6rem font-semibold text-gray-500  hover:text-airbnb focus:text-airbnb active:text-airbnb"
        to="/reservation?tab=upcoming"
      >
        예정된 예약
      </Link>
      <Link
        className="p-6 ml-2 text-1.6rem font-semibold text-gray-500  hover:text-airbnb focus:text-airbnb active:text-airbnb"
        to="/reservation?tab=past"
      >
        이전 예약
      </Link>
    </div>
  );
};

export default TripReservation;
