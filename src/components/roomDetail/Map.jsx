import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ address, transportationDesc, latitude, longitude }) => {
  const transportationDescription = (
    transportationDesc ||
    '인천공항이나 김포공항에서 지하철 역으로 오는 방법은 공항버스, 공항철도, 택시가 있습니다.\n\n 짐이 많을 경우에는 공항버스가 이동하시기에 편리합니다.\n\n 지하철역 2번출구와 도보 5분 거리에 위치해 있습니다:)'
  ).split('\n');

  const containerStyle = {
    width: '74vw',
    height: '50vh',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDzRJDxJNt3LwQ9GAPRi9XyX0beetvtRaA',
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div id="map">
      <h1 className="text-2.2rem font-bold my-2.4rem">위치</h1>
      <div className="mb-2.4rem">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h2 className="text-1.6rem font-bold mb-6">{address}</h2>
        <p className="text-1.6rem">{transportationDescription}</p>
      </div>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default React.memo(Map);
