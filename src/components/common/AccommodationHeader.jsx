import React from 'react';
import styled from 'styled-components';
import SVG from '../../assets/svg';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import Modal from './Modal';
import AuthModal from '../main/AuthModal';
import SocialRegisterModal from './SocialRegisterModal';
import AccommodationSearchHeader from '../common/AccommodationSearchHeader';

const MainHeader = styled.header`
position: fixed;
top: 0;
display: flex;
width: 100%;
height: ${({searchStartState}) => searchStartState ? '18rem' : '8rem'};
justify-content: space-between;
padding-left: 8rem;
padding-right: 8rem;
padding-top: 2rem;
background:#fff;
z-index: 10;
box-sizing: border-box;
box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
`;

const HeaderUserMenu = styled.button`
  display: flex;
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid rgba(209, 213, 219);
  border-radius: 1.5rem;
  width: 7rem;
  height: 3.5rem;
`;

const AccommodationHeader = ({
  showModal, // 유저메뉴(버거바) open
  hideModal, // 모달 close
  changeModal, // 유저메뉴 -> 로그인, 회원가입 모달 뷰 교체
  visible, // 유저메뉴 open,close 상태
  authVisible, // 회원가입, 로그인 모달 open, close 상태
  searchStartState, // 검색 시작 버튼 누르면 애니메이션 교체해주기 위한 상태
  scrollY, // scrollY 값 30이상이면 true : false
  setScrollY,
  showAuthModal, // 회원가입, 로그인 모달
  showSearchHeader,
  onChange, // 로그인 회원가입 모달 인풋 onChange
  registerSubmit, // 회원가입 모달 submit
  loginSubmit, // 로그인 모달 submit
  state, // store (useSelector)
  checkedToken, // 로컬스토리지에 토큰이 있는지 없는지 유무(로그인 됐는지)
  socialModal, // 소셜로 회원가입 모달
  socialRegisterSubmit, // 소셜로 회원가입 submit
  userLogout, // 로그아웃 api콜 함수
  location,
  calendar,
  personnel,
  setLocation,
  setCalendar,
  setPersonnel,
  checkedLogin,
  address,
  setAddress
}) => {
  // 버거바
  const HeaderUser = () => {
    return (
      <HeaderUserMenu
        className="flex bg-white p-2 rounded-3xl border-gray-300 border w-28 h-14"
        onClick={showModal}
      >
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
      </HeaderUserMenu>
    );
  };

  // 버거바 누르면 나오는 유저 메뉴
  const MenuList = ({ children, showAuthModal, auth }) => {
    return (
      // UserMenu에서 auth를 받아서 콜백함수로 showAuthModal에 전달
      <li
        className="cursor-pointer	py-4 px-6 hover:bg-gray-100"
        onClick={() => showAuthModal(auth)}
      >
        {children}
      </li>
    );
  };

  const UserMenu = ({ hideModal, showAuthModal }) => {
    return (
      <div
        data-name="close"
        onClick={hideModal}
        className="w-screen h-screen flex justify-center items-center text-white fixed top-0 z-20"
      >
        <div className="w-96 z-50 bg-white border rounded-2xl absolute top-28 right-32 overflow-y-auto flex flex-col text-#727272 text-1.4rem">
          <h1 className="a11y-hidden">유저 메뉴 모달창</h1>
          <div>
            {/* 로그인 안했을 시  */}
            <ul>
              {/* MenuList에 auth props를 넣어서 로그인인지 회원가입인지 구분 */}
              {checkedToken ? 
                 <>
                 <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100">
                   <Link className="block w-full" to="/reservation">예약내역</Link>
                 </li>
                 <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100">
                   <Link className="block w-full" to="/wishlist">저장목록</Link>
                 </li>
                 <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100">
                   <Link className="block w-full" to="/modify">계정</Link>
                 </li>
               <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100" onClick={userLogout}>로그아웃</li>
               </>
               : 
                // {/* 로그인 했을 시 */}
                <>
                  <MenuList auth="login" showAuthModal={showAuthModal}>
                    로그인
                  </MenuList>
                  <MenuList auth="register" showAuthModal={showAuthModal}>
                    회원 가입
                  </MenuList>
                  <MenuList>도움말</MenuList>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // 스크롤로 내려가서 2번째 헤더가 됐을때 검은색 -> 분홍색
  // 헤더 스크롤 이벤트 발생 시 애니메이션 추가를 위한 상태
  const HeaderLogo = () => {
    return (
      <div>
        <Link to="/">
          <SVG name="logo" width="102px" color="#ff385c" height="32px" />
        </Link>
      </div>
    );
  };

  return (
    <>
      {/* UserMenu(버거바) Modal 렌더링 */}
      {visible && (
        <Modal>
          <UserMenu
            hideModal={hideModal}
            showAuthModal={showAuthModal}
            authVisible={authVisible}
          />
        </Modal>
      )}
      {/* 로그인 회원가입 Modal 렌더링 */}
      {authVisible.type === 'login' && (
        <Modal>
          <AuthModal
            hideModal={hideModal}
            authVisible={authVisible}
            changeModal={changeModal}
            onChange={onChange}
            loginSubmit={loginSubmit}
            state={state}
            checkedLogin={checkedLogin}
          />
        </Modal>
      )}
      {authVisible.type === 'register' && (
        <Modal>
          <AuthModal
            hideModal={hideModal}
            authVisible={authVisible}
            changeModal={changeModal}
          />
        </Modal>
      )}
      {authVisible.type === 'form' && (
        <Modal>
          <AuthModal
            hideModal={hideModal}
            authVisible={authVisible}
            onChange={onChange}
            registerSubmit={registerSubmit}
            state={state}
          />
        </Modal>
      )}
      {socialModal && (
        <SocialRegisterModal
          hideModal={hideModal}
          onChange={onChange}
          socialRegisterSubmit={socialRegisterSubmit}
          state={state}
        />
      )}

      <MainHeader scrollY={scrollY} searchStartState={searchStartState}>
        <HeaderLogo color="#fff" scrollY={scrollY} />
        <AccommodationSearchHeader
          setLocation={setLocation}
          setCalendar={setCalendar}
          setPersonnel={setPersonnel}
          scrollY={scrollY}
          setScroll={setScrollY}
          searchStartState={searchStartState}
          showSearchHeader={showSearchHeader}
          location={location}
          calendar={calendar}
          personnel={personnel}
          address={address}
          setAddress={setAddress}
        />
        <HeaderUser />
      </MainHeader>
    </>
  );
};

export default AccommodationHeader;
