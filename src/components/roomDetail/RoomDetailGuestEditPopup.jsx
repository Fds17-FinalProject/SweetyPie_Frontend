import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SVG from '../../assets/svg';

const RoomDetailGuestEditPopup = ({
  onCloseModal,
  onClosePopup,
  count,
  setCount,
}) => {
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
        console.log(key, prevValue, value);
        urlQuery = searchUrl.replace(`${key}=${prevValue}`, `${key}=${value}`);
      }
    }
    window.history.pushState(null, null, `${urlQuery}`);
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

  console.log(
    'adult',
    count.adultNum,
    'child',
    count.childNum,
    'infant',
    count.infantNum,
  );

  // 게스트 감소 함수
  const decreaseGuestNum = type => {
    if (count[type] === 0) return;
    setCount({
      ...count,
      [type]: count[type] - 1,
    });
    changeUrl(type, count[type] - 1);
    resetGuestNum();
  };

  const resetGuestNum = () => {
    if (count.adultNum === 0) {
      setCount({
        adultNum: 0,
        childNum: 0,
        infantNum: 0,
      });
    }
  };

  return (
    <div
      className="w-full h-full bg-transparent"
      onClick={onCloseModal}
      // onClick={onClosePopup}
      data-name="popup"
    >
      <div
        className="w-32rem absolute top-19.2rem left-11 bg-searchBackground
        overflow-y-auto flex flex-col text-black rounded-xl border border-#b0b0b0 z-20"
      >
        <div className="px-2.4rem">
          <ul className="pt-0.8rem">
            <li className="mt-2.4rem text-1.6rem flex justify-between">
              <div className="text-1.6rem text-#484848 font-semibold">성인</div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem">
                {count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-default"
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
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-default"
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
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-default"
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
                <span className="text-1.6rem">
                  {count.adultNum === 0 ? 0 : count.childNum}
                </span>
                {count.childNum === 5 || count.adultNum === 0 ? (
                  <button
                    onClick={() => increaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-default"
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
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-default"
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
                <span className="text-1.6rem">
                  {count.adultNum === 0 ? 0 : count.infantNum}
                </span>
                {count.infantNum === 5 || count.adultNum === 0 ? (
                  <button
                    onClick={() => increaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-default"
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

export default RoomDetailGuestEditPopup;
