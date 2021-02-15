import React, { useEffect, useRef, useState } from 'react';
import TripTemplate from '../components/trip/TripTemplate';

const TripListContainer = () => {
  // 모달창 상태
  const [visible, setVisible] = useState(false);
  const modalElement = useRef(null);

  // 별점 상태
  const [ratings, setRatings] = useState([true, true, true, true, false]);

  // 모달 열기
  const showModal = () => {
    setVisible(true);
    setRatings([true, true, true, true, false]);
  };

  // 모달 숨기기
  const hideModal = modalElement => {
    if (modalElement.target.id !== '1') return;
    setVisible(false);
  };

  // 별점 변경
  const changeRating = id => {
    let newRatings = [...ratings];
    for (let i = 0; i < 5; i++) {
      i <= id ? (newRatings[i] = true) : (newRatings[i] = false);
    }
    setRatings(newRatings);
  };

  return (
    <TripTemplate
      visible={visible}
      hideModal={hideModal}
      showModal={showModal}
      modalElement={modalElement}
      ratings={ratings}
      changeRating={changeRating}
      setRatings={setRatings}
    />
  );
};

export default TripListContainer;
