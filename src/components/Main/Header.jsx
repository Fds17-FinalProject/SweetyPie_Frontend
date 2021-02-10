import React from 'react';
import '../../assets/output.css';
import { BiMenu, BiSearch } from 'react-icons/bi';
import SVG from '../../assets/Svg';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderUser from './HeaderUser';

const Button = styled.button`
  :hover {
    background: #ebebeb;
    border-radius: 999rem;
    z-index: 1;
  }
`;
const HeaderWrap = styled.div`
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: slideUp;
`;

const HeaderSearch = () => {
  return (
    <form>
      <HeaderWrap
        className="flex border rounded-full bg-white w-85rem h-28 mt-44
      "
      >
        <Button className="w-27rem text-left">
          <div className="border-r px-14">
            <b className="block text-1.2rem">위치</b>
            <label className="a11y-hidden" htmlFor="search-input">
              여행지를 골라주세요.
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="어디로 여행가세요?"
              className="block text-1.4rem text-#717171 bg-transparent"
            ></input>
          </div>
        </Button>

        <Button className="w-18rem text-left">
          <div className="border-r px-6">
            <b className="block text-1.2rem">체크인</b>
            <span className="block text-1.4rem text-#717171">날짜 추가</span>
          </div>
        </Button>

        <Button className="w-18rem text-left">
          <div className="border-r px-6">
            <b className="block text-1.2rem">체크아웃</b>
            <span className="block text-1.4rem text-#717171">날짜 추가</span>
          </div>
        </Button>

        <Button className="w-22rem text-left px-6">
          <div className="relative">
            <b className="block text-1.2rem">인원</b>
            <span className="block text-1.4rem text-#717171">게스트 추가</span>
            <button className="absolute right-0 -top-2 flex justify-center items-center w-4.8rem h-4.8rem rounded-full bg-airbnb hover:bg-#DE1661 transition transform hover:ease-in-out">
              <BiSearch className=" w-6 h-6 text-white" />
              {/* <div className="hidden">검색</div> */}
            </button>
          </div>
        </Button>
      </HeaderWrap>
    </form>
  );
};

const Header = ({ showModal, visible }) => {
  return (
    <header className="max-w-screen-2xl w-full h-32 px-32 absolute	">
      <div className=" w-full h-32  flex items-center justify-between">
        <HeaderLogo color="#FFf" />
        <HeaderSearch />
        <HeaderUser showModal={showModal} visible={visible} />
      </div>
    </header>
  );
};

export default Header;

// className="max-w-screen-2xl w-full h-32 px-32 flex items-center justify-between absolute"
