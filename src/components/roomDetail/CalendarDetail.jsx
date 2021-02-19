import React, { useEffect, useState } from 'react';
import Calendar from '../common/Calendar';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const CalendarDetail = ({ gu }) => {
  const history = useHistory();

  // URL query parameter 가져오기
  const url = new URL(window.location.href);
  const checkInDate = url.searchParams.get('checkInDate');
  const checkoutDate = url.searchParams.get('checkoutDate');

  // URL query 추가 및 변경하기
  const changeUrl = (key, value) => {
    url.searchParams.set(key, value);
    history.push(url.search);
    console.log(url.search);
  };

  // 체크인, 체크아웃 날짜에 대한 상태
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  // 달력 날짜 포커스 상태
  const [focus, setFocus] = useState('startDate');

  // 날짜 변경
  const handleOnDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
    // 변경된 날짜에 따라 url 변경(checkInDate, checkOut)
    // 만약, checkoutDate가 checkInDate보다 이전일 때, 음수로 숙박일수 지정되지 않도록 조절
    startDate && changeUrl('checkInDate', startDate.format('YYYY-MM-DD'));
    endDate
      ? changeUrl('checkoutDate', endDate.format('YYYY-MM-DD'))
      : url.searchParams.delete('checkoutDate');
    history.push(url.search);
  };

  // 날짜 지우기
  const onRemoveDate = () => {
    setDateRange({
      startDate: null,
      endDate: null,
    });
    url.searchParams.delete('checkInDate');
    url.searchParams.delete('checkoutDate');
    history.push(url.search);
  };

  // 처음 렌더링 될 때, url의 checkInDate과 checkOut 날짜를 가져와 달력 컴포넌트에 적용
  useEffect(() => {
    setDateRange({
      startDate: moment(checkInDate),
      endDate: moment(checkoutDate),
    });
  }, []);

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-2.2rem font-bold mb-0.8rem">
          {!checkInDate
            ? '체크인 날짜를 선택해주세요.'
            : checkInDate && !checkoutDate
            ? '체크아웃 날짜를 선택해주세요.'
            : `${gu}에서 ${moment(checkoutDate).diff(
                moment(checkInDate),
                'days',
              )}박
          `}
        </h1>
        <p className="text-1.4rem text-#717171">
          {checkInDate && checkoutDate
            ? `${moment(checkInDate).format('YYYY년 MM월 DD일')} - ${moment(
                checkoutDate,
              ).format('YYYY년 MM월 DD일')}`
            : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
        </p>
      </div>
      <div className="w-68.8rem h-33rem">
        <Calendar
          dateRange={dateRange}
          handleOnDateChange={handleOnDateChange}
          focus={focus}
          setFocus={setFocus}
        />
        <div className="text-right mr-28">
          <button
            className="underline text-1.4rem p-0.8rem rounded-lg font-bold hover:bg-gray-100"
            onClick={onRemoveDate}
          >
            날짜 지우기
          </button>
        </div>
      </div>
      <div className="mt-20 border-b"></div>
    </div>
  );
};
export default CalendarDetail;
