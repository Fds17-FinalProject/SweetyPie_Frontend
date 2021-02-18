import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ko';
import '../../assets/calendar.css';
import SVG from '../../assets/svg';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const Calendar = ({ dateRange, handleOnDateChange, focus, setFocus }) => {
  const { startDate, endDate } = dateRange;

  // 테스트용 더미 데이터
  const bookedDate = [
    { id: '1', startDate: '2021-03-08', endDate: '2021-03-11' },
    { id: '2', startDate: '2021-03-20', endDate: '2021-03-22' },
  ];

  // moment-range를 통해 moment 생성 함수를 받아온다 -> moment() 호출 시 moment객체 생성
  const moment = extendMoment(Moment);

  // 오늘 이전 날짜 비활성화
  const isOutsideRange = (day = moment()) => {
    return moment().diff(day, 'days') > 0;
  };

  // 예약이 된 날짜를 비활성화
  const isDayBlocked = date => {
    let bookedRanges = [];
    let blocked;

    bookedRanges = bookedDate.map(booked =>
      moment.range(booked.startDate, booked.endDate),
    );

    blocked = bookedRanges.find(bookedRange =>
      bookedRange.contains(date, { excludeEnd: true }),
    );

    return blocked;
  };

  return (
    <>
      <DayPickerRangeController
        isDayBlocked={isDayBlocked} // 예약 날짜 비활성화
        isOutsideRange={isOutsideRange} // 이전 날짜 비활성화
        startDate={startDate} // 체크인 날짜
        onDatesChange={handleOnDateChange} // 날짜 변경
        endDate={endDate} // 체크아웃 날짜
        numberOfMonths={2}
        focusedInput={focus}
        onFocusChange={focus => setFocus(focus || 'startDate')} // 포커스 변경
        minimumNights={0}
        monthFormat="YYYY년 MMMM"
        navPrev={
          <div className="DayPickerNavigation_button__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault">
            <SVG name="prev" width="10px" height="10px" viewBox="0 0 18 18" />
          </div>
        }
        navNext={
          <div className="DayPickerNavigation_button__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault">
            <SVG name="next" width="10px" height="10px" viewBox="0 0 18 18" />
          </div>
        }
      />
    </>
  );
};
export default Calendar;
