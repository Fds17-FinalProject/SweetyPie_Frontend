import React, { useEffect, useState } from 'react';
import CommonHeader from '../components/common/CommonHeader';
import { throttle } from 'lodash';
import { changeField, initializeForm, authRegister, authLogin } from "../redux/modules/auth";
import { useDispatch, useSelector } from 'react-redux';

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
  
  // 스크롤 위치
  const [scrollY, setScrollY] = useState(false);
  // 3번째 헤더에서 스크롤 발생시 상태 false로 만들어서 애니메이션 되돌리기 위해서 초기값 할당
  // let currentScroll = window.scrollY;
  // const [currentScrollY, setCurrentScrollY] = useState(0);
  // // x = 현재 스크롤 값 + 150 , y = 현재 스크롤 값 -150 로직이 잘 돌아가면 이름바꿀게요 ..
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // useEffect(() => {

  //   function watchScroll() {
  //     window.scrollY > 20 ? setScrollY(true) : setScrollY(false);
  //     // console.log('현재 스크롤 +- 150', x, y);
  //     // console.log('현재 스크롤', window.scrollY);
  //     // if (x < window.scrollY || y > window.scrollY) {
  //     //   setSearchStartState(false);
  //     //   setLocation(false);
  //     //   setCalendar(false);
  //     //   setPersonnel(false);
  //     // }
  //   }; 
  //   window.addEventListener('scroll', throttle(watchScroll, 150));
  //   window.addEventListener('scroll', scrollClose)
  //   return () => {
  //     window.removeEventListener('scroll', watchScroll);
  //   };
  // }, []);

    // 유저 메뉴 모달 초기 상태
    const [ visible, setVisible ] = useState(false);
    // // 검색 시작 하기 눌렀을 시 모달 초기 상태
    // const [searchStartState, setSearchStartState] = useState(false);
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
      // socialRegister form
      // else if (auth === 'socialRegister') {
      //   setAuthVisible({
      //     ...authVisible,
      //     type: 'socialRegister',
      //   });
      // }
    };

  
  
    // 모달 close
    const hideModal = ({ target }) => {
      if (target.dataset.name) {
        setVisible(false);
        setAuthVisible(false);
        setPersonnel(false);
      }
    };
  
// 검색 시작하기 onClick시 헤더 스타일 변경
  const showSearchHeader = ({ target }) => {
    if (target.dataset.name === 'open') {
      // 상태 true로 바뀌면서 스타일 변경
      setSearchStartState(true);
      // 위치 open
      setLocation(true);
      // // onClick시 현재 스크롤 값 저장
      // currentScroll = scrollY;
      // let currentScroll = window.scrollY;
      // setCurrentScrollY(currentScroll);
      // // 현재 스크롤 값에서 +-150을 벗어날 시 스타일 다시 되돌리기 
      // setX((currentScroll + 500));
      // setY((currentScroll - 500));
    }
  };
  // const scrollClose1 = () => {
  //   // console.log('현재 스크롤 +- 150', x, y);
  //   // console.log('현재 스크롤', window.scrollY);
  //   if (x < currentScrollY|| y > currentScrollY) {
  //     setSearchStartState(false);
  //     setLocation(false);
  //     setCalendar(false);
  //     setPersonnel(false);
  //   }
  // }

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

//  회원가입
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const { register, login } = state;
  console.log('register', register);
  console.log('login', login);
  console.log('state', state);
  // const { login } = state;
  // console.log('register', register);
  // console.log('state', state);
  // console.log('register', form);
  // console.log('state', state.register);

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
  // input focus 벗어 날때 검증
  // 폼 등록 이벤트 핸들러
  const registerSubmit = e => {
    e.preventDefault();
    const { name, email, contact, birthDate, password, passwordConfirm } = register;
    // if (password !== passwordConfirm) {
      // 오류 처리
    // }
    dispatch(authRegister({ name, email, contact, birthDate, password, passwordConfirm }));
  };
  
  const loginSubmit = e => {
    e.preventDefault();
    const { email, password } = login;
    dispatch(authLogin({ email, password }));
  };

 

  useEffect(() => {
    // const scrollClose = () => {
      // console.log('현재 스크롤 +- 150', x, y);
      // console.log('현재 스크롤', window.scrollY);
      // if (x < window.scrollY || y > window.scrollY) {
      //   setSearchStartState(false);
      //   setLocation(false);
      //   setCalendar(false);
      //   setPersonnel(false);
    //   setX((window.scrollY + 500));
    //   setY((window.scrollY - 500));
    //   scrollClose1();
    // }

    // if (authError) {
    //   console.log('에러');
    //   console.log(authError);
    //   return;
    // }
    // else if (auth) {
    //   console.log('회원가입 성공');
    //   console.log(auth);
    // }

  function watchScroll() {
    window.scrollY > 20 ? setScrollY(true) : setScrollY(false);
    }; 
    

  window.addEventListener('scroll', throttle(watchScroll, 150));
  // window.addEventListener('scroll', scrollClose)
  return () => {
    window.removeEventListener('scroll', watchScroll);
  };
}, [dispatch]);
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

        onChange={onChange}
        registerSubmit={registerSubmit}
        loginSubmit={loginSubmit}
        state={state}
        // form={form}
      />  
    </>
  )
};

export default CommonHeaderContainer;