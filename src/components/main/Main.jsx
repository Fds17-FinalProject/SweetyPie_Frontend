import React, { useState } from 'react';
import styled from 'styled-components';
import MainCity from './MainCity';
import MainRecommendation from './MainRecommendation';
import CommonHeaderContainer from '../../containers/CommonHeaderContainer';
import MainFooter from './MainFooter';
import RecommendPopup from '../main/RecommendPopup';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  background-image: url('/img/main.jpg');
  background-size: cover;
  width: 100%;
  padding-top: 20rem;
  padding-bottom: 20rem;
`;
const Textarea = styled.span`
  color: #fff;
  display: block;
  font-size: 5.2rem;
  line-height: 5.8rem;
  font-weight: 800;
`;

const Main = ({ searchMainCity, searchAccommType }) => {
  const [location, setLocation] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [personnel, setPersonnel] = useState(false);
  const [address, setAddress] = useState('');
  // 검색 시작 하기 눌렀을 시 모달 초기 상태
  const [searchStartState, setSearchStartState] = useState(false);
  const hideSearchModal = ({ target }) => {
    if (!target.dataset.name) {
      setLocation(false);
      setCalendar(false);
      setPersonnel(false);
      setSearchStartState(false);
    }
  };

  return (
    <div onClick={hideSearchModal}>
      <CommonHeaderContainer
        location={location}
        setLocation={setLocation}
        calendar={calendar}
        setCalendar={setCalendar}
        personnel={personnel}
        setPersonnel={setPersonnel}
        searchStartState={searchStartState}
        setSearchStartState={setSearchStartState}
        address={address}
        setAddress={setAddress}
        
      />
      <MainContainer>
        <section className="w-full pt-72 pb-16 px-32">
          <div>
            <Textarea>이제, 여행은<br/>가까운 곳에서</Textarea>
          </div>
        </section>
      </MainContainer>

      <div>
        <div className="px-32">
          <section className="mb-4rem">
            <div className="flex flex-wrap py-24">
              <div className="flex w-full pb-3">
                <button className="w-1/4" onClick={e => searchMainCity('서울')}>
                  <MainCity src={'/img/seoul.jpg'} alt={'seoul'}>
                    서울
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={e => searchMainCity('인천')}>
                  <MainCity src={'/img/incheon.jpg'} alt={'incheon'}>
                    인천
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={e => searchMainCity('대구')}>
                  <MainCity src={'/img/daegu.jpg'} alt={'daegu'}>
                    대구
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={e => searchMainCity('부산')}>
                  <MainCity src={'/img/uijungbu.jpg'} alt={'uijungbu'}>
                    부산
                  </MainCity>
                </button>
              </div>
              <div className="flex w-full pt-3">
                <button className="w-1/4" onClick={e => searchMainCity('제주')}>
                  <MainCity src={'/img/bucheon.jpg'} alt={'bucheon'}>
                    제주
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={e => searchMainCity('수원')}>
                  <MainCity src={'/img/suwon.jpg'} alt={'suwon'}>
                    수원
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={e => searchMainCity('전주')}>
                  <MainCity src={'/img/ansan.jpg'} alt={'ansan'}>
                    전주
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={e => searchMainCity('대전')}>
                  <MainCity src={'/img/daejeon.jpg'} alt={'daejeon'}>
                    대전
                  </MainCity>
                </button>
              </div>
            </div>
          </section>

          <section className="w-full mb-6rem">
            <div className="text-3.2rem pb-12 font-semibold">
              어디에서나, 여행은 살아보는 거야!
            </div>

            <div className="flex w-full">
              <button
                className="w-1/4 pr-3.5"
                onClick={() => searchAccommType('전체')}
              >
                <MainRecommendation src={'/img/housing.jpg'} alt={'단독 주택'}>
                  단독 주택
                </MainRecommendation>
              </button>

              <button
                className="w-1/4 pr-3.5"
                onClick={() => searchAccommType('다인실')}
              >
                <MainRecommendation
                  src={'/img/apartment.jpg'}
                  alt={'게스트 하우스'}
                >
                  게스트 하우스
                </MainRecommendation>
              </button>

              <button
                className="w-1/4 pr-3.5"
                onClick={() => searchAccommType('개인실')}
              >
                <MainRecommendation src={'/img/subhouse.jpg'} alt={'별채'}>
                  별채
                </MainRecommendation>
              </button>

              <button
                className="w-1/4 pr-3.5"
                onClick={() => searchAccommType('객실')}
              >
                <MainRecommendation src={'/img/hotel.jpg'} alt={'호텔'}>
                  호텔
                </MainRecommendation>
              </button>
            </div>
          </section>

          <section className="w-full pb-16">
            <div className="text-3.2rem pb-12 font-semibold">
              이 달의 추천 여행지&#58; 강릉{' '}
            </div>

            <div className="flex w-full">
              <Link to="/accommodation/10301" className="w-1/4 mr-8">
                <RecommendPopup
                   img={[
                    "https://a0.muscache.com/pictures/e8e52ae4-c670-4b1c-a2cd-326e46f2f95f.jpg",
                    "https://a0.muscache.com/pictures/48f4cbe3-4a48-4304-8878-863155371811.jpg",
                    "https://a0.muscache.com/pictures/4b6f57df-ebc3-4267-89ef-9c24a44b67e4.jpg",
                    "https://a0.muscache.com/pictures/f97e069d-8114-4786-8127-a39b68f2e772.jpg",
                    "https://a0.muscache.com/pictures/01fa0cbd-9833-415e-8a37-f427d57a7a2c.jpg",
                  ]}
                  accomm={{
                    rating: 5.0,
                    reviewNum: 6,
                    buildingType: '아파트',
                    accommodationType: '전체',
                    title: '[로니로니하우스]펜트하우스넓은베란다주문진5분오션뷰&마운틴뷰',
                  }}
                  className="rounded-xl"
                />
              </Link>
              <Link to="/accommodation/7774" className="w-1/4 mr-8">
                <RecommendPopup
                  img={[
                    "https://a0.muscache.com/pictures/22d2aa5d-333f-4179-b0c3-1c324da50f43.jpg",
                    "https://a0.muscache.com/pictures/c3a2c021-9aa5-4e6b-9fa1-27380c9b16e9.jpg",
                    "https://a0.muscache.com/pictures/b92e95b0-8be6-42b2-8e92-857ac5900dd4.jpg",
                    "https://a0.muscache.com/pictures/92b790dc-a960-4541-8e1f-33893c29a1ff.jpg",
                    "https://a0.muscache.com/pictures/945f8ab7-5e42-4c29-90c9-7996cdc63687.jpg",
                  ]}
                  accomm={{
                    rating: 4.88,
                    reviewNum: 6,
                    buildingType: '호텔',
                    accommodationType: '객실',
                    title: '세인트존스 경포호텔 파노라마 오션뷰 코너스위트 9027호',
                  }}
                  className="rounded-xl"
                />
              </Link>
              <Link to="/accommodation/10337" className="w-1/4 mr-8">
                <RecommendPopup
                  img={[
                    "https://a0.muscache.com/pictures/79213d9e-c20c-4f56-ba7a-7c4715c193d5.jpg",
                    "https://a0.muscache.com/pictures/82782a1d-7a7e-4b7b-b95d-5159443070c8.jpg",
                    "https://a0.muscache.com/pictures/f241c9ca-9cac-408e-b78b-a10d20ec03f4.jpg",
                    "https://a0.muscache.com/pictures/f92c4b7e-4636-4e4f-81e1-94c8351f8148.jpg",
                    "https://a0.muscache.com/pictures/20b93647-285f-441c-9ff0-cb1d9ef40173.jpg",
                  ]}
                  accomm={{
                    rating: 4.33,
                    reviewNum: 6,
                    buildingType: '펜션',
                    accommodationType: '개인실',
                    title: '코발트 블루가 있는 인테리어가 돋보이는 객실 301호',
                  }}
                  className="rounded-xl"
                />
              </Link>
              <Link to="/accommodation/10506" className="w-1/4 mr-8">
                <RecommendPopup
                  img={[
                    "https://a0.muscache.com/pictures/81dcf13e-24bb-491c-ae1d-6f9a80b1e9b3.jpg",
                    "https://a0.muscache.com/pictures/6933e53d-82e6-457a-af9e-2593ae7af789.jpg",
                    "https://a0.muscache.com/pictures/399d2d25-942b-4f18-81e4-397cd5f9cac3.jpg",
                    "https://a0.muscache.com/pictures/9f55dcd2-36c4-47a6-b2a1-06b61f2ebe55.jpg",
                    "https://a0.muscache.com/pictures/4b2abd7e-08c8-4ca3-8f88-972d8d6956f7.jpg",
                  ]}
                  accomm={{
                    rating: 4.94,
                    reviewNum: 3,
                    buildingType: '아파트',
                    accommodationType: '전체',
                    title: '# 영진해변#오션뷰# 동해바다를 한눈에 담은 더 힐 하우스',
                  }}
                  className="rounded-xl"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;
