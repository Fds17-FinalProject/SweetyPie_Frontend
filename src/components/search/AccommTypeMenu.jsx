import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from './Checkbox';

const AccommTypeMenu = ({ setFilter }) => {
  const [accommType, setAccommType] = useState([]);
  const [checkBox, setCheckBox] = useState({
    '전체': false,
    '개인실': false,
    '객실': false,
    '다인실': false,
  });

  const history = useHistory();

  useEffect(() => { 
    const url = new URL(window.location.href);
    const types = url.searchParams.get('types') && url.searchParams.get('types').split(' ');

    types && types.forEach((type, i) => {
      setCheckBox(state => ({
        ...state,
        [type]: true, 
      }))
    })
   
  }, []);

  const onClick = name => () => {
    setCheckBox(state => ({
      ...state,
      [name]: !checkBox[name],
    }))
  }

  const savedType = () => {
    let params = [];
    const checkBoxKeys = Object.keys(checkBox);
    const url = new URL(window.location.href);

    checkBoxKeys.forEach(key => {
      if (checkBox[key]) {
        params.push(key);
      }
    });

    if (url.searchParams.get('types')) {
      url.searchParams.delete('types');
    }

    if (params.length !== 0) {
      url.searchParams.set('types', params.join('+'));
      history.push(decodeURIComponent(url.search));
    }

    if (!Object.values(checkBox).includes(true)) {
      url.searchParams.delete('types');
      history.push(url.search);
    }

    return setFilter(state => ({
      ...state,
      accommType: false,
    }))

  }


  return (
    // box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px
    <div className="w-36rem h-43rem border border-solid border-searchBorder rounded-3xl shadow-xl absolute top-20 z-20 bg-white" >
       <div className="pt-14 pb-14 border-b border-solid">
      <div className="flex flex-row" >
          <Checkbox name="전체" top="50px" checkBox={checkBox} onClick={onClick} accommType={accommType} setAccommType={setAccommType}/>
      <span className="mb-6 ml-20">
        <div className="text-1.6rem house">집 전체</div>
        <div className="text-1.4rem">집 전체를 단독으로 사용합니다.</div>
      </span>
    </div>
    <div>
        <Checkbox name="개인실" top="120px" checkBox={checkBox} onClick={onClick} accommType={accommType} setAccommType={setAccommType} />
      <span className="inline-block mb-6 ml-20 w-265px h-60px" style={{display: 'inline-block', width: 265, height: 60}}>
        <div className="text-1.6rem personal">개인실</div>
        <div className="text-1.4rem">침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.</div>
      </span>
    </div>

    <div>
        <Checkbox name="객실" top="190px" checkBox={checkBox} onClick={onClick} accommType={accommType} setAccommType={setAccommType} />
      <span className="inline-block mb-6 ml-20" style={{display: 'inline-block', width: 265, height: 60}}>
        <div className="text-1.6rem hotel">호텔 객실</div>
        <div className="text-1.4rem">부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.</div>
      </span>
    </div>

    <div>
        <Checkbox name="다인실"  top="270px" checkBox={checkBox} onClick={onClick} accommType={accommType} setAccommType={setAccommType} />
      <span className="inline-block mb-6 ml-20" style={{display: 'inline-block', width: 270, height: 60}}>
        <div className="text-1.6rem multi">다인실</div>
        <div className="text-1.4rem">사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다</div>
      </span>
        </div>
      </div>
      <div className="flex justify-between mx-4 mt-5 p-2">
        <button
          className="text-1.6rem text-#222 underline"
          onClick={() => {
             setCheckBox({
              house: false,
              personal: false,
              hotel: false,
              multi: false,
            })

          }}
        >
          지우기
        </button>
        <button
          className="w-5rem h-3rem text-1.4rem rounded-xl bg-black text-white border border-black"
          onClick={savedType}
        >
          저장
        </button>
      </div>
   
      </div>
  );
};

export default React.memo(AccommTypeMenu);