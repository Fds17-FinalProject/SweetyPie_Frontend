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

const calculateCoord = ({ clientX, clientY }) => {
  
}

const MapPopup = ({ img, accomm, coord }) => {
  console.log('MAP POPUP!!!!',coord.clientX, coord.clientY);
  let x;
  let y;
  if (coord.clientX < 1025 && coord.clientY < 510) {
    console.log('오른쪽으로 띄우기');
    // 오른쪽으로 띄우기
    x = '45px';
    y = '-25px';
  } else if (1100 < coord.clientX && coord.clientX < 1100 && coord.clientY < 510) {
    console.log('아래로 띄우기');
    // 아래로 띄우기
    x = '-20px'
    y = '30px';
  } else if (1100 < coord.clientX && coord.clientX < 1440 && coord.clientY < 510) {
    console.log('왼쪽으로 띄우기');
    // 왼쪽으로 띄우기
    x = '-280px'
    y = '10px';
  } else if (coord.clientX < 1170 &&  510 < coord.clientY && coord.clientY < 740) {
    x = '10px';
    y = '-320px';
  } else if (1315 < coord.clientX &&  coord.clientX < 1440 &&  510 < coord.clientY && coord.clientY < 740) {
    x = '-200px';
    y = '-200px';
  }
  // } else if (coord.clientX < 1173 && coord.clientY > 512) {
  //   x = '45px'
  //   y = '-100px';
  // } else if (coord.clientX > 1173 && coord.clientY > 512) {
  //   x = '-200px'
  //   y = '-200px';
  // }
  console.log(x, y);
  return (
    // <div className="h-28rem truncate mt-8 rounded-2xl absolute z-10" style={{ width: '275px'}}>
     <MapContainer style={{left: x, top: y}}> 
      <Carousel size="Medium" img={img} />
      <div className="text-1.4rem p-8 bg-white">
        <AiFillStar size={20} style={{ fill: '#FF385C' }} className="inline-block"/>
        <span className="text-#222">{accomm.rating}</span>
        <span className="text-#717171">({accomm.reviewNum})</span>
        <div className="ml-2">
          <div className="text-#717171 my-1">{accomm.buildingType} {accomm.accommodationType}</div>
          <div className="w-15rem truncate text-#222">{ accomm.title}</div>
        </div>
      </div>
       </MapContainer> 
    //  </div>
  );
};

export default React.memo(MapPopup);