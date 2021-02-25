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
          <section>
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

          <section className="w-full">
            <div className="text-3.2rem pb-12">
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
            <div className="text-3.2rem pb-12">
              이 달의 추천 여행지&#58; 강릉{' '}
            </div>

            <div className="flex w-full">
              <Link to="/accommodation/8888" className="w-1/4 mr-8">
                <RecommendPopup
                   img={[
                    "https://a0.muscache.com/pictures/c305294e-84aa-4c5c-bdd6-2205d3dead08.jpg",
                    "https://a0.muscache.com/pictures/700a645c-5ab4-437c-abd7-23ecf24d7505.jpg",
                    "https://a0.muscache.com/pictures/2599f9ec-9351-4248-83ae-182e862a6d2f.jpg",
                    "https://a0.muscache.com/pictures/9e369fe5-0d11-4351-81b8-31ec12aecb48.jpg",
                    "https://a0.muscache.com/pictures/4bf5279d-b94a-4ae2-88c9-bcc405603043.jpg",
                  ]}
                  accomm={{
                    rating: 4.79,
                    reviewNum: 6,
                    buildingType: '아파트',
                    accommodationType: '전체',
                    title: 'LIKE MY HOME 라이크마이홈 (Gangneung, Jumunjin)',
                  }}
                  className="rounded-xl"
                />
              </Link>
              <Link to="/accommodation/7779" className="w-1/4 mr-8">
                <RecommendPopup
                  img={[
                    "https://a0.muscache.com/pictures/424f6985-5fb9-439c-994a-11f5e958ac75.jpg",
                    "https://a0.muscache.com/pictures/9eb5c97e-d29c-4a04-aea9-a6c5595da09f.jpg",
                    "https://a0.muscache.com/pictures/2a9e6b39-fdb2-45b3-bbee-50e59b3a769b.jpg",
                    "https://a0.muscache.com/pictures/743b2a1a-e62f-4451-b86c-835926a36371.jpg",
                    "https://a0.muscache.com/pictures/47135fe4-0550-4b7d-a151-7ab539cf4c98.jpg",
                  ]}
                  accomm={{
                    rating: 4.0,
                    reviewNum: 6,
                    buildingType: '펜션',
                    accommodationType: '전체',
                    title: '스파의 이완과 테라스의 풍경이 멋진 강릉의 301호 객실',
                  }}
                  className="rounded-xl"
                />
              </Link>
              <Link to="/accommodation/" className="w-1/4 mr-8">
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
              <Link to="/accommodation/" className="w-1/4 mr-8">
                <RecommendPopup
                  img={[
                    "https://a0.muscache.com/pictures/0825d983-4ec8-41a5-9bc7-b0b56ed8f97c.jpg",
                    "https://a0.muscache.com/pictures/00d00be3-aabd-4d7f-93bf-d170b3f6d6e5.jpg",
                    "https://a0.muscache.com/pictures/420c229f-d481-4b7e-81fe-d5fba9416261.jpg",
                    "https://a0.muscache.com/pictures/21c27e06-3a85-4ee7-8d9f-424933bea99e.jpg",
                    "https://a0.muscache.com/pictures/df6e7448-80a9-4030-adaa-98e4dd4fbc28.jpg",
                  ]}
                  accomm={{
                    rating: 4.33,
                    reviewNum: 3,
                    buildingType: '펜션',
                    accommodationType: '전체',
                    title: '우드와 화이트의 색상이 어우러진  강릉 폴카 객실',
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
