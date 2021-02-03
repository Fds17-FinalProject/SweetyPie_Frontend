import React from 'react';
import '../../assets/output.css';
import { BiMenu, BiSearch } from 'react-icons/bi';
import SVG from '../../assets/Svg';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const Button = styled.button`
  :hover {
    background: #ebebeb;
    border-radius: 999rem;
    z-index: 1;
  }
`;
const slideDown = keyframes`
  from {
    transform: scale(0.3, 0.75) translateY(-80px);
  }
  to {
    transform: scale(1, 1) translateY(0px);
  }
`;

const slideUp = keyframes`
  from {
    transform: scale(1, 1) translateY(0px);
    opacity: 0.5;
  }
  to {
    transform: scale(0.3, 0.75) translateY(-80px);
    opacity: 0;
    visibility: hidden;
  }
`;

const HeaderWrap = styled.div`
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: slideUp;
`;



const HeaderLogo = () => {
  return (
    <div>
      <Link to="#">
        <SVG name="logo" width="102px" color="#fff" height="32px" />
      </Link>
    </div>
  );
};

const HeaderSearch = () => {
  return (
    <form>
      <HeaderWrap className="flex border rounded-full bg-white w-85rem h-28 mt-44
      ">
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
            <button className="absolute right-0 -top-2 flex justify-center items-center w-4.8rem h-4.8rem rounded-full bg-airbnb hover:bg-#DE1661 z-10 transition transform hover:ease-in-out">
              <BiSearch className=" w-6 h-6 text-white" />
              {/* <div className="hidden">검색</div> */}
            </button>
          </div>
        </Button>
      </HeaderWrap>
    </form>
  );
};

const HeaderUser = () => {
  return (
    <div>
      <nav>
        <button className="flex bg-white p-2 rounded-3xl w-28	h-14 ">
          <div className="flex-grow w-full h-full">
            <BiMenu className="w-full h-full text-gray-600" />
          </div>
          <div className="flex-grow w-full h-full">
            <SVG
              name="user"
              width="100%"
              viewBox="0 0 32 32"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            />
          </div>
        </button>
      </nav>
    </div>
  );
};

const Header = () => {
  
  return (
    <header
      className="
      max-w-screen-2xl w-full h-32 px-32 flex items-center justify-between absolute
      "
    >
      <HeaderLogo />
      <HeaderSearch />
      <HeaderUser />
    </header>
  );
};

export default Header;

