import React from 'react';
import Carousel from '../common/Carousel';
import { AiFillStar } from 'react-icons/ai';
const url = window.location.origin;

const img = [url+ '/img/css.webp', url+ '/img/js.png', url+ '/img/git.jpg', url+ '/img/algo.png', url+ '/img/coding.jpg']
const MapPopup = () => {
  return (
    <div className="h-28rem truncate mt-8 rounded-2xl" style={{ width: '275px'}}>
      <Carousel size="Medium" img={img} />
      <div className="text-1.4rem p-8 bg-white">
        <AiFillStar size={20} style={{ fill: '#FF385C' }} className="inline-block"/>
        <span >4. 96</span>
        <span className="text-#717171">(74)</span>
        <div className="ml-2">
          <div>게스트용 별채 전체</div>
          <div className="w-15rem truncate">햄릿과 올리브 Hamlet & Olive</div>
        </div>
      </div>
    </div>
  );
};

export default MapPopup;