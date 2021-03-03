import React from 'react';
import Carousel from '../common/Carousel';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const RecentSearch = (props) => {
  const { 
    id,
    title,
    accommodationPictures,
    accommodationType,
    buildingType,
    rating,
    reviewNum,
  } = props;
  return (
    <Link
      to={`/accommodation/${id}`}
      className="w-14.5rem h-17.3rem truncate mt-8 mx-3 pb-4 inline-block shadow-lg rounded-b-xl">
        <Carousel size="small" img={accommodationPictures} />
          <div className="text-1.4rem p-4">
            <AiFillStar size={20} fill={'#FF385C'} className="inline-block"/>
            <span >{rating}</span>
          <span className="text-#717171">({reviewNum})</span>
          <div className="ml-2">
            <div>{buildingType} {accommodationType}</div>
            <div className="w-9.5rem truncate">{title}</div>
          </div>
        </div>
    </Link>
  );
};
export default RecentSearch;
