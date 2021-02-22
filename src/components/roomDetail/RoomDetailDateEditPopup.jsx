import { useState } from 'react';
import Calendar from '../common/Calendar';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const RoomDetailDateEditPopup = ({
  onCloseModal,
  visible,
  setVisible,
  bookedDateDtos,
}) => {
  const history = useHistory();

  // URL query parameter 가져오기
  const url = new URL(window.location.href);
  const checkInDate = url.searchParams.get('checkInDate');
  const checkoutDate = url.searchParams.get('checkoutDate');

  // 체크인, 체크아웃 날짜에 대한 상태
  const [dateRange, setDateRange] = useState({
    // 체크인 날짜의 초기값을 쿼리에서 받아온 날짜를 moment 객체로 변환하여 지정
    startDate: moment(checkInDate),
    // 체크아웃 날짜의 초기값을 쿼리에서 받아온 날짜를 moment 객체로 변환하여 지정
    endDate: moment(checkoutDate),
  });
  const { startDate, endDate } = dateRange;

  // 달력 날짜 포커스 상태
  const [focus, setFocus] = useState('startDate');

  // 달력 날짜 변경 함수
  const handleOnDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
  };

  // 달력 모달창 저장하기 클릭 시 쿼리 변경 및 모달 끄기
  const modifyDate = () => {
    if (!dateRange.startDate || !dateRange.endDate) {
      return;
    }
    url.searchParams.set('checkInDate', startDate.format('YYYY-MM-DD'));
    url.searchParams.set('checkoutDate', endDate.format('YYYY-MM-DD'));
    history.push(url.search);
    setVisible({
      ...visible,
      state: false,
    });
  };

  // 날짜 지우기
  const deleteDate = () => {
    setDateRange({
      startDate: null,
      endDate: null,
    });
    setFocus('startDate');
  };

  return (
    <div className="w-full h-full z-20" onClick={onCloseModal}>
      <div
        className="w-64rem absolute top-5.5rem right-1.6rem bg-searchBackground
        flex flex-col text-black rounded-3xl shadow-2xl p-4 border z-20"
      >
        <div className="flex px-2rem mb-10">
          <div className="w-5/12 pt-2rem">
            <h3 className="text-2.2rem font-semibold">
              {startDate && endDate
                ? `${endDate.diff(startDate, 'days')}박`
                : '날짜 선택'}
            </h3>
            <p className="text-1.4rem text-#717171">
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </p>
          </div>
          <div className="absolute right-0.8rem flex h-5.8rem items-center mt-5 mb-4 border-2 rounded-2xl border-black">
            <div className="w-64 h-5.6rem pt-2 pl-5 border-r border-gray-400">
              <b>체크인</b>
              <input
                placeholder="날짜 추가"
                className="block text-1.4rem pt-2 leading-normal bg-transparent cursor-text"
                // 체크인 입력창 조건부 처리
                defaultValue={checkInDate}
                value={checkInDate ? checkInDate : ''}
              />
            </div>
            <div className="w-64 h-5.6rem pl-5 pt-2 ">
              <b>체크아웃</b>
              <label htmlFor="checkOut" />
              <input
                placeholder="날짜 추가"
                className="block text-1.4rem pt-2 leading-normal bg-transparent cursor-text"
                // 체크아웃 입력창 조건부 처리
                defaultValue={checkoutDate}
                value={checkoutDate ? checkoutDate : ''}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <Calendar
            dateRange={dateRange}
            setDateRange={setDateRange}
            handleOnDateChange={handleOnDateChange}
            focus={focus}
            setFocus={setFocus}
            bookedDateDtos={bookedDateDtos}
          />
        </div>
        <div className="flex items-center text-1.4rem justify-end pr-1.6rem">
          <button
            onClick={deleteDate}
            className="underline p-0.8rem font-semibold"
          >
            날짜 지우기
          </button>
          {startDate && endDate ? (
            <button
              onClick={modifyDate}
              className="py-0.8rem px-1.6rem ml-1.6rem font-semibold text-#fff bg-black rounded-2xl"
              data-name="close"
            >
              저장하기
            </button>
          ) : (
            // 날짜가 둘다 입력되지 않았으면 비활성화 처리
            <button
              disabled
              onClick={modifyDate}
              className="py-0.8rem px-1.6rem ml-1.6rem font-semibold text-#fff bg-#b0b0b0 rounded-2xl"
            >
              저장하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetailDateEditPopup;
