import React from 'react';
import RoomDetailContainer from '../containers/RoomDetailContainer';
import { Helmet } from 'react-helmet-async';

const RoomDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>숙소 상세보기 | SweetyPie💛</title>
      </Helmet>
      <div>
        <RoomDetailContainer />
      </div>
    </>
  );
};

export default RoomDetailPage;
