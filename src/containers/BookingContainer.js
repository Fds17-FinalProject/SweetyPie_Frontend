import React, { useCallback, useRef, useState } from 'react';
import BookingTemplate from '../components/booking/BookingTemplate';

const BookingContainer = () => {
  // 모달창 상태
  const [visible, setVisible] = useState({
    state: false,
    type: null,
  });

  // 모달 열기
  const showModal = type => {
    setVisible({ ...visible, state: true, type });
  };

  // 모달 숨기기
  const hideModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible({ ...visible, state: false });
    }
  };

  // 모달 숨기기 + 데이터 변경
  const confirmModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible({ ...visible, state: false });
    }
  };

  return (
    <BookingTemplate
      visible={visible}
      showModal={showModal}
      hideModal={hideModal}
      confirmModal={confirmModal}
    />
  );
};

export default BookingContainer;
