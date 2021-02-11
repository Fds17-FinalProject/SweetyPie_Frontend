import React from 'react';

const Map = () => {
  const img = window.location.origin;
  const address = '강릉시, 강원도, 대한민국';
  const locationDesc =
    '펜션에서 경포 해수욕장까지 도보 5분 소요됩니다.\n펜션 바로 앞에 버스정류장이 위치해 있습니다.\n\n주문진터미널 3km(차로 5분)\n강릉역(KTX)에서 차로 20분정도 소요';
  locationDesc.split('\n');

  return (
    <div className="">
      <h1 className="text-2.2rem font-bold my-2.4rem">위치</h1>
      <div className="mb-2.4rem">
        <img src={img + '/img/map.jpg'} alt="map" className="w-full" />
      </div>
      <div>
        <h2 className="text-1.6rem font-bold mb-6">{address}</h2>
        <p className="text-1.6rem">{locationDesc}</p>
      </div>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Map;
