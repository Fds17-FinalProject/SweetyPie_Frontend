import React from 'react';
import { ImInstagram, ImFacebook } from 'react-icons/im';
import { IoLogoTwitter } from 'react-icons/io';

const FooterContainer = () => {
  return (
    <div className="w-full h-full border-t py-10 flex justify-between items-center">
      <div>
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
      <span className="text-2xl">
        &#169; 2021 Airbnb, Inc. All rights reserved
      </span>
      <span className="text-center w-8 inline-block text-2xl">.</span>
      <a href="#" className="text-2xl">
        개인정보 처리방침
      </a>
      <span className="text-center w-8 inline-block text-2xl">.</span>
      <a href="#" className="text-2xl">
        이용약관
      </a>
      <span className="text-center w-8 inline-block text-2xl">.</span>
      <a href="#" className="text-2xl">
        사이트맵
      </a>
      <span className="text-center w-8 inline-block text-2xl">.</span>
      <a href="#" className="text-2xl">
        한국의 변경된 환불 정책
      </a>
      <span className="text-center w-8 inline-block text-2xl">.</span>
      <a href="#" className="text-2xl">
        회사 세부정보
      </a>
    </>
  );
};

const SnsContainer = () => {
  return (
    <ul className="flex">
      <li className="mr-9">
        <a href="#">
          <ImInstagram className="w-7 h-7" />
        </a>
      </li>
      <li className="mr-9">
        <a href="#">
          <IoLogoTwitter className="w-7 h-7" />
        </a>
      </li>
      <li className="mr-9">
        <a href="#">
          <ImFacebook className="w-7 h-7" />
        </a>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl h-20 px-32 bg-gray-100">
      <FooterContainer />
    </footer>
  );
};

export default Footer;
