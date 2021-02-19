import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal';
import TripReviewPostModal from './TripReviewPostModal';
import TripReviewGetModal from './TripReviewGetModal';
import {
  readReview,
  postReview,
  deleteReview,
} from '../../redux/lib/api/review';
const TripCard = ({ reservations, tab, reviewStatus, setReviewStatus }) => {
  // 예약 숙소 정보
  const {
    memberId,
    accommodationId,
    reservationId,
    checkInDate,
    checkoutDate,
    hostName,
    isWrittenReview,
    city,
    gu,
    title,
    accommodationPicture,
    totalGuestNum,
    adultNum,
    childNum,
    infantNum,
    totalPrice,
    pricePerDay,
  } = reservations;

  // 작성된 리뷰 GET 한 상태
  const [review, setReview] = useState({
    ratings: null,
    content: '',
  });

  // 리뷰 작성 모달창 상태
  const [visible, setVisible] = useState(false);

  // 리뷰 보기 모달창 상태
  const [revVisible, setRevVisible] = useState(false);

  // 별점 상태
  const [ratings, setRatings] = useState([true, true, true, true, false]);

  // 리뷰 작성 모달 열기
  const showModal = () => {
    setVisible(true);
    setRatings([true, true, true, true, false]);
  };

  // 리뷰 보기 모달 열기
  const showRevModal = async reservationId => {
    setRevVisible(true);
    const response = await readReview(reservationId);
    const reviewData = await response.data;
    console.log(reviewData);
    setReview({
      ...review,
      ratings: reviewData.rating,
      content: reviewData.content,
    });
  };

  // 리뷰 삭제용
  const removeReview = () => {
    deleteReview();
  };

  // 리뷰 작성 모달 숨기기
  const hideModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible(false);
    }
  };

  // 리뷰 보기 모달 숨기기
  const hideRevModal = ({ target }) => {
    if (target.dataset.name) {
      setRevVisible(false);
    }
  };

  // 별점 변경
  const changeRating = id => {
    let newRatings = [...ratings];
    for (let i = 0; i < 5; i++) {
      i <= id ? (newRatings[i] = true) : (newRatings[i] = false);
    }
    setRatings(newRatings);
  };

  // 리뷰 쓰기 요청 POST
  const postingReview = async ({
    e,
    memberId,
    accommodationId,
    reservationId,
    rating,
    content,
  }) => {
    await postReview({
      memberId,
      accommodationId,
      reservationId,
      rating,
      content,
    });
    if (e.target.dataset.name) {
      setVisible(false);
    }
    setReviewStatus(!reviewStatus);
  };
  return (
    <>
      {visible && (
        <Modal>
          <TripReviewPostModal
            accommodationId={accommodationId}
            hideModal={hideModal}
            ratings={ratings}
            changeRating={changeRating}
            reservationId={reservationId}
            postingReview={postingReview}
            hostName={hostName}
          />
        </Modal>
      )}
      {revVisible && (
        <Modal>
          <TripReviewGetModal
            review={review}
            hideRevModal={hideRevModal}
            hostName={hostName}
          />
        </Modal>
      )}
      <li className="px-6 w-1/3">
        <div className="mt-6 mb-8 rounded-2xl shadow-before hover:transition-shadow hover:shadow-after">
          <Link to={`/accommodation/${accommodationId}`}>
            <div>
              <img
                src={accommodationPicture.url}
                alt="#"
                className="h-72 w-full rounded-t-2xl object-cover"
              />
            </div>
          </Link>
          <div className="flex flex-col flex-grow mt-10">
            <div className="text-1.2rem text-#717171 px-10">
              {`${checkInDate} - ${checkoutDate}`}
            </div>
            <p className="text-2.2rem font-semibold my-2 px-10 truncate">
              {gu && `${gu}`} {city && `, ${city}`}
            </p>
            <div className="mt-2 flex flex-col flex-1">
              <div className="flex flex-row items-center h-24 px-10">
                <img
                  src={accommodationPicture.url}
                  alt="#"
                  className="h-16 w-16 rounded-xl mr-6"
                />
                <p className="text-1.4rem truncate flex-1">{title}</p>
              </div>
              {tab === 'past' && isWrittenReview ? (
                <div
                  // 리뷰 삭제용
                  // onClick={removeReview}
                  onClick={() => showRevModal(reservationId)}
                  className="text-1.4rem h-24 flex flex-row items-center rounded-b-2xl justify-center border-t border-gray-300 font-semibold cursor-pointer hover:transition-all hover:bg-#f7f7f7"
                >
                  내 리뷰 보기
                </div>
              ) : tab === 'past' && !isWrittenReview ? (
                <div
                  onClick={showModal}
                  className="text-1.4rem h-24 flex flex-row items-center rounded-b-2xl justify-center border-t border-gray-300 font-semibold cursor-pointer hover:transition-all hover:bg-#f7f7f7"
                >
                  리뷰 쓰기
                </div>
              ) : (
                <Link
                  to={`/booking/modify?reservationId=${reservationId}&checkInDate=${checkInDate}&checkoutDate=${checkoutDate}&totalGuestNum=${totalGuestNum}&adultNum=${adultNum}&childNum=${childNum}&infantNum=${infantNum}&totalPrice=${totalPrice}&pricePerDay=${pricePerDay}`}
                >
                  <div className="text-1.4rem h-24 flex flex-row items-center rounded-b-2xl justify-center border-t border-gray-300 font-semibold cursor-pointer hover:transition-all hover:bg-#f7f7f7">
                    예약 변경 또는 취소
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default TripCard;
