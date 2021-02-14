import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';

const RoomDetailHeader = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-8rem bg-red-500 px-19.4rem z-10">
      <div className="flex text-1.4rem font-bold">
        <a
          href="room#photos"
          className="mr-2.4rem font-bold py-3rem bg-gray-100 hover:border-b "
        >
          사진
        </a>
        <a
          href="#introduction"
          className="mr-2.4rem font-bold py-3rem bg-gray-100 hover:border-b"
        >
          <div>숙소 소개</div>
        </a>
        <NavHashLink
          to="/room#reviews"
          // href="room#reviews"
          className="mr-2.4rem font-bold py-3rem bg-gray-100 hover:border-b"
        >
          <div>후기</div>
        </NavHashLink>
        <HashLink
          smooth
          to="/room#map"
          scroll={el =>
            el.scrollIntoView({ behavior: 'instant', block: 'end' })
          }
          // href="/room#map"
          className="mr-2.4rem font-bold py-3rem bg-gray-100 hover:border-b"
        >
          <div>위치</div>
        </HashLink>
      </div>
    </div>
  );
};

export default RoomDetailHeader;
