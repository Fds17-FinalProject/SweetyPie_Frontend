import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/main/Header';
import CommonHeader from '../components/common/CommonHeader';
import Main from '../components/main/Main';
import Footer from '../components/main/Footer';
import Modal from '../components/common/Modal';
import UserMenu from '../components/main/UserMenu';
import AuthModal from '../components/main/AuthModal';

const MainContainer = () => {
  // 유저 메뉴 모달 초기 상태
  const [visible, setVisible] = useState(false);
  // 유저 메뉴 -> 로그인, 회원가입 모달 초기상태,
  // 하나의 모달 컴포넌트로 두개의 모달을 넣기 위해서 객체 상태로 정의
  const [authVisible, setAuthVisible] = useState({
    state: false,
    // 'login' or 'register'
    type: null,
  });

  const modalElement = useRef(null);
  // 유저 메뉴 모달 open
  const showModal = () => {
    setVisible(true);
  };
  // 유저 메뉴 -> 로그인 or 회원가입 눌렀을 시 authVisible의 타입에 따라 모달 Open 
  // userMenu -> menuList 컴포넌트에서 auth를 인자로 받아서 type이 로그인인지 회원가입인지 구분
  const showAuthModal = ( auth ) => {
    if (auth === 'login') {
      // 로그인 or 회원가입 누를 시 유저메뉴 close 
      setVisible(false);
      // type에 들어온 조건 별로 모달 Open
      setAuthVisible({
        ...authVisible,
        state: true,
        type: 'login',
      });
    }
    if (auth === 'register') {
      setVisible(false);
      setAuthVisible({
        ...authVisible,
        state: true,
        type: 'register',
      });
    }
  };
  // 모달 close
  const hideModal = ({ target }) => {
    if (target.dataset.name) {
      setVisible(false);
      setAuthVisible(false);
    }
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function logit() {
      setScrollY(window.pageYOffset);
      // scrollY === 30 ?
    }
    (function watchScroll() {
      window.addEventListener('scroll', logit);
    })();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, [scrollY]);

  return (
    <div className="flex-column flex-nowrap relative">
      {/* UserMenu Modal 렌더링 */}
      {/* UserMenu -> MenuList에 showAuthModal, authVisible props 전달 */}
      {visible && (
        <Modal>
          <UserMenu hideModal={hideModal} showAuthModal={showAuthModal} authVisible={authVisible}/>
        </Modal>
      )}
      {/* 로그인 회원가입 Modal 렌더링 */}
      {authVisible.state && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible}/>
        </Modal>
      )}
      <Header
        showModal={showModal}
        modalElement={modalElement}
        visible={visible}
        showAuthModal={showAuthModal}
      />
      <CommonHeader
        showModal={showModal}
        modalElement={modalElement}
        visible={visible}
        showAuthModal={showAuthModal}
      />
      <Main />
      <Footer />
    </div>
  );
};

export default MainContainer;
