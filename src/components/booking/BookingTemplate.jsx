import React from 'react';
import BookingDetailTemplate from './BookingDetailTemplate';
import Modal from '../common/Modal';
import BookingTitle from './BookingTitle';
import BookingBanner from './BookingBanner';
import BookingInfo from './BookingInfo';
import BookingRefundRule from './BookingRefundRule';
import BookingButton from './BookingButton';
import BookingBorder from './BookingBorder';
import BookingDateEditModal from './BookingDateEditModal';
import BookingGuestEditModal from './BookingGuestEditModal';
import CommonSuccessModal from '../common/CommonSuccessModal';
import CommonChoiceModal from '../common/CommonChoiceModal';
import queryStirng from 'query-string';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import SimpleHeaderContainer from '../../containers/SimpleHeaderContainer';
import CommonFooter from '../common/CommonFooter';

const BookingTemplate = ({
  visible,
  showModal,
  hideModal,
  reservationInfo,
  setVisible,
  reservationId,
  accommodationInfo, // 예약 진행중인 숙소 정보
}) => {
  const location = useLocation();

  // URL 파라미터를 받아온다 -> payment 또는 modify
  const { subPage } = useParams();

  // url 쿼리 정보
  const query = queryStirng.parse(location.search);
  const { checkInDate, checkoutDate } = query;

  // 숙박일수 계산
  const nights =
    (new Date(checkoutDate).getTime() - new Date(checkInDate).getTime()) /
    86400000;

  // 체크인과 체크아웃 날짜형태에서 '-' 제거
  const checkInDateArr = checkInDate.split('-');
  const checkoutDateArr = checkoutDate.split('-');

  return (
    <>
      {visible.type === 'date' && visible.state && (
        <Modal>
          <BookingDateEditModal
            hideModal={hideModal}
            setVisible={setVisible}
            checkInDate={checkInDate}
            checkoutDate={checkoutDate}
            accommodationInfo={accommodationInfo}
          />
        </Modal>
      )}
      {visible.type === 'guest' && visible.state && (
        <Modal>
          <BookingGuestEditModal
            hideModal={hideModal}
            setVisible={setVisible}
            query={query}
          />
        </Modal>
      )}
      {visible.type === 'edit' && visible.state && (
        <Modal>
          <CommonSuccessModal hideModal={hideModal}>
            {subPage === 'modify'
              ? `수정이 완료되었습니다.`
              : '결제가 완료되었습니다.'}
          </CommonSuccessModal>
        </Modal>
      )}
      {visible.type === 'payment' && visible.state && (
        <Modal>
          <CommonSuccessModal hideModal={hideModal}>
            결제가 완료되었습니다.
          </CommonSuccessModal>
        </Modal>
      )}
      {visible.type === 'delete' && visible.state && (
        <Modal>
          <CommonChoiceModal
            hideModal={hideModal}
            reservationId={reservationId}
          >
            숙소 예약을 취소하시겠습니까?
          </CommonChoiceModal>
        </Modal>
      )}
      <SimpleHeaderContainer />
      <BookingTitle subPage={subPage} query={query} />
      <main className="px-32 xl:mx-48 md:mx-0 pb-4.8rem">
        <div className="flex justify-between">
          <div className="w-1/2">
            <BookingBanner
              reservationInfo={reservationInfo}
              subPage={subPage}
              accommodationInfo={accommodationInfo}
            />
            <BookingBorder />
            <BookingInfo
              checkInDateArr={checkInDateArr}
              checkoutDateArr={checkoutDateArr}
              query={query}
              showModal={showModal}
              subPage={subPage}
            />
            <BookingBorder />
            <BookingRefundRule
              checkInDateArr={checkInDateArr}
              checkoutDateArr={checkoutDateArr}
            />
            <BookingBorder />
            <BookingButton
              subPage={subPage}
              showModal={showModal}
              checkInDate={checkInDate}
              checkoutDate={checkoutDate}
              query={query}
              reservationId={reservationId}
              accommodationInfo={accommodationInfo}
              nights={nights}
            />
          </div>
          <BookingDetailTemplate
            reservationInfo={reservationInfo}
            query={query}
            nights={nights}
            accommodationInfo={accommodationInfo}
            subPage={subPage}
          />
        </div>
      </main>
      <CommonFooter />
    </>
  );
};
export default BookingTemplate;
