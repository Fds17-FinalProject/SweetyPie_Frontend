import React, { useEffect, useState } from 'react';
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

  const dispatch = useDispatch();
  // url의 accommodation_id 가져오기
  const { accommodation_id } = useParams();

  const [mark, setMark] = useState(false);

  useEffect(() => {
    dispatch(readRoomDetail(accommodation_id));
  }, [dispatch, accommodation_id, mark]);

  // 북마크 등록 (POST)
  const postBookmarkRoom = async accommodation_id => {
    await postBookmark(accommodation_id);
    setMark(true);
  };

  // 북마크 제거 (DELETE)
  const deleteBookmarkedRoom = async accommodation_id => {
    await deleteBookmark(accommodation_id);
    setMark(false);
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
