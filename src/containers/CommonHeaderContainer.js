import React, { useEffect, useState } from 'react';
import CommonHeader from '../components/common/CommonHeader';
import { throttle } from 'lodash';
import { changeField, initializeForm, authRegister, socialRegisterSubmitAction} from "../redux/modules/auth";
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUser } from '../redux/lib/api/auth';

const CommonHeaderContainer = (
  { location,
    calendar,
    personnel,
    setLocation,
    setCalendar,
    setPersonnel,
    searchStartState,
    setSearchStartState
  }) => {
    // 로컬스토리지 토큰 유무 
    const [token, setToken] = useState(false);
    // 스크롤 위치
    const [scrollY, setScrollY] = useState(false);
    const [socialModal, setSocialModal] = useState(false);
    // 유저 메뉴 모달 초기 상태
    const [ visible, setVisible ] = useState(false);
    // // 검색 시작 하기 눌렀을 시 모달 초기 상태
    // 유저 메뉴 -> 로그인, 회원가입 모달 초기상태,
    // 하나의 모달 회원가입 폼 모달 띄우는것 때문에 생각정리안된게있어서 일단 객체 상태로 냅둠!
    const [ authVisible, setAuthVisible ] = useState({
      // 'login' or 'register'
      type: null,
    });
    // 유저 메뉴 모달 open
    const showModal = () => {
      setVisible(true);
    };
    // 유저 메뉴 -> 로그인 or 회원가입 눌렀을 시 authVisible의 타입에 따라 모달 Open 
    // userMenu -> menuList 컴포넌트에서 auth를 인자로 받아서 type이 로그인인지 회원가입인지 구분
    const showAuthModal = (auth) => {
      if (auth === 'login') {
        // 로그인 or 회원가입 누를 시 유저메뉴 close 
        setVisible(false);
        // type에 들어온 조건 별로 모달 Open
        setAuthVisible({
          ...authVisible,
          type: 'login',
        });
        // open시 login form 초기화
        dispatch(initializeForm('login'));
      }
      else if (auth === 'register') {
        setVisible(false);
        setAuthVisible({
          ...authVisible,
          type: 'register',
        });
      }
    };
  
    // 회원가입 모달에서 아이디가 있으세요? -> 로그인 버튼
    // 온클릭 이벤트 만들어서 type:'login'
    // 로그인 모달에서 아이디가 없으세요? -> 회원가입 버튼
    // type: 'register'
    const changeModal = (auth) => {
      if (auth === 'register') {
        setAuthVisible({
          ...authVisible,
          type: 'login',
        });
        showAuthModal(auth);
      }
      else if (auth === 'login') {
        setAuthVisible({
          ...authVisible,
          type: 'register',
        });
        showAuthModal(auth);
      }
      else if (auth === 'form') {
        setAuthVisible({
          ...authVisible,
          type: 'form',
        });
        // open 시 회원가입 폼 초기화 
        dispatch(initializeForm('register'));
      }
    };

  
    // 모달 close
    const hideModal = ({ target }) => {
      if (target.dataset.name) {
        setVisible(false);
        setAuthVisible(false);
        setPersonnel(false);
        setSocialModal(false);
      }
    };
  
// 검색 시작하기 onClick시 헤더 스타일 변경
  const showSearchHeader = ({ target }) => {
    if (target.dataset.name === 'open') {
      // 상태 true로 바뀌면서 스타일 변경
      setSearchStartState(true);
      // 위치 open
      setLocation(true);
    }
  };

  // 헤더 위치 (어디로 여행가세요?)
  const showLocation = ({ target }) => {
    if (target.dataset.name === 'location') {
      setLocation(true);
      setCalendar(false);
      setPersonnel(false);
    }
  };
  // 헤더 켈린더 ( 체크인, 체크아웃 )
  const showCalendar = ({ target }) => {
    if (target.dataset.name === 'calendar') {
      setCalendar(true);
      setLocation(false);
      setPersonnel(false);
    }
  };
  // 헤더 인원 수
  const showPersonnel = ({ target }) => {
    if (target.dataset.name === 'personnel') {
      setPersonnel(true);
      setLocation(false);
      setCalendar(true);
    }
  };
  // 헤더에 검색 버튼 누를 시 location: true 하면서 검색 버튼 스타일 변경
  const searchOnclick = ({ target }) => {
    if (target.dataset.name === 'search') {
      setLocation(true);
    }
  };

  // const { user } = useSelector(user => user.user);
  // console.log('user', user);
//  로그인, 회원가입
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const { register, login, socialRegister, authError } = state;
  
  // console.log('authError', authError);
  // console.log('state', state);
  // 인풋 변경 이벤트 핸들러
  // 디스트럭처링으로 받기위해서 onChange에서 이벤트 객체와 form을 인자로 넘겨준다
  // 현재 onChange의 form이 누구인지 구분하기 위해서
  const onChange = ({e, form}) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form,
        key: name,
        value,
      })
    );
  };
  // 폼 등록 이벤트 핸들러
  const registerSubmit = e => {
    e.preventDefault();
    const { name, email, contact, birthDate, password, passwordConfirm } = register;
    dispatch(authRegister({ name, email, contact, birthDate, password, passwordConfirm }));
      if (authError !== null) {
        setAuthVisible(false);
      }
  };

  // const socialRegisterSubmit = e => {
  //   console.log('event 잘 받았니', e);
  //   console.log('잘 들어오니?');
  //   e.preventDefault();
  //   console.log(socialRegister);
  //   const { email, name, contact, birthDate, socialId } = socialRegister;
  //   dispatch(socialRegisterSubmitAction({ email, name, contact, birthDate, socialId }));
  // };
  
  const socialRegisterSubmit = async e => {
    e.preventDefault();
    console.log(socialRegister);
    const { email, name, contact, birthDate, socialId } = socialRegister;
    dispatch(socialRegisterSubmitAction({ email, name, contact, birthDate, socialId }));
    console.log('authError', authError);
    if (authError !== null) {
      setSocialModal(false);
    }
  };

  
  const loginSubmit = async e => {
    e.preventDefault();
    const { email, password } = login;
    // const res = await dispatch(authLogin({ email, password }));
    const res = await getToken({ email, password });
    const token = res.data.token;
    console.log('RES', res);
    console.log('token', token);
    // error객체가 오면 에러메세지 띄워주고(서버에서 준 에러메세지 띄워주는거 아직 미구현)
    // 성공하면 history.push('/)
    if (token) {
      console.log('123');
      localStorage.setItem('token', token);
      // history.push('/');
      setToken(true);
      setAuthVisible(false);
    }
    else {
      console.log('error');
    }
    const resUser = await getUser();
    console.log(resUser);
  };

  

  useEffect(() => {
    // socialRegister에 socialID가 있다면 setSocialModal(true);
    // const token = localStorage.getItem('token');
    // if (token) {
    //   console.log('234');
    //   localStorage.setItem('token', token);
    //   // history.push('/');
    //   setToken(true);
    // } else {
    //   setToken(false);
    // }

    console.log('socialRegister', socialRegister.socialId);
    if (socialRegister.socialId) {
      setSocialModal(true);
    }

    function watchScroll() {
    window.scrollY > 20 ? setScrollY(true) : setScrollY(false);
    }; 
    

  window.addEventListener('scroll', throttle(watchScroll, 150));
  // window.addEventListener('scroll', scrollClose)
  return () => {
    window.removeEventListener('scroll', watchScroll);
  };
}, [dispatch, socialRegister.socialId]);
// }, [auth, authError, dispatch]);


  return (
    <>
      <CommonHeader
        showModal={showModal}
        hideModal={hideModal}
        changeModal={changeModal}
        authVisible={authVisible}
        visible={visible}
        showAuthModal={showAuthModal}
        showSearchHeader={showSearchHeader}
        searchStartState={searchStartState}
        showCalendar={showCalendar}
        showLocation={showLocation}
        showPersonnel={showPersonnel}
        location={location}
        calendar={calendar}
        personnel={personnel}
        scrollY={scrollY}
        searchOnclick={searchOnclick}

        socialModal={socialModal}
        onChange={onChange}
        registerSubmit={registerSubmit}
        loginSubmit={loginSubmit}
        socialRegisterSubmit={socialRegisterSubmit}
       
        state={state}
        token={token}
        // form={form}
      />  
    </>
  )
};

export default CommonHeaderContainer;