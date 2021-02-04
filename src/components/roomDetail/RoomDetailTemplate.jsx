import React from 'react';
import '../../assets/output.css';
import Button from '../common/Button';
import {
  HiChevronRight,
  HiOutlineHeart,
  HiChevronLeft,
  HiHeart,
  HiOutlineX,
} from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
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

const RoomDetailTemplate = () => {
  return (
    <>
      <div className="max-w-screen-2xl mt-32">
        <div className="mx-48 px-32">
          <Title />
          <Photos />
        </div>
        <div className="mx-48 px-32 mt-4.8rem flex justify-between">
          <div className="w-3/5">
            <Introduction />
            <Icons />
            <Description />
            <Beds />
            <CalendarDetail />
          </div>
          <div className="w-1/3 h-full sticky top-10">
            <Payment />
          </div>
        </div>
        <div className="mx-48 px-32">
          <Reviews />
          <Map />
          <Host />
          <ThingsToKnow />
        </div>
      </div>
    </>
  );
};

export default RoomDetailTemplate;
