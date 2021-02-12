import React, { useState } from 'react';
import AccommTypeMenu from './AccommTypeMenu';
import styled from 'styled-components';
import AccommList from './AccommList';
import RecentSearch from './RecentSearch';
import MapPopup from './MapPopup';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import Pagination from './Pagination';
import ChargeMenu from './ChargeMenu';

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid #b0b0b0;
  background-color: #ffffff;
  outline: none !important;
  padding: 0px;
  margin: 0px;
  border-radius: 30px;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    border: 1px solid #222222;
  }
`;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 10px;
`;

const MapContainer = styled.div`
  width: calc(100vw - 86.4rem);
`;

const SearchTemplate = ({ accommodations }) => {
  console.log(accommodations);
  const [filter, setFilter] = useState({
    accommType: false,
    chargeMenu: false,
  });

  const clickFilter = ({ target }) => {
    if (target.name === 'accommType')
      setFilter({ accommType: !filter.accommType, chargeMenu: false });
    if (target.name === 'chargeMenu')
      setFilter({ chargeMenu: !filter.chargeMenu, accommType: false });
  };

  return (
    <div className="w-full flex flex-row flex-nowrap pt-32">
      <div className="w-86.4rem border pr-8 pl-8 pt-32">
        <span className="text-1.4rem pb-4">300개 이상의 숙소</span>
        <h1 className="text-5xl mb-12 font-bold">강릉시의 숙소</h1>
        <div className="mt-12 mb-12 relative">
          <ButtonWrapper>
            <StyledButton
              onClick={clickFilter}
              name="accommType"
              style={{
                border: `${
                  filter.accommType ? '2px solid #222222' : '1px solid #B0B0B0'
                }`,
              }}
              filter={filter}
            >
              숙소 유형
            </StyledButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <StyledButton
              onClick={clickFilter}
              name="chargeMenu"
              style={{
                border: `${
                  filter.chargeMenu ? '2px solid #222222' : '1px solid #B0B0B0'
                }`,
              }}
              filter={filter}
            >
              요금
            </StyledButton>
          </ButtonWrapper>
          {filter.accommType ? <AccommTypeMenu /> : ''}

          {filter.chargeMenu ? <ChargeMenu /> : ''}
        </div>
        <div className="text-1.6rem text-#717171 border-b border-searchBorder pb-10">
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.
        </div>
        <div className="text-1.6rem pb-10 pt-10">
          예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
        </div>
        <ul>
          {accommodations &&
            accommodations.map(accommodation => (
              <AccommList {...accommodation} />
            ))}
        </ul>
        <div className="pt-20 border-t border-#EBEBEB relative">
          <h2 className="text-2.2rem text-mainFont">최근 조회</h2>
          <p className="text-1.6rem text-mainFont">
            현재 검색 결과와 일치하도록 날짜와 가격이 업데이트되었습니다.
          </p>
          <div className="absolute top-24 right-0">
            <button className="inline-flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl border-2 border-gray-300 transition-colors duration-150 focus:outline-none bg-white  rounded-full focus:shadow-outline hover:bg-gray-100 transform hover:scale-110">
              <HiChevronLeft />
            </button>
            <button className="inline-flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl border-2 border-gray-300 transition-colors duration-150 focus:outline-none bg-white  rounded-full focus:shadow-outline hover:bg-gray-100 transform hover:scale-110">
              <HiChevronRight />
            </button>
          </div>
          <ul className="h-18rem flex flex-row flex-wrap overflow-hidden mb-4">
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
            <RecentSearch />
          </ul>
        </div>
        <div className="pt-40 flex flex-col flex-wrap items-center">
          <Pagination />
          <div className="text-1.4rem text-#22222">
            숙소 300개 이상 중 1 - 10
          </div>
          <div className="text-1.2rem text-#717171 py-14">
            전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이
            추가될 수 있습니다.
          </div>
        </div>
      </div>
      <MapContainer className=" border bg-red-400">
        <MapPopup className="absolute z-index-10 left-10" />
      </MapContainer>
    </div>
  );
};

export default SearchTemplate;
