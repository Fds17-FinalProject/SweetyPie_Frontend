const HeaderGuestEditModal = ({ count, increaseGuestNum, decreaseGuestNum }) => {

  return (

        <div className="px-2.4rem py-0.8rem w-full" data-name="no-hide">
          <ul className="pt-0.8rem" data-name="no-hide">
            <li className="py-1.2rem text-1.6rem flex justify-between border-b items-center" data-name="no-hide">
              <div className="text-1.6rem text-#484848 font-semibold" data-name="no-hide">성인</div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem" data-name="no-hide">
                {count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                    data-name="no-hide">
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                )}
                <span className="text-1.6rem" data-name="no-hide">{count.adultNum}</span>
                {count.adultNum === 5 ? (
                  <button
                    onClick={() => increaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28m-14-14v28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => increaseGuestNum('adultNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28m-14-14v28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </li>
            <li className="py-1.2rem text-1.6rem flex justify-between border-b items-center" data-name="no-hide">
              <div data-name="no-hide">
                <div className="text-1.6rem text-#222 font-semibold " data-name="no-hide">
                  어린이
                </div>
                <div className="text-1.4rem text-#717171" data-name="no-hide">2~12세</div>
              </div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem" data-name="no-hide">
                {count.childNum === 0 || count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                )}
                <span className="text-1.6rem" data-name="no-hide">{count.childNum}</span>
                {count.childNum === 5 || count.adultNum === 0 ? (
                  <button
                    onClick={() => increaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28m-14-14v28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => increaseGuestNum('childNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28m-14-14v28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </li>
            <li className="py-1.2rem text-1.6rem flex justify-between items-center" data-name="no-hide">
              <div>
                <div className="text-1.6rem text-#222 font-semibold" data-name="no-hide">
                  유아
                </div>
                <div className="text-1.4rem text-#717171" data-name="no-hide">2세 미만</div>
              </div>
              <div className="flex items-center justify-between w-10.4rem h-3.2rem" data-name="no-hide">
                {count.infantNum === 0 || count.adultNum === 0 ? (
                  <button
                    onClick={() => decreaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                )}
                <span className="text-1.6rem" data-name="no-hide">{count.infantNum}</span>
                {count.infantNum === 5 || count.adultNum === 0 ? (
                  <button
                    onClick={() => increaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235 cursor-not-allowed"
                    disabled="true"
                    data-name="no-hide">
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28m-14-14v28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => increaseGuestNum('infantNum')}
                    className="w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black"
                    data-name="no-hide"
                  >
                    <div className="w-2.2rem h-2.2rem p-2" data-name="no-hide">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        stroke="currentcolor"
                        strokeWidth="5.33333"
                        data-name="no-hide"
                    >
                      <path d='m2 16h28m-14-14v28' data-name="no-hide" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
       
  );
};

export default HeaderGuestEditModal;
