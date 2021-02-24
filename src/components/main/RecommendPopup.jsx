import React from 'react';
import Carousel from '../common/Carousel';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 275px;
  height: 280px;
  border-radius: 1rem;
  margin-top: 20px;
  position: absolute;
  z-index: 10;
`;

const RecommendPopup = ({ img, accomm }) => {
  const { rating, reviewNum, buildingType, accommodationType, title } = accomm;
  return (
    // <div className="h-28rem truncate mt-8 rounded-2xl absolute z-10" style={{ width: '275px'}}>
     <MapContainer > 
      <Carousel size="Medium" img={img} />
      <div className="text-1.4rem p-8 bg-white">
        <AiFillStar size={20} style={{ fill: '#FF385C' }} className="inline-block"/>
        <span className="text-#222">{rating}</span>
        <span className="text-#717171">({reviewNum})</span>
        <div className="ml-2">
          <div className="text-#717171 my-1">{buildingType} {accommodationType}</div>
          <div className="w-15rem truncate text-#222">{title}</div>
        </div>
      </div>
       </MapContainer> 
    //  </div>
  );
};

export default React.memo(RecommendPopup);