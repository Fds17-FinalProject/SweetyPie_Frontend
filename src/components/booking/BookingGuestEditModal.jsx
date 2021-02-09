import { useState } from 'react';
import SVG from '../../assets/svg';
import { IconButton } from '../common/Button';

const BookingGuestEditModal = ({ hideModal }) => {
  // 게스트
  const [count, setCount] = useState({
    adult: 0,
    child: 0,
    infant: 0,
    status: false,
  });

  // 게스트 증가 함수
  const guestNumIncrease = type => {
    if (type === 'adult' && count.adult === 16) return;
    else if (type === 'child' && count.child === 5) return;
    else if (type === 'infant' && count.infant === 5) return;

    setCount({ ...count, [type]: count[type] + 1 });
  };

  // 게스트 감소 함수
  const guestNumDecrease = type => {
    if (count[type] === 0) return;
    setCount({ ...count, [type]: count[type] - 1 });
  };

  return (
    <div
      data-name="modal"
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div
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
                <IconButton
                  onClick={() => guestNumDecrease('adult')}
                  status={count.status}
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
                </IconButton>

                <span className="text-1.6rem">{count.adult}</span>
                <button
                  onClick={() => guestNumIncrease('adult')}
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
                <button
                  onClick={() => guestNumDecrease('child')}
                  className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235"
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
                <span className="text-1.6rem">{count.child}</span>
                <button
                  onClick={() => guestNumIncrease('child')}
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
                <button
                  onClick={() => guestNumDecrease('infant')}
                  className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235"
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
                <span className="text-1.6rem">{count.infant}</span>
                <button
                  onClick={() => guestNumIncrease('infant')}
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
              </div>
            </li>
          </ul>
        </div>
        <div className="my-1.6rem border-b"></div>
        <div className="flex justify-between items-center px-2.4rem pb-1.6rem">
          <button className="text-1.6rem font-semibold underline">취소</button>
          <button className="text-1.6rem text-#fff font-semibold py-1.4rem px-2.4rem bg-black rounded-xl">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingGuestEditModal;
