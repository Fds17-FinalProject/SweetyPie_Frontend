import React from "react";
import { Grid, Button, TextField, InputAdornment } from "@material-ui/core";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { MuiRail, MuiHandle, MuiTrack, MuiTick } from "./components";
import BarChart from "./BarChart";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    const sortedData = props.data.slice().sort((a, b) => a - b);
    const range = [sortedData[0], sortedData[sortedData.length - 1]];

    this.state = {
      domain: range,
      update: range,
      values: range,
      inputValues: range
    };
  }

  render() {
    const { domain, values, update, inputValues } = this.state;

    return (
      <div className="w-36rem h-6.4rem">
        <Grid item xs={12}>
          <div style={{ margin: "10%", height: 120, width: "80%" }}>
            <BarChart
              data={this.props.data}
              highlight={update}
              domain={domain}
            />
            <Slider
              mode={3}
              step={1}
              domain={domain}
              rootStyle={{
                position: "relative",
                width: "100%"
              }}
              onUpdate={update =>
                this.setState({ update, inputValues: update })
              }
              onChange={values => this.setState({ values })}
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
              {/* <Ticks count={5}>
                {({ ticks }) => (
                  <div className="slider-ticks">
                    {ticks.map(tick => (
                      <MuiTick key={tick.id} tick={tick} count={ticks.length} />
                    ))}
                  </div>
                )}
              </Ticks> */}
            </Slider>
            <Grid
              container
              alignItems="center"
              justify="space-around"
              style={{ marginTop: "20px" }}
            >
              <Grid item xs={4} style={{ textAlign: "right", marginRight: '10px' }}>
                <TextField
                  variant="outlined"
                  label="최저 요금"
                  value={inputValues[0]}
                  onChange={evt => {
                    const value = evt.target.value;
                    const newState = [value, inputValues[1]];
                    this.setState({ inputValues: newState });
                    if (value && value >= domain[0]) {
                      this.setState({ values: newState });
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₩</InputAdornment>
                    )
                  }}
                />
              </Grid>
  
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <TextField
                  variant="outlined"
                  label="최대 요금"
                  value={inputValues[1]}
                  onChange={evt => {
                    const value = evt.target.value;
                    const newState = [inputValues[0], value];
                    this.setState({ inputValues: newState });
                    if (value && value <= domain[1] && value >= values[0]) {
                      this.setState({ values: newState });
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₩</InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "3%", marginBottom: "3%" }}
              onClick={() => {
                this.setState({
                  values: domain,
                  update: domain,
                  inputValues: domain
                });
              }}
            >
              
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

export default RangeSlider;
