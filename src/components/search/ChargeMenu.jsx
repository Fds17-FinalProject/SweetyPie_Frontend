import React, { useState } from 'react';
import RangeSlider from "./RangeSlider";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import onClickOutside from "react-onclickoutside";

const ChargeMenu = ({ setFilter }) => {
  const price = useSelector(state => state.payment.prices);
  const average = Math.floor(price.reduce((acc, curr) => acc + curr, 0) / price.length);
  const history = useHistory();

  const range = [price[0], price[price.length - 1]];

  const [inputValues, setInputValues] = useState(range);

  ChargeMenu.handleClickOutside = () => setFilter({
    accommType: false,
    chargeMenu: false,
  });

  const onPriceSave = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('minPrice', inputValues[0]);
    url.searchParams.set('maxPrice', inputValues[1]);

    history.push(url.search);
    setFilter({
      accommType: false,
      chargeMenu: false,
    });
  };

  return (
    <>
      <div className="border border-searchBorder shadow-xl rounded-lg p-8 w-44rem h-33rem absolute left-40 z-20 bg-#fff">
        <div className="border-b border-black mb-8">
          <p className="text-1.6rem">평균 1박 요금은 ₩{ average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }입니다</p>
          <div style={{  width: '400px', height: '180px'}}>
      <div>
        <div style={{ textAlign: "center" }}>
        </div>
        <div>
          <RangeSlider data={price} inputValues={inputValues} setInputValues={setInputValues}  />
        </div>
      </div>
    </div>
        </div>
        <button
          className="w-6rem h-3rem bg-#222 text-#fff text-1.4rem rounded-lg absolte right-0"
          onClick={onPriceSave}
        >
          저장
        </button>
      </div>
    </>
  );
};

ChargeMenu.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => ChargeMenu.handleClickOutside
};

export default onClickOutside(ChargeMenu, clickOutsideConfig);