import React from 'react';

const Map = () => {
  const img = window.location.origin;
  const city = '강원도';
  const gu = '강릉시';
  const locationDesc = '펜션에서 경포 해수욕장까지 도보 5분 소요됩니다.';

  return (
    <div className="">
      <h1 className="text-2.2rem font-bold my-2.4rem">위치</h1>
      <div className="mb-2.4rem">
        <img src={img + '/img/map.jpg'} alt="map" className="w-full" />
      </div>
      <div>
        <h2 className="text-1.6rem font-bold mb-6">
          {gu}, {city}, 대한민국
        </h2>
        <p className="text-1.6rem">{locationDesc}</p>
      </div>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Map;
