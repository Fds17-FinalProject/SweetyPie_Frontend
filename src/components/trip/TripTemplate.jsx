import React from 'react';
import TripReservation from './TripReservation';
import TripCard from './TripCard';
import Modal from '../common/Modal';
import TripReviewModal from './TripReviewModal';

const TripTemplate = ({
  visible,
  showModal,
  hideModal,
  modalElement,
  ratings,
  changeRating
}) => {
  return (
    <div className="max-w-screen-2xl mt-3.6rem px-32 pb-6.5rem">
      {visible && (
        <Modal>
          <TripReviewModal
            hideModal={hideModal}
            modalElement={modalElement}
            ratings={ratings}
            changeRating={changeRating}
          />
        </Modal>
      )}
      <section>
        <h1 className="text-3.2rem mb-10 pl-6 font-semibold">예약 내역</h1>
        <TripReservation />
        <div className="max-w-screen-2xl mx-6 h-0.5 border-t"></div>
        <ul className="flex flex-wrap justify-start items-center content-center">
          <TripCard
            accomodationPicture="https://a0.muscache.com/im/pictures/6c9695a8-5ad0-4334-b676-11c9409e65d4.jpg?im_w=720"
            checkInDate="2021년 1월 18일"
            checkoutDate="2021년 1월 23일"
            gu="Mapo-gu"
            title="N#Family tour#Whole house#자가격리#홍대"
            showModal={showModal}
            hideModal={hideModal}
          />
          <TripCard
            accomodationPicture="https://a0.muscache.com/im/pictures/a8e5a51b-bb25-4bc6-b8e2-5a128d38e918.jpg?im_w=720"
            checkInDate="2020년 2월 15일"
            checkoutDate="2020년 2월 16일"
            gu="강남구"
            title="GK's #D5O SPACIOUS, COZY 1 min. to Gangnam STN #1"
            showModal={showModal}
            hideModal={hideModal}
          />
          <TripCard
            accomodationPicture="https://a0.muscache.com/im/pictures/87983126-1bb7-464b-9d35-74ca08c15067.jpg?im_w=720"
            checkInDate="2019년 10월 28일"
            checkoutDate="2019년 10월 29일"
            city="Yongin-si"
            gu="Giheung-gu"
            title="7.고양이차차네하숙ㅡ여성전용 4인실ㅡ경희대국제캠퍼스사색의광장도보5분ㅡ제2기숙사"
            showModal={showModal}
            hideModal={hideModal}
          />
        </ul>
      </section>
    </div>
  );
};

export default TripTemplate;
