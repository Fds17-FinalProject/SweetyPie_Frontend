import React, { useState } from 'react';
import Calendar from '../common/Calendar';

const CalendarDetail = ({ gu }) => {
  // 체크인, 체크아웃 날짜에 대한 상태
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  // 날짜 변경 함수
  const handleOnDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
  };
  const { startDate, endDate } = dateRange;
  // console.log(startDate);
  // console.log(startDate || startDate.format('YYYY년 MM월 DD일'));

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
        />
      </div>
      <div className="mt-20 border-b"></div>
    </div>
  );
};
export default CalendarDetail;
