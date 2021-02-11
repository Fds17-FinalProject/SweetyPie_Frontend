import React from 'react';
import TripReservation from './TripReservation';
import TripCard from './TripCard';
import { useLocation } from 'react-router-dom';
import queryStirng from 'query-string';

const TripTemplate = ({ loading, pastReservations, upcomingReservations }) => {
  // 쿼리 스트링으로 어떤 tab인지 확인
  const location = useLocation();
  const { tab } = queryStirng.parse(location.search);

  return (
    <div className="max-w-screen-2xl mt-3.6rem px-32 pb-6.5rem">
      <section>
        <h1 className="text-3.2rem mb-10 pl-6 font-semibold">예약 내역</h1>
        <TripReservation />
        <div className="max-w-screen-2xl mx-6 h-0.5 border-t"></div>

        {/* 예정된 예약이 없다면 보여줄 화면 */}
        {upcomingReservations.length === 0 && tab !== 'past' && (
          <div className="py-96">
            <p className="text-2.4rem text-center font-semibold">
              예정된 여행이 없습니다.
            </p>
          </div>
        )}

        <ul className="flex flex-wrap justify-start items-center content-center">
          {/* 예정된 예약 */}
          {tab !== 'past' &&
            loading === false &&
            upcomingReservations.map(upcomingReservation => (
              <TripCard
                key={upcomingReservation.reservationId}
                tab={tab}
                reservations={{ ...upcomingReservation }}
              />
            ))}

          {/* 이전 예약 */}
          {tab === 'past' &&
            loading === false &&
            pastReservations.map(pastReservation => (
              <TripCard
                key={pastReservation.reservationId}
                tab={tab}
                reservations={{ ...pastReservation }}
              />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default TripTemplate;
