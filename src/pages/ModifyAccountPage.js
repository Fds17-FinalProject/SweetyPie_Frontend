import React from 'react';
import ModifyAccountContainer from '../containers/ModifyAccountContainer';
import { Helmet } from 'react-helmet-async';

const ModifyAccountPage = () => {
  return (
    <>
      <Helmet>
        <title>개인정보 | SweetyPie💛</title>
      </Helmet>
      <div>
        <ModifyAccountContainer />
      </div>
    </>
  );
};

export default ModifyAccountPage;
