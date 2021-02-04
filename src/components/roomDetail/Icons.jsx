import React from 'react';
import { BsHouseDoor, BsLock } from 'react-icons/bs';
import {
  AiOutlineExclamationCircle,
  AiOutlineSchedule,
  AiOutlineClear,
} from 'react-icons/ai';

const Icons = () => {
  const accommodationType = '집 전체';
  const buildingType = '펜션';

  return (
    <div className="">
      <div className="mb-8 flex">
        <BsHouseDoor style={{ width: '2.4rem', height: '2.4rem' }} />
        <div className="ml-6">
          <div className="mb-1 font-bold text-1.6rem">{accommodationType}</div>
          <div className="text-1.4rem text-#717171">
            {buildingType} 전체를 단독으로 사용하게 됩니다.
          </div>
        </div>
      </div>
      <div className="mb-8 flex">
        <AiOutlineClear style={{ width: '2.4rem', height: '2.4rem' }} />
        <div className="ml-6">
          <div className="mb-1 font-bold text-1.6rem">청결 강화</div>
          <div className="text-1.4rem text-#717171">
            에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한
            호스트입니다.
          </div>
        </div>
      </div>
      <div className="mb-8 flex">
        <BsLock style={{ width: '2.4rem', height: '2.4rem' }} />
        <div className="ml-6">
          <div className="mb-1 font-bold text-1.6rem">셀프 체크인</div>
          <div className="text-1.4rem text-#717171">
            키패드를 이용해 체크인하세요.
          </div>
        </div>
      </div>
      <div className="mb-8 flex">
        <AiOutlineExclamationCircle
          style={{ width: '2.4rem', height: '2.4rem' }}
        />
        <div className="ml-6">
          <div className="mb-1 font-bold text-1.6rem">환불 정책</div>
          <div className="text-1.4rem text-#717171">
            체크인 30일 전까지 취소하시면 전액이 환불됩니다.
          </div>
        </div>
      </div>
      <div className="mb-8 flex">
        <AiOutlineSchedule style={{ width: '2.4rem', height: '2.4rem' }} />
        <div className="ml-6">
          <div className="mb-1 font-bold text-1.6rem">숙소 이용규칙</div>
          <div className="text-1.4rem text-#717171">
            만 12세 미만의 어린이 동반에 적합하지 않은 숙소이며, 반려동물 동반,
            파티, 흡연이 금지됩니다.
          </div>
        </div>
      </div>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Icons;
