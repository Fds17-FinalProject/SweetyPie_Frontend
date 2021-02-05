import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({children}) => {
  return (
    <li className="py-4 px-6 hover:bg-gray-100">
      <Link to="#">{children}</Link>
  </li>
  )
}
const UserMenu = ({ hideModal, modalElement }) => {
  return (
    <div
      id="1"
      ref={modalElement}
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div className="w-96 z-50 bg-white border rounded-2xl absolute top-28 right-32 overflow-y-auto flex flex-col text-#727272 text-1.4rem">
      <h1 className="a11y-hidden">유저 메뉴 모달창</h1>
    <div>
     {/* 로그인 안했을 시  */}
      <ul>
        {/* <MenuList>로그인</MenuList>
        <MenuList>회원 가입</MenuList>
        <MenuList>도움말</MenuList> */}
        {/* <li className="py-4 px-6 hover:bg-gray-100">
          <Link to="#">회원 가입</Link>
        </li> */}
     {/* 로그인 했을 시 */}
        <MenuList>예약 내역</MenuList>
        <MenuList>저장 목록</MenuList>
        <MenuList>계정</MenuList>
        <MenuList>로그아웃</MenuList>
     </ul>
       
    </div>
      </div>
    </div>
  );
};
export default UserMenu;