import React from 'react';
import { FiClock, FiHome, FiSlash, FiAlertTriangle } from 'react-icons/fi';
import { MdSmokeFree, MdPets } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import SVG from '../../assets/svg';

const ThingsToKnow = ({ onShowModal }) => {
  return (
    <div className="pb-56">
      <h1 className="text-2.2rem mb-2.4rem font-bold">알아두어야 할 사항</h1>
      <div className="flex text-1.6rem">
        <div className="w-1/3">
          <h2 className="font-bold mb-1.2rem pr-20">숙소 이용 규칙</h2>
          <ul>
            <li className="mb-0.8rem flex">
              <div>
                <FiClock className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">체크인 시간: 오후 3:00 - 오후 10:00</span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <FiClock className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">체크아웃 시간: 오전 11:00</span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <FiHome className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">키패드(으)로 셀프 체크인</span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <MdSmokeFree className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">흡연 금지</span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <MdPets className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">반려동물 동반 가능</span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <FiSlash className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">파티나 이벤트 금지</span>
            </li>
          </ul>
        </div>
        <div className="w-1/3 pr-20">
          <h2 className="font-bold mb-1.2rem">건강과 안전</h2>
          <ul className="">
            <li className="mb-0.8rem flex">
              <div>
                <FiAlertTriangle className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">
                에어비앤비의 강화된 청소 절차 준수에 동의했습니다.
              </span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <FiAlertTriangle className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">
                에어비앤비의 사회적 거리 두기 및 관련 가이드라인이 적용됩니다.
              </span>
            </li>
            <li className="mb-0.8rem flex">
              <div>
                <FaCheckCircle className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">일산화탄소 경보기</span>
            </li>
            <li className="mb-6 flex">
              <div>
                <FaCheckCircle className="w-8 h-8 mr-1.2rem" />
              </div>
              <span className="">화재 경보기 </span>
            </li>
            <li className="mb-0.8rem flex">
              <button
                className="flex items-center underline text-#717171"
                onClick={() => onShowModal('safety')}
              >
                <span className="mr-2">모두 보기</span>
                <SVG
                  name="rightArrow"
                  width="12px"
                  height="12px"
                  viewBox="0 0 18 18"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <h2 className="font-bold mb-1.2rem">환불 정책</h2>
          <p className="mb-1.2rem">
            체크인 24시간 전까지 수수료 없이 예약 취소 가능
          </p>
          <p className="mb-6">
            그 이후로는 체크인 전에 취소하면 첫 1박 요금과 서비스 수수료를
            제외한 전액이 환불됩니다.
          </p>
          <button
            className="flex items-center underline text-#717171"
            onClick={() => onShowModal('refund')}
          >
            <span className="mr-2">자세히 보기</span>
            <SVG
              name="rightArrow"
              width="12px"
              height="12px"
              viewBox="0 0 18 18"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
