import React from 'react';
import styled, { keyframes } from 'styled-components';
import SVG from '../../assets/svg';
import { Link } from "react-router-dom";
// import { BiMenu, BiSearch } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import Modal from './Modal';
import AuthModal from '../main/AuthModal';
// import Calendar from './Calendar';
import SocialRegisterModal from './SocialRegisterModal';
import HeaderSearch from '../main/HeaderSearch';
// import HeaderGuestEditModal from './HeaderGuestEditModal';
// const img = window.location.origin;

// const scrollUp = keyframes`
// from {
//   /* translate3d는 GPU기반이기 때문에 성능이 더 좋다  */
//   transform: scale(0.3, 0.75) translateY(-8rem);
// }
// to {
//   transform: scale(1, 1) translateY(0);
// }
// `;

// const scrollDown = keyframes`
// from {
//   transform: scale(1.1, 1);
// }
// to {
//   transform: scale(1, 1);
//   visibility: hidden;
// }
// `;
  
const MainHeader = styled.header`
position: ${({scrollY}) => !scrollY ? 'absolute' : 'fixed'};
display: flex;
max-width: 144rem;
width: 100%;
height: ${({searchStartState}) => searchStartState ? '18rem' : '8rem'};
justify-content: space-between;
padding-left: 8rem;
padding-right: 8rem;
padding-top: 2rem;
background: ${({scrollY}) => !scrollY ? 'transparent' : '#fff'};
z-index: 1;
box-sizing: border-box;
box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
`;

// const SearchHeader = styled.form`
//   position:relative;
//   display: flex;
//   cursor: pointer;
//   border: 1px solid #ccc;
//   border-radius: 999rem;
//   background: #fff;
//   width: ${({scrollY, searchStartState}) => !scrollY ? '85rem' : searchStartState ? '85rem' : '32rem'};
//   height: ${({scrollY, searchStartState}) => !scrollY ? '7rem' : searchStartState? '7rem' : '4.8rem'};
//   margin-top: ${({scrollY, searchStartState}) => !scrollY ? '5rem' : searchStartState ? '5rem' : '0'};
//   /* animation-duration: 0.1s; */
//   /* animation-timing-function: ease-out; */
//   /* animation-name: ${({scrollY, searchStartState}) => !scrollY ? scrollUp : searchStartState ? scrollUp : scrollDown}; */
// `;

// const Button = styled.button.attrs(() => ({type: 'button'}))`
//   display: ${({scrollY, searchStartState}) => !scrollY ? 'block' : searchStartState ? 'block' : 'none' };
// :hover {
//   background: #ebebeb;
//   border-radius: 999rem;
//   z-index: 1;
// }
// :focus {
//   background: #fff;
//   border-radius: 999rem;
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
//   transform: scale(1.03);
// }
// `;
const HeaderUserMenu = styled.button`
display: flex;
background-color: #fff;
padding: 0.5rem;
border: 1px solid rgba(209, 213, 219);
border-radius: 1.5rem;
width: 7rem;
height: 3.5rem;
`;

// // 서치 헤더 (위치 어디로 여행가세요?)
// const SearchLocation = styled.div`
//   position:absolute;
//   top: 8rem;
//   width: 50.5rem;
//   border-radius: 2.5rem;
//   background: #fff;
//   display: flex;
//   align-items: center;
//   box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
// `;
// // 서치 헤더 (캘린더)
// const SearchCalendar = styled.div`
//   position:absolute;
//   top: 8rem;
//   width: 100%;
//   border-radius: 2.5rem;
//   background: #fff;
//   display: flex;
//   align-items: center;
//   box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;

// `;
// // 서치 헤더 (인원 수)
// const SearchPersonnel = styled.div`
//   position:absolute;
//   top: 8rem;
//   right: 0;
//   width: 38rem;
//   border-radius: 2.5rem;
//   background: #fff;
//   display: flex;
//   align-items: center;
//   box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
// `;


// const LocationButton = styled.button.attrs(() => ({type: 'button'}))`
//   width: 100%;
//   /* height: 1rem; */
//   margin-top: 1.5rem;
//   margin-bottom: 1.5rem;
//   padding: 1rem 2rem;
//   display: flex;
//   align-items: center;
//   :hover {
//     background: #f7f7f7;
//     border-radius: 1rem;
//   }
// `;
// const SearchButton = styled.button.attrs(() => ({ type: 'button' }))`
//   position: absolute;
//   right: 0;
//   top: -0.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 4.8rem;
//   /* width: ${({location, calendar, personnel}) => location || calendar || personnel ? '8.5rem' : '4.8rem'}; */
//   height: 4.8rem;
//   border-radius: 999rem;
//   background: #ff385c;
//   :hover {
//     background: #DE1661;
//     transition: ease-in-out;
//   }
// `;
// const SubmitButton = styled.button.attrs(() => ({ type: 'button' }))`
//  position: absolute;
//   right: 0;
//   top: -0.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 8.5rem;
//   /* width: ${({location, calendar, personnel}) => location || calendar || personnel ? '8.5rem' : '4.8rem'}; */
//   height: 4.8rem;
//   border-radius: 999rem;
//   background: #ff385c;
//   :hover {
//     background: #DE1661;
//     transition: ease-in-out;
//   }
// `;

const CommonHeader = (
  {
    showModal,         // 유저메뉴(버거바) open
    hideModal,         // 모달 close
    changeModal,       // 유저메뉴 -> 로그인, 회원가입 모달 뷰 교체
    visible,           // 유저메뉴 open,close 상태
    authVisible,       // 회원가입, 로그인 모달 open, close 상태
    searchStartState,  // 검색 시작 버튼 누르면 애니메이션 교체해주기 위한 상태
    scrollY,           // scrollY 값 30이상이면 true : false
    setScrollY,
    calendar,          // 검색 바 -> 체크인, 체크아웃 눌렀을때 나오는 뷰 상태
    location,          // 검색 바 ->  위치 눌렀을때 나오는 뷰 상태
    personnel,         // 검색 바 -> 인원수 눌렀을 때 뷰 상태
    showAuthModal,     // 회원가입, 로그인 모달
    showSearchHeader,  // 스크롤 30이상 시 검색 시작하기 누를 시 3번째 헤더로 변경
    showCalendar,      // 체크인 체크아웃 view open
    showLocation,      // 위치 view open 
    showPersonnel ,    // 인원 수 view open
    searchOnclick,     // 헤더 검색 버튼 누를 시 위치로 focus가게 하면서 버튼 스타일 변경
    onChange,          // 로그인 회원가입 모달 인풋 onChange
    registerSubmit,    // 회원가입 모달 submit
    loginSubmit,       // 로그인 모달 submit
    state,              // store (useSelector)
    checkedToken,       // 로컬스토리지에 토큰이 있는지 없는지 유무(로그인 됐는지)
    socialModal,        // 소셜로 회원가입 모달
    socialRegisterSubmit, // 소셜로 회원가입 submit
    userLogout            // 로그아웃 api콜 함수 
  }) => {
  // 버거바
const HeaderUser = () => {
  return (
        <HeaderUserMenu
          className="flex bg-white p-2 rounded-3xl border-gray-300 border w-28	h-14"
          onClick={showModal}>
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
    <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100" onClick={() => showAuthModal(auth)}>
      {children}
    </li>
  );
};


const UserMenu = ({ hideModal, showAuthModal }) => {
  return (
    <div
      data-name="close"
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center text-white fixed top-0 z-50"
    >
      <div className="w-96 z-50 bg-white border rounded-2xl absolute top-28 right-32 overflow-y-auto flex flex-col text-#727272 text-1.4rem">
        <h1 className="a11y-hidden">유저 메뉴 모달창</h1>
        <div>
          {/* 로그인 안했을 시  */}
          <ul>
          {/* MenuList에 auth props를 넣어서 로그인인지 회원가입인지 구분 */}
            {checkedToken ?
            <>
              <MenuList>예약 내역</MenuList>
              <MenuList>저장 목록</MenuList>
                <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100">
                  <Link className="block w-full" to="/modify">계정</Link>
                </li>
              <li className="cursor-pointer	py-4 px-6 hover:bg-gray-100" onClick={userLogout}>로그아웃</li>
              </>
              : 
            // {/* 로그인 했을 시 */}
            <>
              <MenuList auth='login' showAuthModal={showAuthModal} >로그인</MenuList>
              <MenuList auth='register' showAuthModal={showAuthModal} >회원 가입</MenuList>
              <MenuList>도움말</MenuList>
            </>}
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
        <Link to="#">
          <SVG name="logo" width="102px" color={!scrollY ? '#fff' : '#ff385c'} height="32px" />
        </Link>
      </div>
    );
  };


  // const HeaderSearch = () => {
  //   return (
  //     <SearchHeader scrollY={ scrollY } searchStartState = {searchStartState} id='test'>
  //       <Button className="w-27rem text-left" scrollY={scrollY} searchStartState={searchStartState} onClick={showLocation}  data-name="location">
  //           <div className="border-r px-14" data-name="location">
  //             <b className="block text-1.2rem" data-name="location">위치</b>
  //             <label className="a11y-hidden" htmlFor="search-input" data-name="location">
  //               여행지를 골라주세요.
  //             </label>
  //             <input
  //               id="search-input"
  //               type="text"
  //               placeholder="어디로 여행가세요?"
  //             className="block text-1.4rem text-#717171 bg-transparent"
  //             data-name="location"
  //             ></input>
  //           </div>
  //         </Button>
  
  //         <Button className="w-18rem text-left" scrollY={ scrollY } searchStartState = {searchStartState} onClick={showCalendar} data-name="calendar">
  //           <div className="border-r px-6" data-name="calendar" >
  //             <b className="block text-1.2rem" data-name="calendar">체크인</b>
  //             <span className="block text-1.4rem text-#717171"data-name="calendar" >날짜 추가</span>
  //           </div>
  //         </Button>
  
  //         <Button className="w-18rem text-left" scrollY={ scrollY } searchStartState = {searchStartState} onClick={showCalendar} data-name="calendar">
  //           <div className="border-r px-6" data-name="calendar">
  //             <b className="block text-1.2rem" data-name="calendar">체크아웃</b>
  //             <span className="block text-1.4rem text-#717171" data-name="calendar">날짜 추가</span>
  //           </div>
  //         </Button>
  
  //         <Button className="w-22rem text-left px-6" scrollY={ scrollY } searchStartState = {searchStartState} onClick={showPersonnel} data-name="personnel">
  //           <div className="relative" data-name="personnel"> 
  //             <b className="block text-1.2rem" data-name="personnel">인원</b>
  //           <span className="block text-1.4rem text-#717171" data-name="personnel">게스트 추가</span>
  //           {location || calendar || personnel ?
  //             <SubmitButton>
  //             <BiSearch size={20} className=" text-white" />
  //             <span className="text-white text-1.6rem ml-0.4rem">검색</span>
  //           </SubmitButton> :
  //             <SearchButton data-name="open" location={location} calendar={calendar} personnel={personnel} onClick={searchOnclick}>
  //             <BiSearch size={ 20 } className=" text-white"  data-name="search"/>
  //             {/* {location || calendar || personnel ? <BiSearch size={20}/> <span> className="text-white text-1.6rem ml-0.4rem">검색</span>  : <BiSearch size={20}/> } */}
  //             </SearchButton>
  //           }

  //           </div>
  //       </Button>
  //       {scrollY && !searchStartState &&
  //         <div className="flex w-full justify-between items-center pr-0.8rem" onClick={showSearchHeader} data-name="open">
  //         <span className="text-1.4rem ml-2rem" data-name="open">검색 시작하기</span>
  //         <button className="flex justify-center items-center w-3rem h-3rem rounded-full bg-airbnb hover:bg-#DE1661 transition transform hover:ease-in-out " data-name="open">
  //           <BiSearch className=" w-6 h-6 text-white" />
  //         </button>
  //         </div>}

  //         {location && (
  //           <SearchLocation >
  //             <LocationButton>
  //               <figure>
  //                 <img className="w-4.5rem h-4.5rem rounded-xl " src={'/img/mapIcon.jpg'} alt="어디로 여행가세요 아이콘"/>
  //                 <figcaption className="a11y-hidden">어디로 여행가세요?</figcaption>
  //               </figure>
  //               <span className="text-1.6rem ml-1.8rem text-#727272">가까운 여행지 둘러보기</span>
  //             </LocationButton>
  //           </SearchLocation>
  //         )}
          
  //       {calendar && (
  //         <SearchCalendar>
  //           <Calendar />
  //         </SearchCalendar>
  //         )}
  // {/* 동찬이 형이 인원수 뷰 만들어주면 여기에 달아주세요 */}
  //       {personnel && (
  //         <SearchPersonnel >
  //           <HeaderGuestEditModal />
  //         </SearchPersonnel>
  //       )}
  //     </SearchHeader>
  //   );
  // };
  

  return (
  <>
      {/* UserMenu(버거바) Modal 렌더링 */}
      {visible && (
        <Modal>
          <UserMenu hideModal={hideModal} showAuthModal={showAuthModal} authVisible={authVisible} />
        </Modal>
      )}
      {/* 로그인 회원가입 Modal 렌더링 */}
      {authVisible.type === 'login' && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible} changeModal={changeModal} onChange={onChange} loginSubmit={loginSubmit} state={state}/>
        </Modal>
      )}
      {authVisible.type === 'register' && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible} changeModal={changeModal}/>
        </Modal>
      )}
      {authVisible.type === 'form' && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible} onChange={onChange} registerSubmit={registerSubmit} state={state}/>
        </Modal>
      )}
      {socialModal && (
        <SocialRegisterModal hideModal={hideModal} onChange={onChange} socialRegisterSubmit={socialRegisterSubmit} state={state}/>
      )}

    
      <MainHeader scrollY={ scrollY } searchStartState={searchStartState}>
        <HeaderLogo color="#fff" scrollY={ scrollY }/>
        <HeaderSearch scrollY={scrollY} setScroll={setScrollY} searchStartState={searchStartState} />
        <HeaderUser />
      </MainHeader>
      </>
  );
};

export default CommonHeader;