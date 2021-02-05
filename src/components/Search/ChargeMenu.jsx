import React from 'react';
import RoomCharge from './RoomCharge';

const ChargeMenu = () => {
  return (
    <>
      {/* <div className="w-34rem h-11rem border text-1.6rem text-#484848 p-8 rounded-xl border-1 border-searchBorder shadow-xl absolute left-40 z-20 bg-#fff">
        요금을 확인하려면 여행 날짜를 입력하세요
         <button className="w-8.5rem h-3.5rem py-2 px-4 mt-4 border bg-#222 text-#fff rounded-2xl">날짜 입력</button>
      </div> */}
      <div className="border border-searchBorder shadow-xl rounded-lg p-8 w-44rem h-33rem absolute left-40 z-20 bg-#fff">
        <div className="border-b border-black mb-8">
          <p className="text-1.6rem">평균 1박 요금은 ₩105,512입니다</p>
          <RoomCharge />
        </div>
        <button className="w-6rem h-3rem bg-#222 text-#fff text-1.4rem rounded-lg absolte right-0">저장</button>
      </div>
    </>
  );
};

export default ChargeMenu;