import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SVG from '../../assets/svg';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50%);
  } to {
    transform: translateY(0);
  }
`;

const ModalBackground = styled.div`
  animation: ${fadeIn} 0.25s ease-in;
`;

const GuestEditModal = styled.div`
  animation: ${fadeIn} 0.25s ease-out;
`;

const BookingGuestEditModal = ({ hideModal, setVisible, query }) => {
  const { adultNum, childNum, infantNum } = query;

  // 게스트 상태
  const [count, setCount] = useState({
    adultNum: +adultNum,
    childNum: +childNum,
    infantNum: +infantNum,
    status: false,
  });

  // 게스트 증가 함수
  const increaseGuestNum = type => {
    if (type === 'adultNum' && count.adultNum === 5) return;
    else if (type === 'childNum' && count.childNum === 5) return;
    else if (type === 'infantNum' && count.infantNum === 5) return;

    setCount({ ...count, [type]: count[type] + 1, status: true });
  };

  // 게스트 감소 함수
  const decreaseGuestNum = type => {
    if (count[type] === 0) return;
    setCount({ ...count, [type]: count[type] - 1 });
    // 어른이 0명이 되면 어린이와 아이 인원 초기화
    if (count.adultNum === 1) {
      setCount({
        adultNum: 0,
        childNum: 0,
        infantNum: 0,
      });
    }
  };

  // 현재 url
  const url = new URL(window.location.href);

  const history = useHistory();

  // 게스트 모달창 저장하기 클릭 시 쿼리 변경 및 모달 끄기
  const modifyGuest = () => {
    url.searchParams.set(
      'totalGuestNum',
      count.adultNum + count.childNum + count.infantNum,
    );
    url.searchParams.set('adultNum', count.adultNum);
    url.searchParams.set('childNum', count.childNum);
    url.searchParams.set('infantNum', count.infantNum);
    history.push(url.search);
    setVisible(false);
  };

  return (
    <ModalBackground
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0 z-20"
    >
      <GuestEditModal
        className="w-38rem pt-5.6rem bg-white relative top-0 
        overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <button
          data-name="close"
          className="flex w-3.6rem h-3.6rem absolute top-5 left-5 justify-center items-center rounded-50% hover:bg-#f7f7f7"
        >
          <img
            data-name="close"
            src="/img/close.png"
            alt="#"
            className="w-1.8rem h-1.8rem"
          />
        </button>
        <div className="px-2.4rem">
          <h3 className="text-2.2rem text-#484848 font-semibold">게스트</h3>
          <ul className="pt-0.8rem">
            <li className="mt-2.4rem text-1.6rem flex justify-between">
              <div className="text-1.6rem text-#484848 font-semibold">성인</div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem">
                {count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="minus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="minus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                )}
                <span className="text-1.6rem">{count.adultNum}</span>
                {count.adultNum === 5 ? (
                  <button
                    onClick={() => increaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="plus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => increaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="plus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                )}
              </div>
            </li>
            <li className="mt-2.4rem flex justify-between items-center">
              <div>
                <div className="text-1.6rem text-#484848 font-semibold">
                  어린이
                </div>
                <div className="text-1.4rem text-#484848">2~12세</div>
              </div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem">
                {count.childNum === 0 || count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="minus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="minus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                )}
                <span className="text-1.6rem">{count.childNum}</span>
                {count.childNum === 5 || count.adultNum === 0 ? (
                  <button
                    onClick={() => increaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="plus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => increaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="plus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                )}
              </div>
            </li>
            <li className="my-2.4rem flex justify-between items-center">
              <div>
                <div className="text-1.6rem text-#484848 font-semibold">
                  유아
                </div>
                <div className="text-1.4rem text-#484848">2세 미만</div>
              </div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem">
                {count.infantNum === 0 || count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="minus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="minus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                )}
                <span className="text-1.6rem">{count.infantNum}</span>
                {count.infantNum === 5 || count.adultNum === 0 ? (
                  <button
                    onClick={() => increaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="plus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => increaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                  >
                    <div className="w-2.2rem h-2.2rem p-2">
                      <SVG
                        name="plus"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                      />
                    </div>
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="text-1.4rem px-2.4rem">
          <div className="mb-1">숙박에 필요한 인원을 선택해 주세요.</div>
          <div>어린이, 유아는 1명 이상의 성인을 동반해야 합니다.</div>
        </div>
        <div className="my-1.6rem border-b"></div>
        <div className="flex justify-between items-center px-2.4rem pb-1.6rem">
          <button
            data-name="close"
            onClick={hideModal}
            className="inline-flex items-center justify-center px-2 h-12 font-bold text-black text-xl transition-colors focus:outline-none bg-white rounded-md focus:shadow-outline hover:bg-gray-200 transform hover:scale-110 duration-150 underline text-1.4rem"
          >
            취소
          </button>
          <button
            onClick={modifyGuest}
            className="text-1.6rem text-#fff font-semibold py-1.4rem px-2.4rem bg-black rounded-xl transform focus:scale-90 duration-150 "
          >
            저장하기
          </button>
        </div>
      </GuestEditModal>
    </ModalBackground>
  );
};

export default BookingGuestEditModal;
