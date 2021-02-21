import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WishListTemplate from '../components/wishList/WishListTemplate';
import { readBookmark } from '../redux/modules/bookmark';

const WishListContainer = () => {
  const dispatch = useDispatch();

  // 스토어에서 북마크를 꺼내온다
  const { bookmarks, loading } = useSelector(state => ({
    bookmarks: state.bookmark.bookmarks,
    loading: state.loading['bookmark/READ_BOOKMARK'],
  }));

  // 북마크 get 요청
  useEffect(() => {
    dispatch(readBookmark());
  }, [dispatch]);

  return (
    <WishListTemplate
      bookmarks={bookmarks}
      loading={loading}
      dispatch={dispatch}
    />
  );
};

export default WishListContainer;
