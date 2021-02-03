// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import ReactDOM from 'react-dom';

// import Header from '../components/Main/Header';
// import CommonHeader from '../components/common/CommonHeader';
// import Main from '../components/Main/Main';
// import Footer from '../components/Main/Footer';

// const MainContainer = () => {
//     const [scrollY, setScrollY] = useState(0);
//           useEffect(() => {
//               function logit() {
//                 setScrollY(window.pageYOffset);
//               }
//              (function watchScroll() {
//                 window.addEventListener('scroll', logit);
//           }());
//           return () => {
//             window.removeEventListener('scroll', logit);
//           };
//         },[scrollY]);

//   return (
//       <div className="flex-column flex-nowrap relative">
//       {scrollY > 30 ? <CommonHeader/> : <Header />}
//       <Main />
//       <Footer />
//     </div>
//   );
// };

// export default MainContainer;

import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Main/Header';
import CommonHeader from '../components/common/CommonHeader';
import Main from '../components/Main/Main';
import Footer from '../components/Main/Footer';

const MainContainer = () => {
    const [scrollY, setScrollY] = useState(0);
          useEffect(() => {
              function logit() {
                  setScrollY(window.pageYOffset);
              }
             (function watchScroll() {
                window.addEventListener('scroll', logit);
          }());
          return () => {
            window.removeEventListener('scroll', logit);
          };
        },[scrollY]);

  return (
      <div className="flex-column flex-nowrap relative">
          {scrollY > 30 ? <CommonHeader/> : <Header />}
          {/* <Header /> */}
      {/* <CommonHeader /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default MainContainer;
