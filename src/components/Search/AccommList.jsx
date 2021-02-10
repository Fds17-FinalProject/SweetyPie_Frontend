import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVG from '../../assets/Svg';
import Carousel from '../common/Carousel';
import { HiOutlineHeart, HiHeart, HiOutlineX } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import Button from '../common/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

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

// className="hover:bg-gray-200 transform hover:scale-110 transition-colors duration-150 focus:outline-none rounded-full focus:shadow-outline"

const url = window.location.origin;

const AccommList = () => {
  const [bookMark, setBookMark] = useState(false);

  const bookMarkClick = () => setBookMark(!bookMark);

  const img = [
    url + '/img/css.webp',
    url + '/img/js.png',
    url + '/img/git.jpg',
    url + '/img/algo.png',
    url + '/img/coding.jpg',
  ];

  return (
    <li>
      <div className="h-25rem border-t border-#EBEBEB pt-10 pb-10 relative">
        <Link to="/" className="flex focus:outline-none">
          <Carousel size="Large" img={img} />
          <div className="relative w-54rem truncate ml-5">
            <span className="text-#717171 text-1.4rem inline-block">
              Sokcho-si의 아파트(콘도) 전체
            </span>
            <HoverSvg
              className="absolute top-1 right-8"
              onClick={bookMarkClick}
            >
              <FiHeart
                fill={bookMark ? 'rgb(255, 56, 92)' : '#fff'}
                size={30}
                stroke={bookMark ? '' : 'black'}
                className="absolute top-2 left-2"
              />
            </HoverSvg>
            <div className="w-34rem">
              <div className="text-1.8rem w-34rem truncate">
                블루테라 코랄 #5, 속초더블루마크, 투베이 오션뷰. 속초해수욕장
                도보 5분
              </div>
              <div className="w-2.4rem border-t mt-4 mb-4"></div>
              <div className="text-1.4rem text-#717171">
                최대 인원 2명 · 침실 1개 · 침대 2개 · 욕실 1개
              </div>
              <div className="text-1.4rem text-#717171">
                무료 주차 공간 · 주방 · 난방 · 무선 인터넷
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default AccommList;
