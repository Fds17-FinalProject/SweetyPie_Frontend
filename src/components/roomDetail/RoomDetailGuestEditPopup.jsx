import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SVG from '../../assets/svg';
import onClickOutside from 'react-onclickoutside';

const RoomDetailGuestEditPopup = ({
  onCloseModal,
  count,
  setCount,
  visible,
  setVisible,
}) => {
  // 팝업창 영역 외부 클릭 시 닫히게 하기
  RoomDetailGuestEditPopup.handleClickOutside = () =>
    setVisible({
      ...visible,
      state: false,
      type: 'calendar',
    });

  const history = useHistory();
  const url = new URL(window.location.href);
  let adultNum = +url.searchParams.get('adultNum');
  let childNum = +url.searchParams.get('childNum');
  let infantNum = +url.searchParams.get('infantNum');

  console.log(
    'adultNum',
    adultNum,
    'childNum',
    childNum,
    'infantNum',
    infantNum,
  );
  console.log(
    'adult',
    count.adultNum,
    'child',
    count.childNum,
    'infant',
    count.infantNum,
  );

  // URL query 추가 및 변경하기
  const changeUrl = (key, value) => {
    url.searchParams.set(key, value);
    history.push(url.search);
  };

  // 게스트 증가 함수
  const increaseGuestNum = type => {
    if (type === 'adultNum' && count.adultNum === 5) return;
    else if (type === 'childNum' && count.childNum === 5) return;
    else if (type === 'infantNum' && count.infantNum === 5) return;
    setCount({
      ...count,
      [type]: count[type] + 1,
    });
    changeUrl(type, count[type] + 1);
  };

  // 게스트 감소 함수
  const decreaseGuestNum = type => {
    if (count[type] === 0) return;
    setCount({
      ...count,
      [type]: count[type] - 1,
    });
    changeUrl(type, count[type] - 1);
    // 어른이 0명이 되면 어린이와 아이 인원 초기화
    if (type === 'adultNum' && count.adultNum === 1) resetGuestNum();
  };

  const resetGuestNum = () => {
    url.searchParams.set('childNum', 0);
    url.searchParams.set('infantNum', 0);
    history.push(url.search);
    setCount({
      adultNum: 0,
      childNum: 0,
      infantNum: 0,
    });
  };

  // 첫 렌더링 시, state의 인원수와 url의 adultNum, childNum, infantNum 동기화
  useEffect(() => {
    setCount({
      adultNum: adultNum,
      childNum: childNum,
      infantNum: infantNum,
    });
  }, [setCount, adultNum, childNum, infantNum]);

  return (
    <div className="w-full h-full" onClick={onCloseModal}>
      <div
        className="w-32rem absolute top-19.2rem left-11 bg-searchBackground
        overflow-y-auto flex flex-col text-black rounded-xl border border-#b0b0b0 z-20"
      >
        <div className="px-2.4rem">
          <ul className="pt-0.8rem">
            <li className="mt-2.4rem text-1.6rem flex justify-between">
              <div className="text-1.6rem text-#484848 font-semibold">성인</div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem">
                {adultNum === 0 ? (
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
                <span className="text-1.6rem">{adultNum || 0}</span>
                {adultNum === 5 ? (
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
                {childNum === 0 || adultNum === 0 ? (
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
                <span className="text-1.6rem">{childNum || 0}</span>
                {childNum === 5 || adultNum === 0 ? (
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
                {infantNum === 0 || adultNum === 0 ? (
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
                <span className="text-1.6rem">{infantNum || 0}</span>
                {infantNum === 5 || adultNum === 0 ? (
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
        <div className="text-1.2rem px-2.2rem">
          어린이 및 유아는 숙박 시, 1명 이상의 성인을 동반해야 합니다.
        </div>
        <div className="my-1.6rem border-b"></div>
        <div className="text-right px-1.8rem pb-1.6rem">
          <button
            className="text-1.6rem font-bold underline w-24 h-12 rounded-md hover:bg-gray-100 "
            data-name="close"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

RoomDetailGuestEditPopup.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => RoomDetailGuestEditPopup.handleClickOutside,
};

export default onClickOutside(RoomDetailGuestEditPopup, clickOutsideConfig);
