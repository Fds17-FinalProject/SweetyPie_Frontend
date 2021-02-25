import React from 'react';

const ModifyInput = ({
  children,
  content,
  name,
  onClick,
  htmlFor,
  id,
  patchMemberInfo,
  value,
  changeInputValue,
  nameReg,
  passwordReg,
  contactReg,
}) => {
  return (
    <div className=" flex relative flex-wrap border-b border-#rgb235 pt-0.8rem pb-0.8rem">
      <label
        className="w-full text-1.6rem font-semibold text-#727272"
        htmlFor={htmlFor}
      >
        {children}
      </label>
      <input
        defaultValue={content === '********' ? '' : content}
        onChange={e => changeInputValue(e, name)}
        className="rounded-lg border w-full h-16 p-4 mt-4 text-1.6rem font-normal text-#717171"
        id={id}
        // type={name === 'password' ? 'password' : ''}
      ></input>
      <div className="w-full mt-4 mb-4 ml-4 text-1.2rem font-normal text-airbnb">
        {name !== 'name'
          ? ''
          : !value.match(nameReg)
          ? '한글로 2글자 이상 작성해주세요'
          : ''}
        {name !== 'birthDate'
          ? ''
          : value.length < 10
          ? 'YYYY-MM-DD 형태에 맞게 입력해주세요'
          : ''}
        {name !== 'password'
          ? ''
          : !value.match(passwordReg)
          ? '특수문자, 문자, 숫자를 포함해서 8자 이상 작성해주세요'
          : ''}
        {name !== 'contact'
          ? ''
          : !value.match(contactReg)
          ? '휴대폰 번호를 작성해주세요'
          : ''}
      </div>
      <button
        className="absolute top-0.8 right-0 text-#008489 text-1.6rem"
        name={name}
        onClick={onClick}
      >
        취소
      </button>
      <button
        name={name}
        onClick={e => patchMemberInfo(e, name, value, content)}
        className="text-white text-1.6rem h-16 w-32 px-5 m-2 shadow-lg rounded-lg bg-#008489 hover:bg-#004F52 "
      >
        저장
      </button>
    </div>
  );
};

export default ModifyInput;
