import React from 'react';
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

const RoomDetailTemplate = ({ accommodation, loading }) => {
  const {
    city,
    gu,
    address,
    title,
    bathroomNum,
    bedroomNum,
    bedNum,
    capacity,
    price,
    contact,
    latitude,
    longitude,
    locationDesc,
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
    bookedDates,
    accommodationPictures,
  } = accommodation;
  // const ratingRoundUp = rating.toFixed(2);

  return (
    <>
      <RoomDetailHeader />
      {loading === false && (
        <div className="max-w-screen-2xl mt-32">
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
            <ThingsToKnow />
          </div>
        </div>
      )}
    </>
  );
};

export default RoomDetailTemplate;
