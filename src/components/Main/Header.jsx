// import React from 'react';
// import '../../assets/output.css';
// import { BiSearch } from 'react-icons/bi';
// import styled from 'styled-components';
// import HeaderLogo from './HeaderLogo';
// import HeaderUser from './HeaderUser';

// const Button = styled.button.attrs(() => ({type: 'button'}))`
//   :hover {
//     background: #ebebeb;
//     border-radius: 999rem;
//     z-index: 1;
//   }
// `;

// // const StMainHeader = styled.header`
// //   box-sizing: border-box;
// //   z-index: 100;
// //   position: fixed;
// //   display: flex;
// //   width: 100%;
// //   justify-content: space-between;
// //   margin: 0;
// //   height: ${({ isSearchBtnClicked }) =>
// //     isSearchBtnClicked ? '180px' : '80px'};
// //   background: ${({ isScrollTop }) =>
// //     isScrollTop
// //       ? 'transparent'
// //       : css`
// //           ${({ theme }) => theme.color.white}
// //         `};
// //   border: ${({ isScrollTop }) =>
// //     !isScrollTop && css`1px solid ${({ theme }) => theme.color.line}`};
// //   box-shadow: ${({ isScrollTop }) =>
// //     !isScrollTop && css`0px 2px 4px rgba(0,0,0,0.3)`};
// //   padding: 20px 80px 15px 80px;
// //   @media ${({ theme }) => theme.size.iPad} {
// //     padding: 20px 40px 15px 40px;
// //     height: ${({ isSearchBtnClicked }) =>
// //       isSearchBtnClicked ? '230px' : '80px'};
// //   }
// // `;

// // 얘가 애니메이션이 생겨야한다 현재는 1번헤더인 상태 이상태에서 애니메이션으로 2번 헤더로 바꿔준다
// // 후에 검색 시작하기 누르면 1번헤더로 돌아가서 백그라운드 컬러, 로고 컬러, 어디로여행가세요 모달 오픈  


// const HeaderSearch = () => {
//   return (
//     <form>
//       <div
//         className="flex border rounded-full bg-white w-85rem h-28 mt-44">
//         <Button className="w-27rem text-left">
//           <div className="border-r px-14">
//             <b className="block text-1.2rem">위치</b>
//             <label className="a11y-hidden" htmlFor="search-input">
//               여행지를 골라주세요.
//             </label>
//             <input
//               id="search-input"
//               type="text"
//               placeholder="어디로 여행가세요?"
//               className="block text-1.4rem text-#717171 bg-transparent"
//             ></input>
//           </div>
//         </Button>

//         <Button className="w-18rem text-left">
//           <div className="border-r px-6">
//             <b className="block text-1.2rem">체크인</b>
//             <span className="block text-1.4rem text-#717171">날짜 추가</span>
//           </div>
//         </Button>

//         <Button className="w-18rem text-left">
//           <div className="border-r px-6">
//             <b className="block text-1.2rem">체크아웃</b>
//             <span className="block text-1.4rem text-#717171">날짜 추가</span>
//           </div>
//         </Button>

//         <Button className="w-22rem text-left px-6">
//           <div className="relative">
//             <b className="block text-1.2rem">인원</b>
//             <span className="block text-1.4rem text-#717171">게스트 추가</span>
//             <button className="absolute right-0 -top-2 flex justify-center items-center w-4.8rem h-4.8rem rounded-full bg-airbnb hover:bg-#DE1661 transition transform hover:ease-in-out">
//               <BiSearch className=" w-6 h-6 text-white" />
//               {/* <div className="hidden">검색</div> */}
//             </button>
//           </div>
//         </Button>
//       </div>
//     </form>
//   );
// };

// const Header = ({ showModal, visible }) => {
//   return (
//     <header className="max-w-screen-2xl w-full h-32 px-32 absolute	">
//       <div className=" w-full h-32  flex items-center justify-between">
//         <HeaderLogo color="#FFf" />
//         <HeaderSearch />
//         <HeaderUser showModal={showModal} visible={visible} />
//       </div>
//     </header>
//   );
// };

// export default Header;

