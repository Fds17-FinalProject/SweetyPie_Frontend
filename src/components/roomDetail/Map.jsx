import React from 'react';
import GoogleMapReact from 'google-map-react';
import SVG from '../../assets/svg';

const Map = ({ address, transportationDesc, latitude, longitude }) => {
  const transportationDescription = (
    transportationDesc ||
    '인천공항이나 김포공항에서 지하철 역으로 오는 방법은 공항버스, 공항철도, 택시가 있습니다.\n\n 짐이 많을 경우에는 공항버스가 이동하시기에 편리합니다.\n\n 지하철역 2번출구와 도보 5분 거리에 위치해 있습니다:)'
  ).split('\n');

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 14,
  };

  const AnyReactComponent = () => (
    <div
      style={{
        backgroundColor: 'rgb(34, 34, 34)',
        boxShadow:
          'rgb(0 0 0 / 24%) 0px 0px 0px 1px inset, rgb(0 0 0 / 18%) 0px 1px 2px',
        color: 'rgb(255, 255, 255)',
        width: '4.8rem',
        height: '4.8rem',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <SVG
        name="house"
        width="2.8rem"
        height="2.8rem"
        viewBox="0 0 24 24"
        color="rgb(255, 255, 255)"
        fill="#fff"
      />
    </div>
  );

  return (
    <div className="">
      <h1 className="text-2.2rem font-bold my-2.4rem">위치</h1>
      <div className="mb-2.4rem relative">
        <div style={{ width: '74vw', height: '50vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyA6XrrGClq-qmlmWDQCWGsgau4tzbQcINU',
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={latitude + 0.002}
              lng={longitude - 0.003}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div className="bg-searchBackground text-1.4rem px-1.6rem py-1.2rem absolute bottom-7 left-40rem rounded-lg">
          정확한 위치는 예약 완료 후에 표시됩니다.
        </div>
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
