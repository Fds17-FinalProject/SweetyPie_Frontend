import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { socialRegister } from '../redux/modules/auth';

const RedirectPage = ({ history }) => {

  const state = useSelector(state => state.auth.socialRegister);

  const dispatch = useDispatch();
  const postAuth = useCallback(async () => {
    
    const url = window.location.search;
    console.log('url', url);
    try {
      const res = await axios.get(`https://sweetypie.gq/api/login/google${url}`);
      // 모달창 띄우기
      console.log('res', res);
      await dispatch(socialRegister(res.data));
      const token = res.data.token;
      console.log('token', token);
      if (token) {
        localStorage.setItem('token', token);
      }
      else {
        console.log('error');
      }
      history.push('/');
      
    } catch (error) { 
      console.log(error);
    }
    console.log('statw2', state);
  }, [dispatch, history, state]);

  // 랜더링 될 때 토큰을 url에 담아서 get 요청
  useEffect(() => {
    postAuth();
  },[postAuth]);

  return (
    <div className="w-screen h-screen flex justify-center items-center" >
      <VscLoading className="text-airbnb w-40 h-40 animate-spin	"/>
    </div>
  );
};

export default RedirectPage;

// Action type
