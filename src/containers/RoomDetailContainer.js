import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import RoomDetailTemplate from '../components/roomDetail/RoomDetailTemplate';
import { readRoomDetail } from '../redux/modules/roomDetail';
import { postBookmark, deleteBookmark } from '../redux/lib/api/bookmark';

const RoomDetailContainer = () => {
  // const accommodation2 = useSelector(state => console.log(state));
  const { accommodation, accommodationError, loading } = useSelector(
    ({ roomDetail, loading }) => ({
      accommodation: roomDetail.accommodation,
      accommodationError: roomDetail.accommodationError,
      loading: loading['roomDetail/READ_ROOMDETAIL'],
    }),
  );
  // console.log(accommodation);

  const dispatch = useDispatch();
  // url의 accommodation_id 가져오기
  const { accommodation_id } = useParams();

  useEffect(() => {
    dispatch(readRoomDetail(accommodation_id));
  }, [dispatch, accommodation_id]);

  // 북마크 등록 (POST)
  const postBookmarkRoom = accommodation_id => {
    postBookmark(accommodation_id);
  };

  // 북마크 제거 (DELETE)
  const deleteBookmarkedRoom = accommodation_id => {
    deleteBookmark(accommodation_id);
  };

  return (
    <div>
      <RoomDetailTemplate
        accommodation={accommodation}
        loading={loading}
        postBookmark={postBookmarkRoom}
        deleteBookmark={deleteBookmarkedRoom}
      />
    </div>
  );
};

export default RoomDetailContainer;
