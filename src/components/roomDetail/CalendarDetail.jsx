import React, { useEffect, useState } from 'react';
import Calendar from '../common/Calendar';
import moment from 'moment';

const CalendarDetail = ({ gu }) => {
  // 체크인, 체크아웃 날짜에 대한 상태
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const { startDate, endDate } = dateRange;

  // 달력 날짜 포커스 상태
  const [focus, setFocus] = useState('startDate');

  // 날짜 변경 함수
  const handleOnDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
    // 변경된 날짜에 따라 url 변경(checkIn, checkOut, totalNights)
    changeUrl('checkIn', startDate.format('YYYY-MM-DD'));
    endDate && changeUrl('checkOut', endDate.format('YYYY-MM-DD'));
    endDate && changeUrl('totalNights', endDate.diff(startDate, 'days'));
  };

  // 날짜 지우기
  const onRemoveDate = () => {
    setDateRange({
      startDate: null,
      endDate: null,
    });
  };

  // URL query parameter 가져오기
  const getParameterByName = name => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
      results = regex.exec(window.location.search);
    console.log(results);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  // URL query 추가 및 변경하기
  const changeUrl = (key, value) => {
    const searchUrl = window.location.search;
    const prevValue = getParameterByName(key);
    console.log(searchUrl);
    let urlQuery;

    // 1. 쿼리가 존재하지 않으면 새로운 쿼리를 추가
    if (searchUrl.indexOf('?') === -1) {
      urlQuery = `?${key}=${value}`;
    } else {
      // 2. 쿼리가 존재 but 현재 key가 존재하지 않을 때 새로 추가
      if (searchUrl.indexOf(key) === -1) {
        urlQuery = `${searchUrl}&${key}=${value}`;
      } else {
        // 3. 쿼리가 존재 and 현재 key와 value가 존재할 때 수정
        urlQuery = searchUrl.replace(`${key}=${prevValue}`, `${key}=${value}`);
      }
    }
    window.history.pushState(null, null, `${urlQuery}`);
  };

  // 처음 렌더링 될 때, url의 checkIn과 checkOut 날짜를 가져와 달력 컴포넌트에 적용
  useEffect(() => {
    const checkIN = getParameterByName('checkIn');
    const checkOut = getParameterByName('checkOut');
    setDateRange({
      startDate: moment(checkIN),
      endDate: moment(checkOut),
    });
  }, []);

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-2.2rem font-bold mb-0.8rem">
          {!startDate
            ? '체크인 날짜를 선택해주세요.'
            : startDate && !endDate
            ? '체크아웃 날짜를 선택해주세요.'
            : `${gu}에서 ${endDate.diff(startDate, 'days')}박
          `}
        </h1>
        <p className="text-1.4rem text-#717171">
          {startDate && endDate
            ? `${startDate.format('YYYY년 MM월 DD일')} - ${endDate.format(
                'YYYY년 MM월 DD일',
              )}`
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
