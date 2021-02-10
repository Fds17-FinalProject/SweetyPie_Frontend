import React, { useEffect } from 'react';
import axios from 'axios';
import SearchTemplate from '../components/search/SearchTemplate';
import { useDispatch, useSelector } from 'react-redux';
import accommodations, {
  getAccommList,
  getAccommListSaga,
} from '../redux/modules/accommodations';
import { getList } from '../redux/lib/api';

const SearchContainer = () => {
  const accommodations = useSelector(state => state.accommodations);
  const dispatch = useDispatch();

  useEffect(() => {
    const response = getList();
    dispatch(getAccommList(response));
  }, [dispatch]);
  return <SearchTemplate accommodations={accommodations.accommodations} />;
};

export default SearchContainer;
