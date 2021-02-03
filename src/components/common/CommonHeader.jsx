import React from 'react';
import '../../assets/output.css';
import { BiMenu } from "react-icons/bi";
import SVG from '../../assets/Svg';
import { Link } from 'react-router-dom';
import {BiSearch} from "react-icons/bi"
import styled from 'styled-components';

const Button = styled.button`
  /* width:32rem; */
  /* border:1px solid rgb(118, 118, 118); */
`;



const HeaderLogo = () => {
  return (
    <div>
        <Link to="#">
        <SVG name="logo" width="102px" color="#FF385C" height="32px"/>
        </Link>
      </div>
  )
}

const HeaderSearch = () => {
  return (
    <button className="flex rounded-full p-4 border border-gray-300 w-32rem
    ">
      <div className="flex justify-start items-center w-11/12 h-12 font-semibold text-1.4rem">검색 시작하기</div>
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-airbnb">
        <BiSearch className="w-6 h-6 text-white"/>
      </div>
    </button>
  )
}

const HeaderUser = () => {
  return (
    <div>
        <nav>
        <button className="flex bg-white p-2 border-gray-300 border rounded-full w-28	h-14 ">
          <div className="flex-grow w-full h-full">
            <BiMenu className="w-full h-full text-gray-500"/>
          </div>
          <div className="flex-grow w-full h-full">
            <SVG className="bg-gray-300" name="user" width="100%" viewBox="0 0 32 32" height="100%" xmlns="http://www.w3.org/2000/svg"/>
          </div>
        </button>
        </nav>
      </div>
  )
}


const CommonHeader = () => {
  return (
    <header
      className="
      max-w-screen-2xl px-32 bg-white w-full h-32 flex items-center justify-between	fixed
      ">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderUser />
    </header>
  )
}



export default CommonHeader;
