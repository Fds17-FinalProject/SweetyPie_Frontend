import React, { useState, useEffect } from 'react';
import '../../assets/output.css';
import Photos from './Photos';
import Introduction from './Introduction';
import Title from './Title';
import Icons from './Icons';
import Description from './Description';
import CalendarDetail from './CalendarDetail';
import Payment from './Payment';
import Beds from './Beds';
import Reviews from './Reviews';
import Map from './Map';
import Host from './Host';
import ThingsToKnow from './ThingsToKnow';
import RoomDetailHeader from './RoomDetailHeader';
import Modal from '../common/Modal';
import RoomDetailSafetyModal from './RoomDetailSafetyModal';
import RoomDetailGuestEditModal from './RoomDetailGuestEditModal';
import qs from 'qs';

const RoomDetailTemplate = ({ accommodation, loading }) => {
  const {
    gu,
    address,
    title,
    bathroomNum,
    bedroomNum,
    bedNum,
    capacity,
    price,
    latitude,
    longitude,
    transportationDesc,
    accommodationDesc,
    rating,
    reviewNum,
    accommodationType,
    buildingType,
    hostName,
    hostDesc,
    hostReviewNum,
    reviews,
    accommodationPictures,
  } = accommodation;

  const [visible, setVisible] = useState({
    state: false,
    type: null,
  });

  // 타입에 맞는 모달창을 보여줌
  const onShowModal = type =>
    setVisible({
      ...visible,
      state: true,
      type,
    });

  // 타입에 맞는 모달창을 닫음
  const onCloseModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible({
        ...visible,
        state: false,
      });
    }
  };

  // 모달창 팝업시 body 스크롤 방지
  useEffect(() => {
    if (visible.state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visible.state]);

  return (
    <>
      {visible.type === 'safety' && visible.state && (
        <RoomDetailSafetyModal onCloseModal={onCloseModal} />
      )}
      {/* {visible.type === 'refund' && visible.state && (
        <RoomDetailRefundModal onCloseModal={onCloseModal} />
      )} */}
      {/* {visible.type === 'review' && visible.state && (
        <RoomDetailReviewModal onCloseModal={onCloseModal} />
      )} */}
      {/* {visible.type === 'date' && visible.state && (
          <RoomDetailDateEditModal onCloseModal={onCloseModal} />
      )} */}
      {visible.type === 'guest' && visible.state && (
        <RoomDetailGuestEditModal onCloseModal={onCloseModal} />
      )}
      <RoomDetailHeader />
      {loading === false && (
        <div className="max-w-screen-2xl mt-32" id="photos">
          <div className="mx-48 px-32">
            <Title
              title={title}
              rating={rating}
              reviewNum={reviewNum}
              address={address}
            />
            <Photos accommodationPictures={accommodationPictures} />
          </div>
          <div className="mx-48 px-32 mt-4.8rem flex justify-between">
            <div className="w-3/5">
              <Introduction
                hostName={hostName}
                buildingType={buildingType}
                capacity={capacity}
                bedroomNum={bedroomNum}
                bedNum={bedNum}
                bathroomNum={bathroomNum}
              />
              <Icons
                accommodationType={accommodationType}
                buildingType={buildingType}
              />
              <Description accommodationDesc={accommodationDesc} />
              <Beds bedroomNum={bedroomNum} bedNum={bedNum} />
              <CalendarDetail gu={gu} />
            </div>
            <div className="w-1/3 h-full sticky top-44">
              <Payment rating={rating} reviewNum={reviewNum} price={price} />
            </div>
          </div>
          <div className="mx-48 px-32">
            <Reviews rating={rating} reviewNum={reviewNum} reviews={reviews} />
            <Map
              address={address}
              latitude={latitude}
              longitude={longitude}
              transportationDesc={transportationDesc}
            />
            <Host
              hostName={hostName}
              hostDesc={hostDesc}
              hostReviewNum={hostReviewNum}
            />
            <ThingsToKnow onShowModal={onShowModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default RoomDetailTemplate;
