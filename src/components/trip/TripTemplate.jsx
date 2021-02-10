import React from 'react';
import TripReservation from './TripReservation';
import TripCard from './TripCard';
import Modal from '../common/Modal';
import TripReviewModal from './TripReviewModal';
import { useLocation } from 'react-router-dom';
import queryStirng from 'query-string';

const TripTemplate = ({
  visible,
  showModal,
  hideModal,
  ratings,
  changeRating,
  loading,
  pastReservations,
  upcomingReservations,
}) => {
  // 쿼리 스트링으로 어떤 tab인지 확인
  const location = useLocation();
  const { tab } = queryStirng.parse(location.search);

  return (
    <div className="max-w-screen-2xl mt-3.6rem px-32 pb-6.5rem">
      {visible && (
        <Modal>
          <TripReviewModal
            hideModal={hideModal}
            ratings={ratings}
            changeRating={changeRating}
          />
        </Modal>
      )}
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
                key={upcomingReservation.accommodationId}
                accomodationPicture={
                  upcomingReservation.accommodationPicture.url
                }
                checkInDate={upcomingReservation.checkInDate}
                checkoutDate={upcomingReservation.checkoutDate}
                city={upcomingReservation.city}
                gu={upcomingReservation.gu}
                title={upcomingReservation.title}
                showModal={showModal}
                hideModal={hideModal}
                tab={tab}
              />
            ))}

          {/* 이전 예약 */}
          {tab === 'past' &&
            loading === false &&
            pastReservations.map(pastReservation => (
              <TripCard
                key={pastReservation.accommodationId}
                accomodationPicture={pastReservation.accommodationPicture.url}
                checkInDate={pastReservation.checkInDate}
                checkoutDate={pastReservation.checkoutDate}
                city={pastReservation.city}
                gu={pastReservation.gu}
                title={pastReservation.title}
                isWrittenReview={pastReservation.isWrittenReview}
                showModal={showModal}
                hideModal={hideModal}
                tab={tab}
              />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default TripTemplate;
