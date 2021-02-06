import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/main/Header';
import CommonHeader from '../components/common/CommonHeader';
import Main from '../components/main/Main';
import Footer from '../components/main/Footer';
import Modal from '../components/common/Modal';
import UserMenu from '../components/main/UserMenu';
import AuthModal from '../components/main/AuthModal';

const MainContainer = () => {
  const [ visible, setVisible ] = useState(false);
  const [authVisible, setAuthVisible] = useState({
    state: false,
    type: null,
  });
  const modalElement = useRef(null);
  const showModal = () => {
    setVisible(true);
  };
  const showAuthModal = ( auth ) => {
    console.log(auth);
    if (auth === 'login') {
      setVisible(false);
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
      {visible && (
        <Modal>
          <UserMenu hideModal={hideModal} showAuthModal={showAuthModal} authVisible={authVisible}/>
        </Modal>
      )}
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
