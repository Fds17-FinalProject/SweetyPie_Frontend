import React from 'react';
import CommonHeader from './common/CommonHeader';
import Footer from './Main/Footer';
import { Link } from 'react-router-dom';

const res = {
  email: "gg2922914@gmail.com",
  name: "영서 임",
  birthDate: "1995년 10월 28일",
  password:"*******",
  contact: "+82 10 6525 2914",
}

const ModifyAccount = () => {
  return (
    <div>
      <CommonHeader />
      <div className="max-w-screen-2xl w-full h-screen flex-grow-1 px-32 pt-32 ">
        <h1 className="a11y-hidden">개인정보 수정</h1>
        <Link>계정</Link>
        <h2 className="text-3.2rem font-extrabold text-#727272">개인정보</h2>
        <div className="flex justify-between">
          {/* left */}
          <div className=" w-7/12	 mr-48 bg-gray-300">
            <div className="flex relative flex-wrap border-b border-#rgb235">
              <b className="w-full text-1.6rem">이메일</b>
              <span className="w-full pt-3.3 pb-8.4">{res.email}</span>
              <button className="absolute top-0 right-0">수정</button>
            </div>

            <div className="flex relative flex-wrap border-b border-#rgb235">
              <b className="w-full">이름</b>
              <span className="w-full">{res.name}</span>
              <button className="absolute top-0 right-0">수정</button>
            </div>
          </div>
          {/* right */}
          <div className=" w-2/6 bg-#717171"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ModifyAccount;
