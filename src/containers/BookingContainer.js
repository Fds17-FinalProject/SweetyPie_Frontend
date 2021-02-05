import React, { useRef, useState } from 'react';
import BookingTemplate from '../components/booking/BookingTemplate';

const BookingContainer = () => {
  // 모달창 상태
  const [visible, setVisible] = useState(false);
  const modalElement = useRef(null);

  // 모달 열기
  const showModal = () => {
    setVisible(true);
  };

  // 모달 숨기기
  const hideModal = modalElement => {
    if (modalElement.target.id !== '1') return;
    setVisible(false);
  };
  return (
    <BookingTemplate
      visible={visible}
      showModal={showModal}
      hideModal={hideModal}
      modalElement={modalElement}
    />
  );
};

export default BookingContainer;
