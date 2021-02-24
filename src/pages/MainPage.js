import React from 'react';
import MainContainer from '../containers/MainContainer';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>홈 | SweetyPie💛</title>
      </Helmet>
      <div>
        <MainContainer />
      </div>
    </>
  );
};

export default MainPage;
