import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModifyAccount from '../components/modify/ModifyAccount';
import { getToken, getUser, logout, withdrawal } from '../redux/lib/api/auth';
import {
  authRegister,
  changeField,
  initializeForm,
  modifyMemberInfo,
  readMemberInfo,
  socialRegisterSubmitAction,
} from '../redux/modules/auth';

const ModifyAccountContainer = () => {
  const { userInfo } = useSelector(({ auth }) => ({
    userInfo: auth.userInfo,
  }));

  const [modify, setModify] = useState({
    email: false,
    name: false,
    birthDate: false,
    password: false,
    contact: false,
  });

  // 로컬스토리지 토큰 유무
  const [checkedToken, setCheckedToken] = useState(false);
  // 스크롤 위치
  const [socialModal, setSocialModal] = useState(false);
  // 유저 메뉴 모달 초기 상태
  const [visible, setVisible] = useState(false);
  // 검색 시작 하기 눌렀을 시 모달 초기 상태
  const [searchStartState, setSearchStartState] = useState(false);

  // // 검색 시작 하기 눌렀을 시 모달 초기 상태
  // 유저 메뉴 -> 로그인, 회원가입 모달 초기상태,
  // 하나의 모달 회원가입 폼 모달 띄우는것 때문에 생각정리안된게있어서 일단 객체 상태로 냅둠!
  const [authVisible, setAuthVisible] = useState({
    // 'login' or 'register'
    type: null,
  });

  const [location, setLocation] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [personnel, setPersonnel] = useState(false);
  const [flexibleScroll, setFlexibleScroll] = useState({
    currentScroll: 0,
    scrollPlus: 0,
    scrollMinus: 0,
    scrollStatus: false,
  });
  // 검색 시작하기 onClick시 헤더 스타일 변경
  const showSearchHeader = ({ target }) => {
    if (target.dataset.name === 'open') {
      // 상태 true로 바뀌면서 스타일 변경
      setSearchStartState(true);
      // 위치 open
      setLocation(true);
    }
  };

  // 유저 메뉴 모달 open
  const showModal = () => {
    setVisible(true);
  };
  // 유저 메뉴 -> 로그인 or 회원가입 눌렀을 시 authVisible의 타입에 따라 모달 Open
  // userMenu -> menuList 컴포넌트에서 auth를 인자로 받아서 type이 로그인인지 회원가입인지 구분
  const showAuthModal = auth => {
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
    } else if (auth === 'register') {
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
  const changeModal = auth => {
    if (auth === 'register') {
      setAuthVisible({
        ...authVisible,
        type: 'login',
      });
      showAuthModal(auth);
    } else if (auth === 'login') {
      setAuthVisible({
        ...authVisible,
        type: 'register',
      });
      showAuthModal(auth);
    } else if (auth === 'form') {
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
      // setPersonnel(false);
      setSocialModal(false);
    }
  };

  //  로그인, 회원가입
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const { register, login, socialRegister, authError } = state;
  // 인풋 변경 이벤트 핸들러
  // 디스트럭처링으로 받기위해서 onChange에서 이벤트 객체와 form을 인자로 넘겨준다
  // 현재 onChange의 form이 누구인지 구분하기 위해서
  const onChange = ({ e, form }) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form,
        key: name,
        value,
      }),
    );
  };
  // 폼 등록 이벤트 핸들러
  const registerSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      contact,
      birthDate,
      password,
      passwordConfirm,
    } = register;
    dispatch(
      authRegister({
        name,
        email,
        contact,
        birthDate,
        password,
        passwordConfirm,
      }),
    );
  };

  const socialRegisterSubmit = e => {
    e.preventDefault();
    console.log(socialRegister);
    const { email, name, contact, birthDate, socialId } = socialRegister;
    dispatch(
      socialRegisterSubmitAction({ email, name, contact, birthDate, socialId }),
    );
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
      localStorage.setItem('token', token);
      setCheckedToken(true);
      setAuthVisible(false);
    } else {
      console.log('error');
    }
    const resUser = await getUser();
    console.log(resUser);
  };
  const userLogout = e => {
    console.log('e', e);
    logout();
    localStorage.removeItem('token');
    setCheckedToken(false);
  };

  console.log();

  useEffect(() => {
    // 로그인이나 회원가입 성공 시 모달창 Close
    // useEffect에서 하는 이유는 dispatch가 비동기라서 에러객체가 담기는 시점을 알 수 없기 때문에
    if (authError === null) {
      setAuthVisible(false);
    }
    // 구글로 회원가입 시 서버에서 받아온 유저정보에 socialId가 있다면 회원가입 모달창 open
    console.log('socialRegister', socialRegister.socialId);
    if (socialRegister.socialId) {
      setSocialModal(true);
    }
    // 토큰이 없디면 유저메뉴 view 변경(비 로그인 시)
    if (localStorage.getItem('token') === null) {
      setVisible(false);
      setCheckedToken(false);
    }
    // 토큰이 있다면 유저메뉴 view 변경(로그인 시)
    if (localStorage.getItem('token') !== null) {
      setVisible(false);
      setCheckedToken(true);
    }

    function wathchFlexibleScroll() {
      console.log('scrollPlus', flexibleScroll.scrollPlus);
      // console.log('scrollMinus', flexibleScroll.scrollMinus);
      // console.log('Scroll', window.scrollY);
      // console.log('currentScroll', flexibleScroll.currentScroll);
      // console.log('비교', flexibleScroll.scrollPlus < window.scrollY || window.scrollY < flexibleScroll.scrollMinus);
      if (
        flexibleScroll.scrollPlus < window.scrollY ||
        window.scrollY < flexibleScroll.scrollMinus
      ) {
        // console.log('if문');
        setSearchStartState(false);
        setLocation(false);
        setCalendar(false);
        setPersonnel(false);
        setFlexibleScroll({
          ...flexibleScroll,
          currentScroll: 0,
          scrollPlus: 0,
          scrollMinus: 0,
        });
      }
    }
    wathchFlexibleScroll();
    window.addEventListener('scroll', wathchFlexibleScroll);
  }, [authError, socialRegister.socialId, checkedToken]);
  // }, [auth, authError, dispatch]);

  const onClick = e => {
    console.log(e.target.name);
    e.preventDefault();
    // console.log(['TARGET'], e.target.name);
    setModify({ ...modify, [e.target.name]: !modify[e.target.name] });
    // console.log(['MODIFY'], modify);
  };
  const onWithdrawal = e => {
    console.log('e', e);
    withdrawal();
    localStorage.removeItem('token');
    console.log('회원삭제완료');
    // setAuthVisible(false);
    // setToken(false);
  };
  return (
    <>
      <ModifyAccount
        onClick={onClick}
        modify={modify}
        onWithdrawal={onWithdrawal}
        showModal={showModal}
        hideModal={hideModal}
        changeModal={changeModal}
        authVisible={authVisible}
        visible={visible}
        showAuthModal={showAuthModal}
        showSearchHeader={showSearchHeader}
        searchStartState={searchStartState}
        location={location}
        calendar={calendar}
        personnel={personnel}
        setLocation={setLocation}
        setPersonnel={setPersonnel}
        setCalendar={setCalendar}
        socialModal={socialModal}
        onChange={onChange}
        registerSubmit={registerSubmit}
        loginSubmit={loginSubmit}
        socialRegisterSubmit={socialRegisterSubmit}
        userLogout={userLogout}
        state={state}
        checkedToken={checkedToken}
        userInfo={userInfo}
        modifyMemberInfo={modifyMemberInfo}
        dispatch={dispatch}
        setModify={setModify}
      />
    </>
  );
};
export default ModifyAccountContainer;
