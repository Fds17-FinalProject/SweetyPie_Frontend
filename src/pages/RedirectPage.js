import React, { useEffect } from 'react';
import axios from 'axios';

const RedirectPage = ({ history }) => {
  const postAuth = async () => {
    console.log(window.location.href);
    const url = window.location.search;
    try {
      const res = await axios(`http://13.124.101.93/api/login/google/${url}`);
      // console.log(res.request.status === 203) 이면 회원가입 모달창 오픈;
      history.push('/');
      // 모달창 띄우기
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(history);
  // 랜더링 될 때 토큰을 url에 담아서 get 요청
  useEffect(() => {
    postAuth();
  });

  return <div>리다이렉트 페이지</div>;
};

export default RedirectPage;
