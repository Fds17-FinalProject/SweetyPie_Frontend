import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../common/Carousel';
import { FiHeart } from 'react-icons/fi';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { deleteBookMark, postBookMark } from '../../redux/lib/api/bookmark';
import { getPrice } from '../../redux/lib/api/search';


const HoverSvg = styled.button`
  transition: all 0.2s ease-in-out;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  &:hover {
    transform: scale(1.1);
    background-color: rgba(229, 231, 235, 1);
    transition: background-color 0.2s;
  }
`;

const recentSearch = [];

const AccommList = props => {
  const {
    id,
    accommodationPictures,
    accommodationType,
    bathroomNum,
    bedNum,
    bedroomNum,
    buildingType,
    capacity,
    gu,
    price,
    rating,
    reviewNum,
    title,
    onMouseEnter,
    onMouseLeave,
    bookmarked
  } = props;
  const cost = price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [bookMark, setBookMark] = useState(bookmarked);
  
  const bookMarkClick = id => () => {
    setBookMark(!bookMark);
    if (!bookMark) {
      console.log(bookMark);
      postBookMark(id) 
    } else {
      deleteBookMark(id)
    }
  };
  const img = accommodationPictures && accommodationPictures.map(picture => picture.url);
  const setLocal = id => () => {
    recentSearch.unshift({
      id,
      title,
      accommodationPictures: accommodationPictures.map(picture => picture.url),
      rating,
      buildingType,
      accommodationType,
      reviewNum,
    });
    const jsonObject = recentSearch.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);
    localStorage.setItem('recentSearch', JSON.stringify([...uniqueSet]));
  };

  useEffect(() => { 
    
  }, []);
  
  // const checkIn = url.searchParams.get('checkIn');
  // const checkout = url.searchParams.get('checkout');
  // const adultNum = url.searchParams.get('adultNum');
  // const childNum = url.searchParams.get('childNum');
  // const infantNum = url.searchParams.get('infantNum');

  return (
    <li
      key={id}
      onClick={setLocal(id)}
      onMouseEnter={onMouseEnter(id)}
      onMouseLeave={onMouseLeave(id)}
      data-name="accommList"
    >
      <div className="h-25rem border-t border-#EBEBEB pt-10 pb-10 relative">
        <HoverSvg
          className="absolute top-8 right-0 z-20"
          onClick={bookMarkClick(id)}
        >
          <FiHeart
            fill={bookMark ? 'rgb(255, 56, 92)' : '#fff'}
            size={30}
            stroke={bookMark ? '' : 'black'}
            className="absolute top-2 left-2"
          />
        </HoverSvg>
        <Link
          // to={
            // `/accommodation/${id}?${checkIn && `checkInDate=${checkIn}&`}${checkout && `checkoutDate=${checkout}&`}${adultNum && `adultNum=${adultNum}&`}${childNum && `childNum=${childNum}&`}${infantNum && `infantNum=${infantNum}`}`
          // }
          className="flex focus:outline-none"
        >
          <Carousel size="Large" img={img} />
          <div className="relative w-54rem truncate ml-5">
            <span className="text-#717171 text-1.4rem inline-block">
              {gu}의 {buildingType} {accommodationType}
            </span>
            <div className="w-34rem">
              <div className="text-1.8rem w-34rem truncate">{title}</div>
              <div className="w-2.4rem border-t mt-4 mb-4"></div>
              <div className="text-1.4rem text-#717171">
                최대 인원 {capacity}명 · 침실 {bedroomNum}개 · 침대 {bedNum}개 ·
                욕실 {bathroomNum}개
              </div>
              <div className="text-1.4rem text-#717171">
                무료 주차 공간 · 주방 · 난방 · 무선 인터넷
              </div>
            </div>
            {rating !== 0 && (
              <div className="text-1.4rem mt-2 inline-block absolute top-17rem">
                <AiFillStar
                  size={20}
                  fill={'#FF385C'}
                  className="inline-block"
                />
                <span>
                  {rating} ({reviewNum})
                </span>
              </div>
            )}
            <div className="absolute top-17.4rem right-0 text-1.8rem">
              <span className="font-extrabold"> ₩{cost} </span>/1박
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};
export default AccommList;
