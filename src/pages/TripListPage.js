import React from 'react';
import TripListContainer from '../containers/TripListContainer';
import { Helmet } from 'react-helmet-async';

const TripListPage = () => {
  return (
    <>
      <Helmet>
        <title>여행 목록 | SweetyPie💛</title>
      </Helmet>
      <div>
        <TripListContainer />
      </div>
    </>
  );
};

export default TripListPage;
