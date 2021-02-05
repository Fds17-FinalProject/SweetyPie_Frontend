import React, { useState } from 'react';
import '../../assets/output.css';
import SVG from '../../assets/svg';
import { BiSearch } from 'react-icons/bi';
import HeaderLogo from '../main/HeaderLogo';
import HeaderUser from '../main/HeaderUser';
export const HeaderSearch = () => {
  return (
    <button
      className="flex rounded-full p-4 border border-gray-300 w-32rem
    "
    >
      <div className="flex justify-start items-center w-11/12 h-12 font-semibold text-1.4rem">
        검색 시작하기
      </div>
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-airbnb">
        <BiSearch className="w-6 h-6 text-white" />
      </div>
    </button>
  );
};
const CommonHeader = ({ showModal, visible }) => {
  // const [isActive, setIsActive] = useState(false);
  // let className = "max-w-screen-2xl fixed z-10";
  // if (isActive) {
  //   className += 'active'
  // setIsActive(true);
  // console.log(isActive);
  // } else {
  //   className = "max-w-screen-2xl fixed z-10"
  //   setIsActive(false);
  // };
  return (
    <header className="max-w-screen-2xl fixed z-10 hidden">
      <div className="bg-white w-full px-32 h-32 flex items-center justify-between	fixed z-10">
        <HeaderLogo color="#FF385C" />
        <HeaderSearch />
        <HeaderUser showModal={showModal} visible={visible} />
      </div>
    </header>
  );
};
// className="max-w-screen-2xl px-32 bg-white w-full h-32 flex items-center justify-between	fixed z-10"
export default CommonHeader;
