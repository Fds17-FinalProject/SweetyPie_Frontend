import SVG from '../../assets/svg';

const BookingGuestEditModal = ({ hideGuestModal }) => {
  return (
    <div
      data-name="modal"
      onClick={hideGuestModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div
        className="w-38rem pt-5.6rem z-50 bg-white relative top-0 
        overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <button
          data-name="close"
          className="flex w-3.6rem h-3.6rem absolute top-5 left-5 justify-center items-center rounded-50% hover:bg-#f7f7f7"
          onClick={hideGuestModal}
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
                <button className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235">
                  <div className="w-2.2rem h-2.2rem p-2 text-#rgb235">
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
                <span className="text-1.6rem">1</span>
                <button className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black">
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
                <button className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235">
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
                <span className="text-1.6rem">0</span>
                <button className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black">
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
                <button className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235">
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
                <span className="text-1.6rem">0</span>
                <button className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black">
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
          <div className="text-1.2rem text-#484848">
            최대 2명, 유아는 숙박인원에 포함되지 않습니다.
          </div>
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
