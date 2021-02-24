import React, { useEffect } from 'react';
import SearchTemplate from '../components/search/SearchTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { getAccommList } from '../redux/modules/accommodations';
import { useLocation } from 'react-router-dom';
import { getPricesAction } from '../redux/modules/payment';

const SearchContainer = () => {
  const accommodations = useSelector(state => state.accommodations);
  const loading = useSelector(state => state.loading['search/GET_ACCOMM_LIST']);
  const dispatch = useDispatch();
  const location = useLocation();
  const url = new URL(window.location.href);

  useEffect(() => {
    dispatch(getAccommList(url.pathname + url.search));
    dispatch(getPricesAction(url.search));
  }, [dispatch, url.pathname, url.search]);

  return (
    <SearchTemplate
      accommodations={accommodations.accommodations}
      loading={loading}
    />
  );
};

export default SearchContainer;
