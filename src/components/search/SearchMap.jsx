import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SVG from '../../assets/svg';
import { useHistory } from 'react-router-dom';
import MapPopup from './MapPopup';
import Geocode from "react-geocode";

const Marker = ({ isHovering, accommId, id, setId, img, accomm, hoverId, setHoverId }) => {
  const [coord, setCoord] = useState({ clientX: null, clientY: null });

  const onClick = (e) => {
    setCoord({
      clientX: e.clientX,
      clientY: e.clientY,
    });
    setId(accommId);
  };

  const image = img.map(img => img.url);
  return (
    <div
      onClick={onClick}
      className="relative"
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
 
const SearchMap = ({ accommodations, loading, isHovering, id, setId, address }) => {
  const url = new URL(window.location.href);

  const [hoverId, setHoverId] = useState(0);
  const [coord, setCoord] = useState({
    clientX: null,
    clientY: null,
  })
  
  const [center, setCenter] = useState({
    lat: null,
    lng: null,
  });

  const [zoom, setZoom] = useState(13);

  useEffect(() => { 
    Geocode.setApiKey("AIzaSyA6XrrGClq-qmlmWDQCWGsgau4tzbQcINU");
    
      Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCenter({
            lat: lat,
            lng: lng,
          })
        },
        (error) => {
          console.error(error);
        }
      );

    if (url.searchParams.has('minLatitude')) {
      const minLat = url.searchParams.get('minLatitude');
      const maxLat = url.searchParams.get('maxLatitude');
      const minLng = url.searchParams.get('minLongitude');
      const maxLng = url.searchParams.get('maxLongitude');

      setCenter({
        lat: (+minLat + +maxLat) / 2,
        lng: (+minLng + +maxLng) / 2,
      })
    }

    if (url.searchParams.get('zoom') === '9') setZoom(11);

    if (url.searchParams.get('zoom') === '15') {
      setCenter({
        lat: 36.55138889,
        lng: 128.03388889,
      });
      setZoom(7);
    }

  }, [address]);

  
  const history = useHistory();


  const defaultProps = {
    center: {
      lat:  center.lat && center.lat,
      lng:  center.lng && center.lng,
    },
    zoom,
  };

  let boundaryCoordinate = {};

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA6XrrGClq-qmlmWDQCWGsgau4tzbQcINU' }}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{
            scrollwheel: true
          }}
          // onBoundsChange={_onBoundsChange}
          // onZoomAnimationEnd={() => {
          //   console.log(boundaryCoordinate);
          //   history.push(
          //     'mapSearch?minLatitude='
          //     + boundaryCoordinate.minLatitude +
          //     '&maxLatitude='
          //     + boundaryCoordinate.maxLatitude +
          //     '&minLongitude='
          //     + boundaryCoordinate.minLongitude +
          //     '&maxLongitude='
          //     + boundaryCoordinate.maxLongitude)
          // }}
          onDragEnd={() => {
            history.push(
              'mapSearch?minLatitude='
              + boundaryCoordinate.minLatitude +
              '&maxLatitude='
              + boundaryCoordinate.maxLatitude +
              '&minLongitude='
              + boundaryCoordinate.minLongitude +
              '&maxLongitude='
              + boundaryCoordinate.maxLongitude
              + `${history.location.search.split('types')[1] ? `&types${history.location.search.split('types')[1]}` : ''}`
              )
          }}
          onChange={({ center, zoom, bounds, marginBounds }) => {
              boundaryCoordinate = {
                minLatitude: bounds.sw.lat,
                maxLatitude: bounds.ne.lat,
                minLongitude: bounds.sw.lng,
                maxLongitude: bounds.ne.lng
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
            })}
        </GoogleMapReact>
      </div>
    );
  
}
 
export default React.memo(SearchMap);