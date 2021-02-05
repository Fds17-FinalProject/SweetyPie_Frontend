import React from 'react';
import Carousel from '../common/Carousel';
import { AiFillStar } from 'react-icons/ai';
const url = window.location.origin;

const img = [url+ '/img/css.webp', url+ '/img/js.png', url+ '/img/git.jpg', url+ '/img/algo.png', url+ '/img/coding.jpg']
const RecentSearch = () => {
  return (
      <li>
      <div className="w-14.5rem h-17.3rem truncate mt-8 mx-3 pb-4">
        <Carousel size="small" img={img} />
        <div className="text-1.4rem mt-2">
          <AiFillStar size={20} fill={'#FF385C'} className="inline-block"/>
        <span >4. 96</span>
        <span className="text-#717171">(74)</span>
        <div className="ml-2">
          <div>게스트용 별채 전체</div>
          <div className="w-14rem truncate">햄릿과 올리브 Hamlet & Olive</div>
        </div>
      </div>
        </div>
      </li>  
  );
};

export default RecentSearch;