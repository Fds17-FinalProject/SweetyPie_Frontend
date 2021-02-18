import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ko';
import '../../assets/calendar.css';
import SVG from '../../assets/svg';

const Calendar = ({ dateRange, handleOnDateChange, focus, setFocus }) => {
  const { startDate, endDate } = dateRange;

  return (
    <>
      <DayPickerRangeController
        startDate={startDate}
        onDatesChange={handleOnDateChange}
        endDate={endDate}
        numberOfMonths={2}
        focusedInput={focus}
        onFocusChange={focus => setFocus(focus || 'startDate')}
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
