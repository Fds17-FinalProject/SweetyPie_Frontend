import styled, { css, keyframes } from 'styled-components';
import HeaderGuestEditModal from '../common/HeaderGuestEditModal';
import { BiSearch } from 'react-icons/bi';
import { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import HeaderCalendar from './HeaderCalendar';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const scrollUp = keyframes`
from {
  /* translate3d는 GPU기반이기 때문에 성능이 더 좋다  */
  transform: scale(0.3, 0.75) translateY(-8rem);
}
to {
  transform: scale(1, 1) translateY(0);
}
`;

const scrollDown = keyframes`
from {
  transform: scale(1.1, 1);
}
to {
  transform: scale(1, 1);
  visibility: hidden;
}
`;
  

const SearchHeader = styled.form`
position:relative;
display: flex;
cursor: pointer;
border: 1px solid #ccc;
border-radius: 999rem;
background: #fff;
width: ${({scrollY, searchStartState}) => !scrollY ? '85rem' : searchStartState ? '85rem' : '32rem'};
height: ${({scrollY, searchStartState}) => !scrollY ? '7rem' : searchStartState? '7rem' : '4.8rem'};
margin-top: ${({scrollY, searchStartState}) => !scrollY ? '5rem' : searchStartState ? '5rem' : '0'};
animation-duration: 0.1s;
animation-timing-function: ease-out;
animation-name: ${({scrollY, searchStartState}) => !scrollY ? scrollUp : searchStartState ? scrollUp : scrollDown};
`;


const Button = styled.button`
display: ${({ scrollY, searchStartState }) => !scrollY ? 'block' : searchStartState ? 'block' : 'none'};
:hover {
background: #ebebeb;
border-radius: 999rem;
z-index: 1;
}
:focus {
background: #fff;
border-radius: 999rem;
box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
transform: scale(1.03);
}
${props => props.test && css`
&:focus{
  background: #fff;
  border-radius: 999rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
  transform: scale(1.03);
}
`}
/* ${props => props.startDate !== null && css`
&:focus {
  background: #fff;
  border-radius: 999rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
  transform: scale(1.03);
}
`}
${props => props.endDate !== null && css`
&:focus {
  background: #fff;
  border-radius: 999rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
  transform: scale(1.03);
}
`} */
`;


// 서치 헤더 (위치 어디로 여행가세요?)
const SearchLocation = styled.div`
  position:absolute;
  top: 8rem;
  width: 50.5rem;
  border-radius: 2.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
`;
// 서치 헤더 (캘린더)
const SearchCalendar = styled.div`
  position:absolute;
  top: 8rem;
  width: 100%;
  border-radius: 2.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;

`;
// 서치 헤더 (인원 수)
const SearchPersonnel = styled.div`
  position:absolute;
  top: 8rem;
  right: 0;
  width: 38rem;
  border-radius: 2.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
`;


const LocationButton = styled.button.attrs(() => ({type: 'button'}))`
  width: 100%;
  /* height: 1rem; */
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  :hover {
    background: #f7f7f7;
    border-radius: 1rem;
  }
`;
const SearchButton = styled.button.attrs(() => ({ type: 'button' }))`
  position: absolute;
  right: 0;
  top: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  /* width: ${({location, calendar, personnel}) => location || calendar || personnel ? '8.5rem' : '4.8rem'}; */
  height: 4.8rem;
  border-radius: 999rem;
  background: #ff385c;
  :hover {
    background: #DE1661;
    transition: ease-in-out;
  }
`;
const SubmitButton = styled.button.attrs(() => ({ type: 'button' }))`
 position: absolute;
  right: 0;
  top: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  /* width: ${({location, calendar, personnel}) => location || calendar || personnel ? '8.5rem' : '4.8rem'}; */
  height: 4.8rem;
  border-radius: 999rem;
  background: #ff385c;
  :hover {
    background: #DE1661;
    transition: ease-in-out;
  }
`;

const HeaderSearch = forwardRef(({ scrollY, setScrollY, searchStartState, calendar, location, personnel, showSearchHeader, showCalendar, showLocation, showPersonnel, searchOnclick }, ref) => {
  // const [location, setLocation] = useState(false);
  // const [calendar, setCalendar] = useState(false);
  // const [personnel, setPersonnel] = useState(false);
  // 검색 시작 하기 눌렀을 시 모달 초기 상태
  // const [searchStartState, setSearchStartState] = useState(false);
  const [gu, setGu] = useState(null);
  console.log(gu);
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    lng: null,
  });
  const [count, setCount] = useState({
    adultNum: 0,
    childNum: 0,
    infantNum: 0,
    status: false,
  });
  console.log('count', count);
  const url = new URL(window.location.href);
  const history = useHistory();


  // moment-range를 통해 moment 생성 함수를 받아온다 -> moment() 호출 시 moment객체 생성
  const moment = extendMoment(Moment);

  // url 쿼리에 담기
  // url.searchParams.set('currentLocation ', gu);
  // url.searchParams.set(
  //   'checkInDate',
  //   dateRange.startDate.format('YYYY-MM-DD'),
  // );
  // url.searchParams.set(
  //   'checkoutDate',
  //   dateRange.endDate.format('YYYY-MM-DD'),
  // );

  // const hideSearchModal = ({ target }) => {
  //   if (!target.dataset.name) {
  //     setLocation(false);
  //     setCalendar(false);
  //     setPersonnel(false);
  //     setSearchStartState(false);
  //   }
  // };
  // // 검색 시작하기 onClick시 헤더 스타일 변경
  // const showSearchHeader = ({ target }) => {
  //   if (target.dataset.name === 'open') {
  //     // 상태 true로 바뀌면서 스타일 변경
  //     setSearchStartState(true);
  //     // 위치 open
  //     setLocation(true);
  //   }
  // };

  // // 헤더 위치 (어디로 여행가세요?)
  // const showLocation = ({ target }) => {
  //   if (target.dataset.name === 'location') {
  //     setLocation(true);
  //     setCalendar(false);
  //     setPersonnel(false);
  //   }
  // };
  // // 헤더 켈린더 ( 체크인, 체크아웃 )
  // const showCalendar = ({ target }) => {
  //   if (target.dataset.name === 'calendar') {
  //     setCalendar(true);
  //     setLocation(false);
  //     setPersonnel(false);
  //   }
  // };
  // // 헤더 인원 수
  // const showPersonnel = ({ target }) => {
  //   if (target.dataset.name === 'personnel') {
  //     setPersonnel(true);
  //     setLocation(false);
  //     setCalendar(false);
  //   }
  // };
  // // 헤더에 검색 버튼 누를 시 location: true 하면서 검색 버튼 스타일 변경
  // const searchOnclick = ({ target }) => {
  //   if (target.dataset.name === 'search') {
  //     setLocation(true);
  //   }
  // };

  const onSubmit = e => {
    e.preventDefault();
  }
 
  const getCurrentLocation = async e => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });

  }

  const [dateRange, setDateRange] = useState({
    // 체크인 날짜의 초기값 지정
    startDate: null,
    // 체크아웃 날짜의 초기값 지정
    endDate: null,
  });
  console.log('startDate', dateRange.startDate);
  console.log('endDate', dateRange.endDate);
    // 달력 날짜 포커스 상태
  const [focus, setFocus] = useState('startDate');
  // 달력 날짜 변경 함수
  const handleOnDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
    // if (startDate) {
    //   console.log('startDate');
    //   setCalendar(true);
    // }
    // else if (endDate) {
    //   console.log('endDate');
    //   setCalendar(true);
    // }
  };

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
  const searchResult = () => {
    // 전부 다 입력했을 경우
    if (gu !== null && dateRange.startDate !== null && dateRange.endDate !== null && count.adultNum !== 0) {
      history.push(`/accommodations/search?searchKeyword=${gu}&ckeckIn=${dateRange.startDate.format('YYYY-MM-DD')}&checkout=${dateRange.endDate.format('YYYY-MM-DD')}&guestNum=${count.adultNum+count.childNum}`);
    }
    // 위치만 입력 했을경우
    else if (gu !== null && dateRange.startDate === null && dateRange.endDate === null && count.adultNum === 0) {
      history.push(`/accommodations/search?searchKeyword=${gu}`);
    }
    // 위치, 체크인, 체크아웃 입력했을 경우
    else if (gu !== null && dateRange.startDate !== null && dateRange.endDate !== null && count.adultNum === 0) {
      history.push(`/accommodations/search?searchKeyword=${gu}&ckeckIn=${dateRange.startDate.format('YYYY-MM-DD')}&checkout=${dateRange.endDate.format('YYYY-MM-DD')}`);
    } 
    // 위치, 게스트 수 입력했을 경우
    else if (gu !== null && dateRange.startDate === null && dateRange.endDate === null && count.adultNum !== 0) {
      history.push(`/accommodations/search?searchKeyword=${gu}&guestNum=${count.adultNum+count.childNum}`);
    }
  };

  useEffect(() => {
    if (currentLocation.lat !== null && currentLocation.lng !== null) { 
      async function getAddress() {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.lat},${currentLocation.lng}&key=AIzaSyA6XrrGClq-qmlmWDQCWGsgau4tzbQcINU`);      
        if (res) {
          setGu(res.data.results[4].formatted_address.substr(11));
        }
      }
      getAddress();
    }
  }, [currentLocation, gu])
  return (
    <SearchHeader onSubmit={onSubmit} scrollY={ scrollY } searchStartState = {searchStartState} id='test'>
      <Button className="w-27rem text-left" scrollY={scrollY} searchStartState={searchStartState} onClick={showLocation}  data-name="location">
          <div className="border-r px-14" data-name="location">
            <b className="block text-1.2rem" data-name="location">위치</b>
            <label className="a11y-hidden" htmlFor="search-input" data-name="location">
              여행지를 골라주세요.
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="어디로 여행가세요?"
              className="block text-1.6rem text-#717171 bg-transparent"
            data-name="location"
            defaultValue={gu && gu}
            ></input>
          </div>
        </Button>

      <Button ref={ref} test={true} startDate={dateRange.startDate} className="w-18rem text-left" scrollY={ scrollY } searchStartState = {searchStartState} onClick={showCalendar} data-name="calendar">
          <div className="border-r px-6" data-name="calendar" >
            <b className="block text-1.2rem" data-name="calendar">체크인</b>
          <span className="block text-1.4rem text-#717171" data-name="calendar">{dateRange.startDate
                    ? dateRange.startDate.format('YYYY-MM-DD')
                    : '날짜 추가'}</span>
          </div>
        </Button>

        <Button ref={ref} endDate={dateRange.endDate} className="w-18rem text-left" scrollY={ scrollY } searchStartState = {searchStartState} onClick={showCalendar} data-name="calendar">
          <div className="border-r px-6" data-name="calendar">
            <b className="block text-1.2rem" data-name="calendar">체크아웃</b>
            <span className="block text-1.4rem text-#717171" data-name="calendar">{
                  dateRange.endDate
                    ? dateRange.endDate.format('YYYY-MM-DD')
                    : '날짜 추가'
                }</span>
          </div>
        </Button>

        <Button className="w-22rem text-left px-6" scrollY={ scrollY } searchStartState = {searchStartState} onClick={showPersonnel} data-name="personnel">
          <div className="relative" data-name="personnel"> 
            <b className="block text-1.2rem" data-name="personnel">인원</b>
          <span className="block text-1.4rem text-#717171" data-name="personnel">{count.adultNum !== 0 ? `게스트 ${count.adultNum+count.childNum+count.infantNum}명` : '게스트 추가'}</span>
          {location || calendar || personnel ?
            <SubmitButton onClick={searchResult}>
            <BiSearch size={20} className=" text-white" />
            <span className="text-white text-1.6rem ml-0.4rem">검색</span>
          </SubmitButton> :
            <SearchButton data-name="open" location={location} calendar={calendar} personnel={personnel} onClick={searchOnclick}>
            <BiSearch size={ 20 } className=" text-white"  data-name="search"/>
            {/* {location || calendar || personnel ? <BiSearch size={20}/> <span> className="text-white text-1.6rem ml-0.4rem">검색</span>  : <BiSearch size={20}/> } */}
            </SearchButton>
          }

          </div>
      </Button>
      {scrollY && !searchStartState &&
        <div className="flex w-full justify-between items-center pr-0.8rem" onClick={showSearchHeader} data-name="open">
        <span className="text-1.4rem ml-2rem" data-name="open">검색 시작하기</span>
        <button className="flex justify-center items-center w-3rem h-3rem rounded-full bg-airbnb hover:bg-#DE1661 transition transform hover:ease-in-out " data-name="open">
          <BiSearch className=" w-6 h-6 text-white" />
        </button>
        </div>}
        {location && (
          <SearchLocation >
            <LocationButton onClick={getCurrentLocation}>
              <figure>
                <img className="w-4.5rem h-4.5rem rounded-xl " src={'/img/mapIcon.jpg'} alt="어디로 여행가세요 아이콘"/>
                <figcaption className="a11y-hidden">어디로 여행가세요?</figcaption>
              </figure>
            <span className="text-1.6rem ml-1.8rem text-#727272">가까운 여행지 둘러보기</span>
            </LocationButton>
          </SearchLocation>
        )}
      {calendar && (
        <SearchCalendar>
          <HeaderCalendar handleOnDateChange={handleOnDateChange} dateRange={dateRange} focus={focus} setFocus={setFocus}/>
        </SearchCalendar>
        )}
{/* 동찬이 형이 인원수 뷰 만들어주면 여기에 달아주세요 */}
      {personnel && (
        <SearchPersonnel >
          <HeaderGuestEditModal count={count} setCount={setCount} increaseGuestNum={increaseGuestNum} decreaseGuestNum={decreaseGuestNum}/>
        </SearchPersonnel>
      )}
    </SearchHeader>
  );
});


export default HeaderSearch;