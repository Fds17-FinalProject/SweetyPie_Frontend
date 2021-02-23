import React from 'react';
import { useHistory } from 'react-router';
import Main from '../components/main/Main';




const MainContainer = () => {
  const history = useHistory();
  const searchMainCity = (props) => {
    history.push(`/accommodations/search?searchKeyword=${props}`);
  };

  return (
    <>
      <Main searchMainCity={searchMainCity}/>
     </>
  );
};

export default MainContainer;
