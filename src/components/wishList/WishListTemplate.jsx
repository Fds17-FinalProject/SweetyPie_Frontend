import React from 'react';
import WishListCard from './WishListCard';

const WishListTemplate = () => {
  return (
    <div className="max-w-screen-2xl mt-3.6rem px-32 pb-6.5rem">
      <section>
        <h1 className="text-3.2rem mb-10 pl-6 font-semibold">저장 목록</h1>
        <div className="max-w-screen-2xl mx-6 h-0.5 border-t"></div>
        <ul className="flex flex-wrap justify-start items-center content-center">
          <WishListCard
          // key={upcomingReservation.reservationId}
          // tab={tab}
          // reservations={{ ...upcomingReservation }}
          />
        </ul>
      </section>
    </div>
  );
};

export default WishListTemplate;
