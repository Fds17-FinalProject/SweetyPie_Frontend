import React from 'react';
import { ImInstagram, ImFacebook } from 'react-icons/im';
import { IoLogoTwitter } from 'react-icons/io';
import styled from 'styled-components';
const FooterWrap = styled.footer`
  width: 100%;
  height: 5rem;
  background: #f3f4f6;
  padding-left: 8rem;
  padding-right: 8rem;
  transform: translateY(30rem);
`;
const FooterContainer = () => {
  return (
    <div className="flex justify-between items-center w-full h-full border-t py-10 ">
      <div className="text-1.4rem">
        <FooterContent />
      </div>
      <div>
        <SnsContainer />
      </div>
    </div>
  );
};
const FooterContent = () => {
  return (
    <>
      <span>&#169; 2021 SweetyPie, Inc. All rights reserved</span>
      <span className="text-center w-8 inline-block text-2xl"> ㆍ </span>
      <a href="https://www.airbnb.co.kr/help/article/2855">개인정보 처리방침</a>
      <span className="text-center w-8 inline-block text-2xl"> ㆍ </span>
      <a href="https://www.airbnb.co.kr/help/article/2908">이용약관</a>
      <span className="text-center w-8 inline-block text-2xl">ㆍ</span>
      <a href="https://www.airbnb.co.kr/sitemaps/v2">사이트맵</a>
      <span className="text-center w-8 inline-block text-2xl">ㆍ</span>
      <a href="https://www.airbnb.co.kr/home/updated_cancellation_policies?korean_strict_policy=true#strict">
        한국의 변경된 환불 정책
      </a>
      <span className="text-center w-8 inline-block text-2xl">ㆍ</span>
      <a href="https://www.airbnb.co.kr/about/company-details">회사 세부정보</a>
    </>
  );
};
const SnsContainer = () => {
  return (
    <ul className="flex">
      <li className="mr-9">
        <a href="https://instagram.com/airbnb">
          <ImInstagram className="w-7 h-7" />
        </a>
      </li>
      <li className="mr-9">
        <a href="https://twitter.com/airbnb">
          <IoLogoTwitter className="w-7 h-7" />
        </a>
      </li>
      <li className="mr-9">
        <a href="https://www.facebook.com/AirbnbKorea">
          <ImFacebook className="w-7 h-7" />
        </a>
      </li>
    </ul>
  );
};
const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer />
    </FooterWrap>
  );
};
export default Footer;
