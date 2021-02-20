import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SVG from '../../assets/svg';

const HeaderGuestEditModal = ({ hideModal, setVisible }) => {

  // 게스트 상태
  const [count, setCount] = useState({
    adultNum: 0,
    childNum: 0,
    infantNum: 0,
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
    // setVisible(false);
  };

  return (

      // <div className="w-38rem bg-white relative top-0 overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0">
        <div className="px-2.4rem py-0.8rem w-full">
          {/* <ul className="pt-0.8rem"> */}
          <ul className="pt-0.8rem">
            <li className="py-1.2rem text-1.6rem flex justify-between border-b items-center">
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
                        strokeWidt="5.33333"
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
            <li className="py-1.2rem text-1.6rem flex justify-between border-b items-center">
              <div>
                <div className="text-1.6rem text-#222 font-semibold">
                  어린이
                </div>
                <div className="text-1.4rem text-#717171">2~12세</div>
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
                <span className="text-1.6rem">{count.childNum}</span>
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
            <li className="py-1.2rem text-1.6rem flex justify-between items-center">
              <div>
                <div className="text-1.6rem text-#222 font-semibold">
                  유아
                </div>
                <div className="text-1.4rem text-#717171">2세 미만</div>
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
                <span className="text-1.6rem">{count.infantNum}</span>
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
       
      // </div>
  );
};

export default HeaderGuestEditModal;
