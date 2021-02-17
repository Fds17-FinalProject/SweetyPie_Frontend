import React from 'react';

const Introduction = ({
  hostName,
  buildingType,
  capacity,
  bedroomNum,
  bedNum,
  bathroomNum,
}) => {
  const img = window.location.origin;

  return (
    <>
      <div id="introduction" className="pb-2.4rem flex justify-between">
        <div>
          <div className="text-2.2rem pt-4 mb-0.4rem font-bold ">
            {hostName}님이 호스팅하는 {buildingType}
          </div>
          <div className="text-1.6rem">
            <span className="">최대 인원 {capacity}명</span>
            <span className="text-#717171 mr-0.5">ㆍ</span>
            <span className="">침실 {bedroomNum}개</span>
            <span className="text-#717171 mr-1">ㆍ</span>
            <span className="">침대 {bedNum}개</span>
            <span className="text-#717171 mr-1">ㆍ</span>
            <span className="">욕실 {bathroomNum}개</span>
          </div>
        </div>
        <img
          className="inline-block rounded-full w-32 h-32"
          src={img + '/img/JamJam2.jpg'}
          alt="호스트 프로필 사진"
        />
      </div>
      <div className="mb-20 border-b"></div>
    </>
  );
};

export default Introduction;
