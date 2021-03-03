import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import { Helmet } from 'react-helmet-async';

const searchPage = () => {
  return (
    <>
      <Helmet>
        <title>숙소 검색 | SweetyPie💛</title>
      </Helmet>
      <div>
        <SearchContainer />
      </div>
    </>
  );
};

export default searchPage;
