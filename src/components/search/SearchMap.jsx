import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SVG from '../../assets/svg';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MapPopup from './MapPopup';
// 1. 아이디가 서로 일치하고 IsHovering이 true이면 까만색
// 2. 아이디가 서로 일치하고 false이면 하얀색
// 3. 아이디가 다르면 하얀색

// const Marker = styled.button`
//   background-color: `${props => console.log(props)}`;
//   box-shadow: rgb(0 0 0 / 8%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 1px 2px;
//   // color: `${isHovering.id === id && isHovering.isHovering ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)'}`;
//   width: 32px;
//   height: 32px;
//   border-radius: 50%,
//   justify-content: center;
//   align-items: center;
//   display: flex;

// `;


const Marker = ({ isHovering, accommId, id, setId, img, accomm, hoverId, setHoverId }) => {
  const [coord, setCoord] = useState({ clientX: null, clientY: null });
  
  const onClick = (e) => {
    setId(accommId);
    setCoord({
      clientX: e.clientX,
      clientY: e.clientY,
    })
  };

  const image = img.map(img => img.url);
  return (
    <div
      onClick={onClick}
      className="relative "
      >
      {accommId === id 
        && <MapPopup accomm={accomm} img={image} coord={coord} accommId={accommId} />}
      <div
        data-name="marker"
        className="hover:scale-125 duration-200 transform"
          style={{
        backgroundColor: `${isHovering.id === accommId && isHovering.isHovering ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)'}`,
        boxShadow: 'rgb(0 0 0 / 8%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 1px 2px',
        color: `${isHovering.id === accommId && isHovering.isHovering ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)'}`,
        width: 32,
        height: 32,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
          }}>
        <SVG
          dataName="marker"
          name="house"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
          color={`${isHovering.id === accommId && isHovering.isHovering ? 'rgb(255, 255, 255)' : 'rgb(34, 34, 34)'}`}
        />
        </div>
    </div>
  )
};
 
const SearchMap = ({ accommodations, loading, isHovering, id, setId }) => {
  const [hoverId, setHoverId] = useState(0);
  const [coord, setCoord] = useState({
    clientX: null,
    clientY: null,
  })
  
  const history = useHistory();

   const defaultProps = {
    center: {
      lat: 37.556708,
      lng: 126.910326
    },
    zoom: 14
  };
 
  let boundaryCoordinate = {};
 
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // onClick={_onClick}
          bootstrapURLKeys={{ key: 'AIzaSyA6XrrGClq-qmlmWDQCWGsgau4tzbQcINU' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{
            scrollwheel: true
          }}
          onDragEnd={() => {
            history.push(
              'mapSearch?minLatitude='
              + boundaryCoordinate.minLatitude +
              '&maxLatitude='
              + boundaryCoordinate.maxLatitude +
              '&minLongitude='
              + boundaryCoordinate.minLongitude +
              '&maxLongitude='
              + boundaryCoordinate.maxLongitude)
          }}
          onChange={({ center, zoom, bounds, marginBounds }) => {
              boundaryCoordinate = {
                minLatitude: marginBounds.sw.lat,
                maxLatitude: marginBounds.ne.lat,
                minLongitude: marginBounds.sw.lng,
                maxLongitude: marginBounds.ne.lng
              }
          }}
        > 
          {loading === false && accommodations.map(accomm => {
            return (
              <Marker
                lat={accomm.latitude}
                lng={accomm.longitude}
                isHovering={isHovering}
                hoverId={hoverId}
                setHoverId={setHoverId}
                accommId={accomm.id}
                id={id}
                setId={setId}
                img={accomm.accommodationPictures}
                accomm={accomm}
                coord={coord}
              />)
            }
              )}
        </GoogleMapReact>
      </div>
    );
  
}
 
export default SearchMap;