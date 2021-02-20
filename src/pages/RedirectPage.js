import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { createAction } from 'redux-actions';
import { useDispatch, useSelector } from 'react-redux';
import { socialRegister } from '../redux/modules/auth';
// import SVG from '../assets/svg';
// import { call, put } from 'redux-saga/effects';
// import { finishLoading, startLoading } from '../modules/loading';


const RedirectPage = ({ history }) => {

  const state = useSelector(state => state.auth.socialRegister);

  const dispatch = useDispatch();
  const postAuth = useCallback(async () => {
    
    const url = window.location.search;
    try {
      const res = await axios.get(`http://3.34.122.155/api/login/google${url}`);
      // console.log(res.request.status === 203) 이면 회원가입 모달창 오픈;
      // history.push('/');
      // 모달창 띄우기
      console.log('res', res);
      await dispatch(socialRegister(res.data));
      // const token = res.data.token;
      // if (token) {
      //   localStorage.setItem('token', token);
      // }
      // else {
      //   console.log('error');
      // }
      history.push('/');
      
    } catch (error) { 
      console.log(error);
    }
    console.log('statw2', state);
  }, []);

  // 랜더링 될 때 토큰을 url에 담아서 get 요청
  useEffect(() => {
    postAuth();
  },[postAuth]);

  return (
    <div className="w-screen h-screen flex justify-center items-center" >
      {/* <SVG name="logo" width="102px" height="32px" /> */}
      <VscLoading className="text-airbnb w-40 h-40 animate-spin	"/>
      {/* <img src="svg-loaders/puff.svg" width="50" alt=""></img> */}
    </div>
  );
};

export default RedirectPage;

// Action type
