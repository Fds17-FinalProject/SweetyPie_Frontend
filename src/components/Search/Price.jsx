import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}원`;
}

const Price = () => {
  const classes = useStyles();
  const [value, setValue] = useState([]);
  const [curVal, setCur] = useState([]);
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [data, setData] = useState();
  const [ren, setRen] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:3000/data/data.json")
    //   .then((res) => res.json())
    //   .then((res) => {
        // data 중 가격으로만 이루어진 새로운 배열 생성
    const res = { data: [] };
for (let i = 0; i < 500; i++) {
  res.data.push(Math.floor(Math.random() * 80) + 10000);
}
        const price = res.data.map((data) => data.price);

        // 가격으로 이루어진 배열에서, 최대값과 최소값 구하기
        const max = price.reduce(function (pre, cur) {
          return pre > cur ? pre : cur;
        });
        const min = price.reduce(function (pre, cur) {
          return pre > cur ? cur : pre;
        });
        setData(res.data);

        // 최소값과 최대값으로 defaultValue 값 설정
        setValue([min, max]);
        setMin(min);
        setMax(max);
        
        //////가격 필터//////////
        if (curVal.length > 0) {
          const priceData = res.data.filter(
            (data) => curVal[0] <= data.price && data.price <= curVal[1]
          );
          setData(priceData);
          setValue([curVal[0], curVal[1]]);
        }
      // });
  }, [ren]);

  // 슬라이더를 변화시킬 때 마다 value / CurValue 값 조정 (CurValue 값을 조정해야한다.)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCur(newValue);
  };

  //componentDidUpdate를 위한 state값 변화
  const handleFilter = () => {
    setRen(!ren);
  };

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <div>
          <div>가격대</div>
          <div>
            {numberFormat(value[0])}원 ~ {numberFormat(value[1])}원
          </div>
        </div>
        <Slider
          value={value} //가격 슬라이더의 값
          defaultValue={[min, max]} //가격 슬라이더 최초 범위
          onChange={handleChange} //슬라이더 변할 때마다 value값을 조정하는 함수
          aria-labelledby="range-slider" //슬라이더 형태
          max={max}
          min={min}
          stpe="10000" //이동 단위(?)
        />
      </div>
      <div onClick={() => handleFilter()}>제품보기</div>{" "}
      {/* state값 변화시켜 새로 render하기 */}
    </div>
  );
};

export default Price;