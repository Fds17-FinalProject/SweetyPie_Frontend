import React from 'react';
import SVG from '../../assets/SVG';

const ModifyDescription = () => {
  return (
    <div className=" w-1/3 h-full py-12 pl-10 pr-12	border rounded-lg">
      <div>
        <div className="relative">
          <SVG
            viewBox="0 0 24 24"
            width="4rem"
            height="4rem"
            color="rgb(96, 182, 181"
            name="locksub"
            className="absolute top-0 left-0"
          />
          <SVG
            viewBox="0 0 24 24"
            width="4rem"
            height="4rem"
            name="lockcontainer"
            className="absolute top-0 left-0"
          />
        </div>
        <div className="pt-20">
          <h2 className="text-1.8rem font-bold text-#727272 pb-3">
            수정할 수 있는 세부 정보는 무엇인가요?
          </h2>
          <span className="text-1.6rem text-#727272">
            에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다.
            연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번 예약 또는
            숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
          </span>
        </div>
        <div className="h-1 w-full border-b pt-12 mb-12"></div>
        <div className="relative">
          <SVG
            viewBox="0 0 24 24"
            width="4rem"
            height="4rem"
            color="rgb(96, 182, 181"
            name="camerasub"
            className="absolute top-0 left-0"
          />
          <SVG
            viewBox="0 0 24 24"
            width="4rem"
            height="4rem"
            name="camera"
            className="absolute top-0 left-0"
          />
        </div>
        <div className="pt-20">
          <h2 className="text-1.8rem font-bold text-#727272 pb-3">
            다른 사람에게 어떤 정보가 공개되나요?
          </h2>
          <span className="text-1.6rem text-#727272">
            에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를
            공개합니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModifyDescription;
