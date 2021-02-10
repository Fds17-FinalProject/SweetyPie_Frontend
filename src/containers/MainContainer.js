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
  // 하나의 모달 회원가입 폼 모달 띄우는것 때문에 생각정리안된게있어서 일단 객체 상태로 냅둠!
  const [authVisible, setAuthVisible] = useState({
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
      console.log('form', auth);
      setAuthVisible({
        ...authVisible,
        type: 'form',
      });
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
    }
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function logit() {
      setScrollY(window.pageYOffset);
      console.log(scrollY);
      // scrollY === 30 ?
    }
    // 모달창 뜨웠을 때 스크롤 정지
    // const stopScroll = e => {
    //   console.log('얍', authVisible.state);
    //   if (authVisible.state) {
    //     e.preventDefault();
    //   }
    // }
    // window.addEventListener('touchmove', stopScroll, {
    //   passive: false
    // });
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
          <UserMenu hideModal={hideModal} showAuthModal={showAuthModal} authVisible={authVisible} />
        </Modal>
      )}
      {/* 로그인 회원가입 Modal 렌더링 */}
      {authVisible.type === 'login' && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible} changeModal={changeModal}/>
        </Modal>
      )}
      {authVisible.type === 'register' && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible} changeModal={changeModal}/>
        </Modal>
      )}
      {authVisible.type === 'form' && (
        <Modal>
          <AuthModal hideModal={hideModal} authVisible={authVisible}/>
        </Modal>
      )}
      {/* <Header
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
      /> */}
      {scrollY > 30 ? <CommonHeader
        showModal={showModal}
        modalElement={modalElement}
        visible={visible}
        showAuthModal={showAuthModal}
      /> : <Header
      showModal={showModal}
      modalElement={modalElement}
      visible={visible}
      showAuthModal={showAuthModal}
    />}
      <Main />
      <Footer />
    </div>
  );
};

export default MainContainer;
