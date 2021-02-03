import React from 'react';
import '../../assets/output.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const img = window.location.origin;

const MainContainer = styled.div`
  background-image: url('/img/main.jpg');
  background-size: cover;
  width: 100%;
  padding-top: 15rem;
  padding-bottom: 15rem;
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
                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/seoul.jpg'}
                      alt="seoul"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      서울
                    </figcaption>
                  </figure>
                </Link>

                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/incheon.jpg'}
                      alt="incheon"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      인천
                    </figcaption>
                  </figure>
                </Link>

                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/daegu.jpg'}
                      alt="daegu"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      대구
                    </figcaption>
                  </figure>
                </Link>

                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/uijungbu.jpg'}
                      alt="uijungbu"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      의정부
                    </figcaption>
                  </figure>
                </Link>
              </div>

              <div className="flex w-full pt-3">
                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/bucheon.jpg'}
                      alt="bucheon"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      부천
                    </figcaption>
                  </figure>
                </Link>

                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/suwon.jpg'}
                      alt="suwon"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      수원
                    </figcaption>
                  </figure>
                </Link>

                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/ansan.jpg'}
                      alt="ansan"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      안산
                    </figcaption>
                  </figure>
                </Link>

                <Link className="w-1/4" to="#">
                  <figure className="flex">
                    <img
                      className="w-24 h-24 mr-6 rounded-lg"
                      src={img + '/img/daejeon.jpg'}
                      alt="daejeon"
                    />
                    <figcaption className="text-2xl	font-semibold">
                      대전
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="text-3.2rem pb-12">
              어디에서나, 여행은 살아보는 거야!
            </div>

            <div className="flex w-full font-extrabold">
              <Link className="w-1/4 pr-3.5" to="#">
                <figure>
                  <img
                    className="rounded-lg"
                    src={img + '/img/housing.jpg'}
                    alt="housing"
                  />
                  <figcaption className="text-1.8rem p-4">주택</figcaption>
                </figure>
              </Link>

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
                    src={img + '/img/subhouse.jpg'}
                    alt="subhouse"
                  />
                  <figcaption className="text-1.8rem p-4">별채</figcaption>
                </figure>
              </Link>

              <Link className="w-1/4 pr-3.5" to="#">
                <figure>
                  <img
                    className="rounded-lg"
                    src={img + '/img/hotel.jpg'}
                    alt="hotel"
                  />
                  <figcaption className="text-1.8rem p-4">호텔</figcaption>
                </figure>
              </Link>
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
                    src={img + '/img/housing.jpg'}
                    alt="housing"
                  />
                  <figcaption className="text-1.8rem p-4	">주택</figcaption>
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
