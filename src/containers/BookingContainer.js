import React, { useCallback, useRef, useState } from 'react';
import BookingTemplate from '../components/booking/BookingTemplate';

const BookingContainer = () => {
  // 모달창 상태
  const [visible, setVisible] = useState(false);
  const [visibleGuest, setVisibleGuest] = useState(false);

  // 날짜 모달 열기
  const showModal = () => {
    setVisible(true);
  };

  // 날짜 모달 숨기기
  const hideModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible(false);
    }
  };

  // 게스트 모달 열기
  const showGuestModal = () => {
    setVisibleGuest(true);
  };

  // 게스트 모달 닫기
  const hideGuestModal = ({ target }) => {
    if (target.dataset.name) {
      setVisibleGuest(false);
    }
  };

  const [date, setDate] = useState({
    checkinDate: null,
    checkoutDate: null,
  });

  return (
    <BookingTemplate
      visible={visible}
      visibleGuest={visibleGuest}
      showModal={showModal}
      hideModal={hideModal}
      showGuestModal={showGuestModal}
      hideGuestModal={hideGuestModal}
      date={date}
      setDate={setDate}
    />
  );
};

export default BookingContainer;
