import React, { useState } from 'react';
import {
  DayPickerRangeControllerWrapper,
  DayPickerRangeController,
} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ko';
import moment from 'moment';
import '../../assets/calendar.css';
import SVG from '../../assets/svg';

const Calendar = () => {
  // 체크인 날짜와 체크아웃 날짜의 모멘트 객체가 각각 상태로 관리된다.
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState('startDate');

  const { startDate, endDate } = dateRange;

  // 날짜 변경
  const handleOnDateChange = (startDate, endDate) => {
    setdateRange(startDate, endDate);
  };

  // 오늘 날짜
  const todayYear = moment().year();
  const todayMonth = moment().month() + 1;
  const todayDate = moment().date();

  const onClick = () => {
    console.log(
      `${startDate.year()}-${startDate.months() + 1}-${startDate.date()}`,
    );
    console.log(`${endDate.year()}-${endDate.months() + 1}-${endDate.date()}`);
    console.log(todayYear, todayMonth, todayDate);
  };

  return (
    <>
      <DayPickerRangeController
        // startDatePlaceholderText='날짜 추가'
        startDate={startDate}
        onDatesChange={handleOnDateChange}
        // endDatePlaceholderText='날짜 추가'
        endDate={endDate}
        numberOfMonths={2}
        // displayFormat=' M월 D일'
        // showClearDates={true}
        focusedInput={focus}
        onFocusChange={focus => setFocus(focus || 'startDate')}
        // startDateId='startDateMookh'
        // endDateId='endDateMookh'
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
