import React from "react";
import { Grid, Typography } from "@material-ui/core";

import RangeSlider from "./RangeSlider";

const prices = [];
for (let i = 0; i < 300; i++) {
  prices.push(Math.floor(Math.random() * 80) + 1);
}

function RoomCharge() {
  return (
    <div style={{  width: '400px', height: '180px'}}>
    <div  >
      <div style={{ textAlign: "center" }}>
        {/* <Typography variant="h5">A Range Slider with Histogram</Typography>
        <Typography variant="subtitle2">
          built using{" "}
          <a href="https://github.com/sghall/react-compound-slider">
            React Compound Slider
          </a>
          ,{" "}
          <a href="https://github.com/jerairrest/react-chartjs-2">
            react chartjs 2
          </a>
          , and <a href="https://material-ui.com/">Material UI</a>
        </Typography> */}
      </div>
        <div>
        <RangeSlider data={prices} />
      </div>
      </div>



      {/* <Grid container justify="center" >
      <Grid item xs={12} style={{ textAlign: "center" }}>
      </Grid>
      <Grid item xs={12} lg={8}>
        <RangeSlider data={prices} style={{ width: '440px', height: '330px' }} />
      </Grid>
      </Grid> */}
      </div>
  );
}

export default RoomCharge;