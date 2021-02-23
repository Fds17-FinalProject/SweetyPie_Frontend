import React from 'react';
import { useHistory } from 'react-router';
import Main from '../components/main/Main';




const MainContainer = () => {
  const history = useHistory();
  const searchMainCity = (props) => {
    history.push(`/accommodations/search?searchKeyword=${props}`);
  };

  const searchAccommType = (props) => {
    history.push(`/accommodations/search?types=${props}`);
  }
  return (
    <>
      <Main searchMainCity={searchMainCity} searchAccommType={searchAccommType}/>
     </>
  );
};

export default MainContainer;
