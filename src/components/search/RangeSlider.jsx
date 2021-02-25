import React, { useState } from 'react';
import { Grid, Button, TextField, InputAdornment } from '@material-ui/core';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { MuiRail, MuiHandle, MuiTrack } from './Components';
import BarChart from './BarChart';

const RangeSlider = ({ data, inputValues, setInputValues }) => {
  // const sortedData = props.data.slice().sort((a, b) => a - b);

  const range = [data[0], data[data.length - 1]];

  const [domain, setDomain] = useState([0, 250000]);
  const [update, setUpdate] = useState(range);
  const [values, setValues] = useState(range);
  // const [inputValues, setInputValues] = useState([0, '250000+']);

  return (
    <div className="w-36rem h-6.4rem">
      <Grid item xs={12}>
        <div style={{ margin: '10%', height: 120, width: '80%' }}>
          <BarChart data={data} highlight={update} domain={domain} />
          <Slider
            mode={3}
            step={1}
            domain={domain}
            rootStyle={{
              position: 'relative',
              width: '100%',
            }}
            onUpdate={update => {
              setUpdate(update);
              setInputValues(update);
            }}
            onChange={values => setValues(values)}
            values={values}
          >
            <Rail>
              {({ getRailProps }) => <MuiRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map(handle => (
                    <MuiHandle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <MuiTrack
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
          </Slider>
          <Grid
            container
            alignItems="center"
            justify="space-around"
            style={{ marginTop: '20px' }}
          >
            <Grid
              item
              xs={4}
              style={{ textAlign: 'right', marginRight: '10px' }}
            >
              <TextField
                variant="outlined"
                label="최저 요금"
                value={inputValues[0]}
                onChange={evt => {
                  const value = evt.target.value;
                  const newState = [value, inputValues[1]];
                  setInputValues(newState);
                  if (value && value >= domain[0]) {
                    setValues(newState);
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" style={{ fontSize: '16' }}>
                      ₩
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={4} style={{ textAlign: 'left' }}>
              <TextField
                variant="outlined"
                label="최대 요금"
                value={inputValues[1]}
                onChange={evt => {
                  const value = evt.target.value;
                  const newState = [inputValues[0], value];
                  setInputValues(newState);
                  if (value && value <= domain[1] && value >= values[0]) {
                    setValues(newState);
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₩</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            style={{ marginTop: '3%', marginBottom: '3%' }}
            onClick={() => {
              setValues(domain);
              setUpdate(domain);
              setInputValues(domain);
            }}
          ></Button>
        </div>
      </Grid>
    </div>
  );
};

export default React.memo(RangeSlider);
