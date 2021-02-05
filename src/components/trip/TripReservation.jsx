import React from 'react';

const TripReservation = () => {
  return (
    <div className="mt-6">
      <button className="p-6 mr-2 text-1.6rem font-semibold text-gray-500  hover:text-airbnb focus:text-airbnb active:text-airbnb">
        예정된 예약
      </button>
      <button className="p-6 ml-2 text-1.6rem font-semibold text-gray-500  hover:text-airbnb focus:text-airbnb active:text-airbnb">
        이전 예약
      </button>
    </div>
  );
};

export default TripReservation;
