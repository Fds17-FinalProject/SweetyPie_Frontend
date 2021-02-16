import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import RoomDetailTemplate from '../components/roomDetail/RoomDetailTemplate';
import qs from 'qs';
import { readRoomDetail } from '../redux/modules/roomDetail';

const RoomDetailContainer = ({ location }) => {
  // const accommodation2 = useSelector(state => console.log(state));
  const { accommodation, roomDetailError, loading } = useSelector(
    ({ roomDetail, loading }) => ({
      accommodation: roomDetail.accommodation,
      roomDetailError: roomDetail.roomDetailError,
      loading: loading['roomDetail/READ_ROOMDETAIL'],
    }),
  );
  console.log(accommodation);

  const dispatch = useDispatch();
  // url의 room_id 가져오기
  const { room_id } = useParams();

  useEffect(() => {
    dispatch(readRoomDetail(room_id));
  }, [dispatch, room_id]);

  // const qs2 = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });
  // console.log(qs2);

  return (
    <div>
      <RoomDetailTemplate accommodation={accommodation} loading={loading} />
    </div>
  );
};

export default RoomDetailContainer;
