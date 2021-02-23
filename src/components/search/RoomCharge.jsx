import React from "react";
import { Grid, Typography } from "@material-ui/core";

import RangeSlider from "./RangeSlider";
import { useSelector } from 'react-redux';

// const prices = [];
// for (let i = 0; i < 200; i++) {
//   prices.push(Math.floor(Math.random() * 80) + 1);
// }
// console.log(prices); // 찍힌다 


const RoomCharge = () => {
  const prices = [];
  const accommodation = useSelector(state => state.accommodations.accommodations);
  const price = accommodation.map(accomm => {
    prices.push(accomm.price);
    prices.push(accomm.price);
    prices.push(accomm.price);
    prices.push(accomm.price);
    prices.push(accomm.price);
    prices.push(accomm.price);
  });
   console.log(prices); // 디스트럭처링 이후 무한루프에 빠지는거 같다

  return (
    <div style={{  width: '400px', height: '180px'}}>
      <div>
        <div style={{ textAlign: "center" }}>
        </div>
        <div>
          <RangeSlider data={prices} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(RoomCharge);