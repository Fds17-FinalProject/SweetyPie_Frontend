import React from 'react';
import { useHistory } from 'react-router';
import Main from '../components/main/Main';

const MainContainer = () => {
  const history = useHistory();
  const searchMainCity = props => {
    history.push(`/accommodations/search?searchKeyword=${props}&zoom=9`);
  };

  const searchAccommType = props => {
    history.push(`/accommodations/search?types=${props}&zoom=15`);
  };
  return (
    <>
      <Main
        searchMainCity={searchMainCity}
        searchAccommType={searchAccommType}
      />
    </>
  );
};

export default MainContainer;
