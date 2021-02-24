import React from 'react';
import Carousel from '../common/Carousel';
import { AiFillStar } from 'react-icons/ai';

const RecentSearch = (props) => {
  const { 
    title,
    accommodationPictures,
    accommodationType,
    buildingType,
    rating,
    reviewNum,
  } = props;
  return (
    <div className="w-14.5rem h-17.3rem truncate mt-8 mx-3 pb-4">
        <Carousel size="small" img={accommodationPictures} />
          <div className="text-1.4rem mt-2">
            <AiFillStar size={20} fill={'#FF385C'} className="inline-block"/>
            <span >{rating}</span>
          <span className="text-#717171">({reviewNum})</span>
          <div className="ml-2">
            <div>{buildingType} {accommodationType}</div>
            <div className="w-14rem truncate">{title}</div>
          </div>
        </div>
    </div>
  );
};
export default RecentSearch;
