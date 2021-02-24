import React from 'react';

const RoomDetailHeader = ({ scrollHeader }) => {
  // nav 메뉴 클릭 시 해당 컴포넌트로 스크롤 이동
  const onScrollNav = e => {
    e.preventDefault();
    const id = e.target.href.split('#')[1];
    const scrollTargetId = document.getElementById(id);
    window.scrollTo({
      left: 0,
      top: scrollTargetId.offsetTop - 89,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-between w-full fixed top-0 left-0 h-8rem border-b-2 bg-white px-19.4rem z-10 ">
      <div className="flex align-center text-1.4rem font-bold">
        <a
          href="#photos"
          className="mr-2.4rem font-bold py-3rem border-b-4 border-white hover:border-b-4 hover:border-black"
          onClick={onScrollNav}
        >
          사진
        </a>
        <a
          href="#introduction"
          className="mr-2.4rem font-bold py-3rem hover:border-b-4 hover:border-black"
          onClick={onScrollNav}
        >
          숙소 소개
        </a>
        <a
          href="#reviews"
          className="mr-2.4rem font-bold py-3rem hover:border-b-4 hover:border-black"
          onClick={onScrollNav}
        >
          후기
        </a>
        <a
          href="#map"
          className="mr-2.4rem font-bold py-3rem hover:border-b-4 hover:border-black"
          onClick={onScrollNav}
        >
          위치
        </a>
      </div>
      {scrollHeader.button ? (
        <a
          href="#reservation"
          onClick={onScrollNav}
          // >
          // <button
          className="bg-airbnb hover:bg-airbnbHover text-white font-bold 
          rounded-2xl transition-all duration-150 shadow-md px-10 mx-2 my-6 py-6 text-1.4rem h-20"
        >
          숙소 예약하기
          {/* // </button> */}
        </a>
      ) : (
        ''
      )}
    </div>
  );
};
export default RoomDetailHeader;
