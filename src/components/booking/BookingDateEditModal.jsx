import { useState } from 'react';
import Calendar from '../common/Calendar';
import { useHistory } from 'react-router-dom';

const BookingDateEditModal = ({ hideModal, setVisible }) => {
  // 체크인, 체크아웃 날짜에 대한 상태
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  // 달력 날짜 포커스 상태
  const [focus, setFocus] = useState('startDate');

  // 달력 날짜 변경 함수
  const handleOnDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
  };

  // 현재 url
  const url = new URL(window.location.href);

  const history = useHistory();

  // 달력 모달창 저장하기 클릭 시 쿼리 변경 및 모달 끄기
  const modifyDate = () => {
    url.searchParams.set(
      'checkInDate',
      dateRange.startDate.format('YYYY-MM-DD'),
    );
    url.searchParams.set(
      'checkoutDate',
      dateRange.endDate.format('YYYY-MM-DD'),
    );
    history.push(url.search);
    setVisible(false);
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
    <div
      data-name="modal"
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div
        className="w-66rem px-3.2rem pt-6.4rem pb-3.2rem bg-white relative top-0 
        overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <button
          data-name="close"
          className="flex w-3.6rem h-3.6rem absolute top-8 left-8 justify-center items-center rounded-50% hover:bg-#f7f7f7"
        >
          <img
            data-name="close"
            src="/img/close.png"
            alt="#"
            className="w-1.8rem h-1.8rem"
          />
        </button>
        <div className="flex px-1.3rem">
          <div className="w-5/12">
            <h3 className="text-2.2rem font-semibold">날짜 선택</h3>
            <p className="text-1.4rem text-#717171">
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </p>
          </div>
          <div className="w-5/12 ml-10% flex">
            <div>
              <div className="font-semibold">체크인</div>
              <input
                placeholder="날짜 추가"
                className="text-1.4rem"
                defaultValue={
                  dateRange.startDate &&
                  dateRange.startDate.format('YYYY-MM-DD')
                }
              />
            </div>

            <div>
              <div className="font-semibold">체크아웃</div>
              <input
                placeholder="날짜 추가"
                className="text-1.4rem"
                defaultValue={
                  dateRange.endDate && dateRange.endDate.format('YYYY-MM-DD')
                }
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
          />
        </div>
        <div className="flex items-center text-1.4rem justify-end pr-1.6rem">
          <button
            onClick={deleteDate}
            className="underline p-0.8rem font-semibold"
          >
            날짜 지우기
          </button>
          <button
            onClick={modifyDate}
            className="py-0.8rem px-1.6rem ml-1.6rem font-semibold text-#fff bg-black rounded-2xl"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDateEditModal;
