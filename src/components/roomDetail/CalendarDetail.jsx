import React from 'react';
import Calendar from '../common/Calender';
const img = window.location.origin;

const CalendarDetail = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-2.2rem font-bold mb-0.8rem">
          체크인 날짜를 선택해주세요.
        </h1>
        <p className="text-1.4rem text-#717171">
          여행 날짜를 입력하여 정확한 요금을 확인하세요.
        </p>
      </div>
      <div className="w-68.8rem h-33rem">
        <img src={img + '/img/calendar.jpg'} alt="달력" />
        <Calendar />
      </div>
      <div className="mt-20 border-b"></div>
    </div>
  );
};

export default CalendarDetail;
