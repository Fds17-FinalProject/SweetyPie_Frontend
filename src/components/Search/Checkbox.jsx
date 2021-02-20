import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  input[type=checkbox] {
  display: none;
  }

  .bgholder {
    width: 30px;
    height: 30px;
    position: relative;
    background-color: black;
  }

  ${({ checkBox }) => (
    checkBox &&
    `
      input[type=checkbox] + label
    {
      background: url('https://png.pngtree.com/png-clipart/20190516/original/pngtree-tick-vector-icon-png-image_4236552.jpg') no-repeat;
      background-size: 100%;
      background-position: center;
      display:inline-block;
    }
      `
    )}

  input[type=checkbox] + label
  {
    border: 1px solid;
    border-radius: 5px;
    position: absolute;
    top: ${({top}) => top};
    left: 12px;
    height: 25px;
    width: 25px;
    line-height: 60px;
    display:inline-block;
  }
  /* input[type=checkbox]:checked + label
  {
    background: url('https://png.pngtree.com/png-clipart/20190516/original/pngtree-tick-vector-icon-png-image_4236552.jpg') no-repeat;
    background-size: 100%;
    background-position: center;
    display:inline-block;
  } */
`;

const Checkbox = ({ name, top, onClick, checkBox }) => {
  return (
    <>
      <Div name={name} top={top} checkBox={checkBox[name]} >
        <input type='checkbox' name={name} id={name} />
        <label htmlFor={name} top={top} onClick={onClick(name)}></label>
      </Div>
    </>
  );
};

export default Checkbox;