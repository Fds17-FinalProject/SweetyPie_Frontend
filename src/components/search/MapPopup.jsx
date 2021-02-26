import React from 'react';
import Carousel from '../common/Carousel';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const MapContainer = styled.div`
  width: 275px;
  height: 280px;
  border-radius: 1rem;
  margin-top: 20px;
  position: absolute;
  z-index: 10;
`;
const MapPopup = ({ img, accomm, coord, accommId }) => {
  console.log(coord);
  let x;
  let y;
  if (
    860 < coord.clientX &&
    coord.clientX < 1147 &&
    110 < coord.clientY &&
    coord.clientY < 407
  ) {
    x = '20px';
    y = '20px';
  } else if (
    1147 < coord.clientX &&
    coord.clientX < 1520 &&
    110 < coord.clientY &&
    coord.clientY < 407
  ) {
    x = '-280px';
    y = '-50px';
  } else if (
    860 < coord.clientX &&
    coord.clientX < 1147 &&
    407 < coord.clientY &&
    coord.clientY < 800
  ) {
    x = '40px';
    y = '-280px';
  } else if (
    1147 < coord.clientX &&
    coord.clientX < 1520 &&
    407 < coord.clientY &&
    coord.clientY < 800
  ) {
    x = '-280px';
    y = '-260px';
  }
  return (
    <Link to={`accommodation/${accommId}`}>
      <MapContainer
        style={{ left: x, top: y }}
        className="w-27.5rem h-28rem truncate mt-8 rounded-2xl absolute z-10">
        <Carousel size="Medium" img={img} />
        <div className="text-1.4rem p-8 bg-white">
          <AiFillStar
            size={20}
            style={{ fill: '#FF385C' }}
            className="inline-block"
          />
          <span className="text-#222">{accomm.rating}</span>
          <span className="text-#717171">({accomm.reviewNum})</span>
          <div className="ml-2">
            <div className="text-#717171 my-1">
              {accomm.buildingType} {accomm.accommodationType}
            </div>
            <div className="w-15rem truncate text-#222">{accomm.title}</div>
          </div>
        </div>
      </MapContainer>
    </Link>
  );
};
export default React.memo(MapPopup);