import React from 'react';
import '../../assets/output.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainCity from './MainCity';
import MainRecommendation from './MainRecommendation';

const img = window.location.origin;
const res = {
  "id": 1,
  "city": "강릉시",
  "gu": "주문진읍",
  "title": "주문진 해변가 Ocean View, 넓고 쾌적한  Stuido Apartment",
  "bathroomNum": 1,
  "bedroomNum": 1,
  "bedNum": 1,
  "price": 44000,
  "capacity": 2,
  "contact": "010-1234-5678",
  "latitude": "37,89967",
  "longitude": "128,83068",
  "locationDesc": "",
  "transportationDesc": "",
  "accommodationDesc": "해안도로 바로 옆 고층에 위치하여 오션뷰가 훌륭하며, 침대에서 해돋이 감상이 포인트입니다\n\n숙소\n해안도로 바로 옆 고층에 위치하여 오션뷰와 일출 등이 훌륭하며\n특히 침대에서 해돋이를 볼 수 있는 특장점이 있습니다.\n\n-넉넉한 주차 공간\n지상 1층과 엘리베이터가 연계된 지하 1층에 넓은 주차공간이 있습니다.\n\n숙소는\n깨끗한 신축 풀옵션 아파트형이며,\n-가전(TV, 냉장고, 인덕션, 전자렌지, 세탁기, 드라이기, 커피포트 등)\n-가구(이불장, 옷장, 침대, 쇼파, 테이블 등)\n-무료 와이파이\n-욕실용품(수건, 치약, 샴푸, 린스, 바스 등)\n-취사 도구(냄비, 프라이팬, 그릇, 수저, 취사도구 등)\n등이 깔끔하게 준비되어 있습니다.\n\n셀프 체크인 - 당일 알려드리는 비번을 통해 셀프 체크인 합니다.\n\n기타 주의사항\n1. 숙소 내 절대 금연\n2. 풍선, 향초 등 파티와 관련된 행위 금지\n3. 반려견, 반려묘 등 반려 동물 입실 금지\n\n위 사안에 대해선 절대 금지되며\n타세대 민원 신고에 의해 즉시 퇴실 조치가 진행되기도 하오니 각별한 주의 부탁드립니다.\n\n\n\n게, 구이(삼겹살, 생선 등) 조리는 절대 금지 - 추가 청소비 20,000원이 청구 될 수 있습니다.\n\n\n분리수거는 퇴실 시 1층 로비 앞 쓰레기장에 분리 배출합니다.\n\n음식물 쓰레기는 봉투에 담아 씽크대 안에 둡니다.\n\n일반 쓰레기는 봉투에 담아 실내에 둡니다.\n\n퇴실 시 보일러는 17도로 하고 퇴실합니다.",
  "hostDesc": "",
  "rating": "0",
  "reviewNum": 91,
  "accommodationType": "전체",
  "buildingType": "아파트",
  "hostName": "Henry",
  "hostReviewNum": 0
};

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
  font-weight:800;
`;

const Main = () => {
  return (
    <>
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
                <MainCity src={'/img/seoul.jpg'} alt={'seoul'}>서울</MainCity>
                <MainCity src={'/img/incheon.jpg'} alt={'incheon'}>인천</MainCity>
                <MainCity src={'/img/daegu.jpg'} alt={'daegu'}>대구</MainCity>
                <MainCity src={'/img/uijungbu.jpg'} alt={'uijungbu'}>의정부</MainCity>
              </div>
              <div className="flex w-full pt-3">
              <MainCity src={'/img/bucheon.jpg'} alt={'bucheon'}>부천</MainCity>
              <MainCity src={'/img/suwon.jpg'} alt={'suwon'}>수원</MainCity>
              <MainCity src={'/img/ansan.jpg'} alt={'ansan'}>안산</MainCity>
              <MainCity src={'/img/daejeon.jpg'} alt={'daejeon'}>대전</MainCity>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="text-3.2rem pb-12">
              어디에서나, 여행은 살아보는 거야!
            </div>

            <div className="flex w-full font-extrabold">
              <MainRecommendation src={'/img/housing.jpg'} alt={"housing"}>주택</MainRecommendation>
              <MainRecommendation src={'/img/apartment.jpg'} alt={"apartment"}>아파트</MainRecommendation>
              <MainRecommendation src={'/img/subhouse.jpg'} alt={"subhouse"}>별채</MainRecommendation>
              <MainRecommendation src={'/img/hotel.jpg'} alt={"hotel"}>호텔</MainRecommendation>
            </div>
          </section>

          <section className="w-full pb-16">
            <div className="text-3.2rem pb-12">
              이 달의 추천 여행지&#58; 강릉{' '}
            </div>

            <div className="flex w-full font-extrabold">
            <Link className="w-1/4 pr-3.5" to="#">
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
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
