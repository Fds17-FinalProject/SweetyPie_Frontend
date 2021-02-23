import React from 'react';
import RoomDetailContainer from '../containers/RoomDetailContainer';
import { Helmet } from 'react-helmet-async';

const RoomDetailPage = () => {
  return (
    <>
      <Helmet>
        {/* <title>숙소 상세보기 - Airbnb</title> */}
        <title>💛스위티파이 쪼앙💛</title>
      </Helmet>
      <div>
        <RoomDetailContainer />
      </div>
    </>
  );
};

export default RoomDetailPage;
