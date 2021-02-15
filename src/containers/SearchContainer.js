import React, { useEffect } from 'react';
import SearchTemplate from '../components/search/SearchTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { getAccommList } from '../redux/modules/accommodations';
import { useLocation } from 'react-router-dom';

const SearchContainer = () => {
  const accommodations = useSelector(state => state.accommodations);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAccommList(location.search));
  }, [dispatch, location.search]);

  return <SearchTemplate accommodations={accommodations.accommodations} />;
};

export default SearchContainer;
