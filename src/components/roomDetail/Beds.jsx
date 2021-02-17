import React from 'react';
import { BiBed } from 'react-icons/bi';

const Beds = ({ bedroomNum, bedNum }) => {
  return (
    <div className="">
      <h1 className="text-2.2rem mb-2.4rem font-bold">침대 / 침구 유형</h1>
      <div className="w-20rem h-14.2rem border rounded-2xl p-2.4rem">
        <div className="mb-8 w-full inline-flex">
          <BiBed
            style={{ width: '2.4rem', height: '2.4rem', marginRight: '0.5rem' }}
          />
          <BiBed style={{ width: '2.4rem', height: '2.4rem' }} />
        </div>
        <div className="mb-0.8rem text-1.6rem font-bold">
          침실 {bedroomNum}개
        </div>
        <div className="text-1.4rem">더블 침대 {bedNum}개</div>
      </div>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Beds;
