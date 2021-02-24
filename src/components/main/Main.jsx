import React, { useState } from 'react';
import '../../assets/output.css';
import styled from 'styled-components';
import MainCity from './MainCity';
import MainRecommendation from './MainRecommendation';
import CommonHeaderContainer from '../../containers/CommonHeaderContainer';
import Footer from './Footer';
import MapPopup from '../search/MapPopup';


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
  width: 30rem;
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
            <Textarea>이제, 여행은 가까운 곳에서</Textarea>
          </div>
        </section>
      </MainContainer>

      <div>
        <div className="px-32">
          <section>
            <div className="flex flex-wrap py-24">
              <div className="flex w-full pb-3">
                <button className="w-1/4" onClick={(e) => searchMainCity('서울')}>
                  <MainCity src={'/img/seoul.jpg'} alt={'seoul'}>
                    서울
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={(e) => searchMainCity('인천')}>
                  <MainCity src={'/img/incheon.jpg'} alt={'incheon'}>
                    인천
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={(e) => searchMainCity('대구')}>
                  <MainCity src={'/img/daegu.jpg'} alt={'daegu'} >
                    대구
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={(e) => searchMainCity('부산')}>
                  <MainCity src={'/img/uijungbu.jpg'} alt={'uijungbu'}>
                    부산
                  </MainCity>
                </button>
              </div>
              <div className="flex w-full pt-3">
                <button className="w-1/4" onClick={(e) => searchMainCity('제주')}>
                <MainCity src={'/img/bucheon.jpg'} alt={'bucheon'}>
                  제주
                </MainCity>
                </button>
                
                <button className="w-1/4" onClick={(e) => searchMainCity('수원')}>
                  <MainCity src={'/img/suwon.jpg'} alt={'suwon'}>
                    수원
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={(e) => searchMainCity('전주')}>
                  <MainCity src={'/img/ansan.jpg'} alt={'ansan'}>
                    전주
                  </MainCity>
                </button>

                <button className="w-1/4" onClick={(e) => searchMainCity('대전')}>
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
            <button className="w-1/4 pr-3.5" onClick={() => searchAccommType('전체')}>
              <MainRecommendation src={'/img/housing.jpg'} alt={'단독 주택'}>
                단독 주택
              </MainRecommendation>
            </button>

              <button className="w-1/4 pr-3.5" onClick={() => searchAccommType('다인실')}>
                <MainRecommendation src={'/img/apartment.jpg'} alt={'게스트 하우스'} >
                  게스트 하우스
                </MainRecommendation>
                
              </button>
              
              <button className="w-1/4 pr-3.5" onClick={() => searchAccommType('개인실')}>
                <MainRecommendation src={'/img/subhouse.jpg'} alt={'별채'} >
                  별채
                </MainRecommendation>
              </button>

              <button className="w-1/4 pr-3.5" onClick={() => searchAccommType('객실')}>
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
              <div className="w-1/4 mr-8">
                {/* <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                /> */}
              </div>
              <div className="w-1/4 mr-8">
                {/* <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                /> */}
              </div>
              <div className="w-1/4 mr-8">
                {/* <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                /> */}
              </div>
              <div className="w-1/4 mr-8">
                {/* <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                /> */}
              </div>
              {/* <Link className="w-1/4 pr-3.5" to="#">
                <figure>
                  <img
                    className="rounded-lg"
                    src={img + '/img/apartment.jpg'}
                    alt="apartment"
                  />
                  <figcaption className="text-1.8rem p-4">아파트</figcaption>
                </figure>
              </Link>

              <Link className="w-1/4 pr-3.5" to="#">
                <figure>
                  <img
                    className="rounded-lg"
                    src={img + '/img/apartment.jpg'}
                    alt="apartment"
                  />
                  <figcaption className="text-1.8rem p-4	">아파트</figcaption>
                </figure>
              </Link>

              <Link className="w-1/4 pr-3.5" to="#">
                <figure>
                  <img
                    className="rounded-lg"
                    src={img + '/img/subhouse.jpg'}
                    alt="subhouse"
                  />
                  <figcaption className="text-1.8rem p-4	">별채</figcaption>
                </figure>
              </Link>

              <Link className="w-1/4 pr-3.5" to="#">
                <figure>
                  <img
                    className="rounded-lg"
                    src={img + '/img/hotel.jpg'}
                    alt="hotel"
                  />
                  <figcaption className="text-1.8rem p-4	">호텔</figcaption>
                </figure>
              </Link> */}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
