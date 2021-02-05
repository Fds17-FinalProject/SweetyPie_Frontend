import React from 'react';
import SVG from '../../assets/SVG';

const BookingRoomInfo = () => {
  return (
    <div className="flex pb-12">
      <div className="w-48 h-40 rounded-2xl w-1\/2">
        <img
          src="https://a0.muscache.com/im/pictures/f9a05c5d-36cb-4e7a-9b38-a19aa8ec932f.jpg?aki_policy=large"
          alt="#"
          className="w-48 h-40 rounded-2xl"
        />
      </div>

      <div className="pl-6 w-1/2 flex flex-col justify-between">
        <p className="text-1.2rem truncate">
          Gyeongwondong 2(i)-ga, Wansan-gu,
        </p>
        <p className="text-1.4rem truncate">
          햇빛~콘도형Guest1.No/1인은2명예약시가능,한옥마을걸어3분
        </p>
        <p className="text-1.2rem text-#717171">침대 4개 · 욕실 1개</p>
        <div className="flex items-center">
          <SVG
            name="rating"
            width="12px"
            height="12px"
            viewBox="0 0 32 32"
            color="#ff385c"
            xmlns="http://www.w3.org/2000/svg"
          />
          <span className="pl-2 text-1.4rem font-semibold">4.58</span>
          <span className="pl-2 text-1.4rem text-#717171">(308)</span>
        </div>
      </div>
    </div>
  );
};

export default BookingRoomInfo;
