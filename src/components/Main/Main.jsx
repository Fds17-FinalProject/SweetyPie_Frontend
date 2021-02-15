import React, { useState } from 'react';
import '../../assets/output.css';
import styled from 'styled-components';

import MainCity from './MainCity';
import MainRecommendation from './MainRecommendation';
import CommonHeaderContainer from '../../containers/CommonHeaderContainer';
import Footer from './Footer';
import MapPopup from '../search/MapPopup';

const img = window.location.origin;

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

const Main = () => {
  const [location, setLocation] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [personnel, setPersonnel] = useState(false);
    // 검색 시작 하기 눌렀을 시 모달 초기 상태
  const [searchStartState, setSearchStartState] = useState(false);
  const hideSearchModal = ({ target }) => {
    if (!target.dataset.name) {
      setLocation(false);
      setCalendar(false);
      setPersonnel(false);
      setSearchStartState(false);
    }
  }

  return (
    <div onClick={hideSearchModal} >
      <CommonHeaderContainer
        location={location}
        setLocation={setLocation}
        calendar={calendar}
        setCalendar={setCalendar}
        personnel={personnel}
        setPersonnel={setPersonnel}
        searchStartState={searchStartState}
        setSearchStartState={setSearchStartState}
      />
      <MainContainer>
        <section className="w-full pt-72 pb-16 px-32">
          <div>
            <Textarea>이제, 여행은 가까운 곳에서</Textarea>
          </div>
        </section>
      </MainContainer>

      <div>
        <div className="max-w-screen-2xl px-32">
          <section>
            <div className="flex flex-wrap py-24">
              <div className="flex w-full pb-3">
                <MainCity src={'/img/seoul.jpg'} alt={'seoul'}>
                  서울
                </MainCity>
                <MainCity src={'/img/incheon.jpg'} alt={'incheon'}>
                  인천
                </MainCity>
                <MainCity src={'/img/daegu.jpg'} alt={'daegu'}>
                  대구
                </MainCity>
                <MainCity src={'/img/uijungbu.jpg'} alt={'uijungbu'}>
                  의정부
                </MainCity>
              </div>
              <div className="flex w-full pt-3">
                <MainCity src={'/img/bucheon.jpg'} alt={'bucheon'}>
                  부천
                </MainCity>
                <MainCity src={'/img/suwon.jpg'} alt={'suwon'}>
                  수원
                </MainCity>
                <MainCity src={'/img/ansan.jpg'} alt={'ansan'}>
                  안산
                </MainCity>
                <MainCity src={'/img/daejeon.jpg'} alt={'daejeon'}>
                  대전
                </MainCity>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="text-3.2rem pb-12">
              어디에서나, 여행은 살아보는 거야!
            </div>

            <div className="flex w-full font-extrabold">
              <MainRecommendation src={'/img/housing.jpg'} alt={'housing'}>
                주택
              </MainRecommendation>
              <MainRecommendation src={'/img/apartment.jpg'} alt={'apartment'}>
                아파트
              </MainRecommendation>
              <MainRecommendation src={'/img/subhouse.jpg'} alt={'subhouse'}>
                별채
              </MainRecommendation>
              <MainRecommendation src={'/img/hotel.jpg'} alt={'hotel'}>
                호텔
              </MainRecommendation>
            </div>
          </section>

          <section className="w-full pb-16">
            <div className="text-3.2rem pb-12">
              이 달의 추천 여행지&#58; 강릉{' '}
            </div>

            <div className="flex w-full">
              <div className="w-1/4 mr-8">
                <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                />
              </div>
              <div className="w-1/4 mr-8">
                <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                />
              </div>
              <div className="w-1/4 mr-8">
                <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                />
              </div>
              <div className="w-1/4 mr-8">
                <MapPopup
                  style={{ paddingRight: '10px', borderRadius: '10px' }}
                />
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