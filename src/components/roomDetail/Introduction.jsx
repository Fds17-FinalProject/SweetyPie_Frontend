import React from 'react';

const Introduction = () => {
  const img = window.location.origin;
  const host = 'JamJam';
  const buildingType = '펜션';
  const capacity = '5명';
  const bedroomNum = 1;
  const bedNum = 2;
  const bathroomNum = 1;

  return (
    <>
      <div className="pb-2.4rem flex justify-between">
        <div>
          <div className="text-2.2rem mb-0.8rem font-bold ">
            {host}님이 호스팅하는 {buildingType}
          </div>
          <div className="text-1.6rem">
            <span className="">최대 인원 {capacity}</span>
            <span className="text-#717171 mr-1">ㆍ</span>
            <span className="">침실 {bedroomNum}개</span>
            <span className="text-#717171 mr-1">ㆍ</span>
            <span className="">침대 {bedNum}개</span>
            <span className="text-#717171 mr-1">ㆍ</span>
            <span className="">욕실 {bathroomNum}개</span>
          </div>
        </div>
        <img
          className="inline-block rounded-full w-32 h-32"
          src={img + '/img/avatar.png'}
          alt="..."
        />
      </div>
      <div className="mb-20 border-b"></div>
    </>
  );
};

export default Introduction;
