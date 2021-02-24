import React from 'react';
import WishListContainer from '../containers/WishListContainer';
import { Helmet } from 'react-helmet-async';

const WishListPage = () => {
  return (
    <>
      <Helmet>
        <title>저장 목록 | SweetyPie💛</title>
      </Helmet>
      <div>
        <WishListContainer />
      </div>
    </>
  );
};

export default WishListPage;
