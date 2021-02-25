import React from 'react';

const Description = ({ accommodationDesc }) => {
  const defaultAccomDesc =
    "[숙소 소개]\n넓은 창문이 곳곳에 있어 침대에 누워서도, 지친몸을 풀어주는 스파를 즐기면서도 경포해변과 경포호수의 풍경을 즐길 수 있는 펜션입니다, 실내에서도 편안히 바비큐를 즐길 수 있는 자이글이 준비되어 있습니다.\n\n[객실 유형]\n복층형(거실 겸 주방 +복층 침대룸1개 + 화장실1개) / 15평(약50㎡) / 복층,월풀스파, 테라스\n\n[숙소위치/상호/연락처는 예약확정후에 안내드립니다]\n예약확정전에는 에어비앤비 정책상, 숙소의 위치/상호/연락처를 안내할 수 없는 점 양해부탁드립니다. \n에어비앤비 지도에서 대략적인 위치를 확인해주세요.\n\n[예약가능여부 확인]\n실시간 예약특성상 특정시점에 예약가능한지 말씀드리기 어렵습니다. \n에어비앤비 달력을 통해, 이용하고자 하는 날짜를 선택할 수 있는지 예약 가능여부를 직접 확인해주시기 바랍니다.\n\n숙소\n[바베큐 안내]\n● 자이글 바베큐\n- 객실 내에서 이용\n- 1대당 20,000원 (현장결제)\n● 숯+그릴 바베큐\n- 실내 공동바베큐장에서 이용 \n- 1Set 당 20,000원 (현장결제)\n● 이용시간 : 입실 후 ~ 24:00 까지 \n\n[주차 안내]\nㅁ 주차장이 있습니다.\n\n[부대시설]\nㅁ 카페\n- 바베큐, 수영장, 스파 등 숙소의 모든 부대 시설 및 서비스의 이용가능 여부를 반드시 확인 후 예약해 주십시오. 코로나 상황으로 인해 기존 이용가능했던 공용 공간 및 부대 시설의 이용이 불가한 경우가 많습니다. 확인하지 않고 예약하신 경우, 투숙일 당일에 이용이 불가한 점은 환불사유가 되지 않습니다.\n\n기타 주의사항\n[추가인원 요금안내 및 유아 입실인원 포함]\n- 2세미만 '유아'는 에어비앤비에서 결제되지 않으나, 이 숙소의 전체 숙박 인원은 2세미만 유아를 포함하여 결정됩니다.\n- 만약, 2세미만 '유아'를 포함한 전체 인원이 기준 인원을 초과할 경우, 초과된 인원에 대한 차액을 현장에서 결제 하셔야 정상이용 가능합니다\n- 이 숙소는 입실인원에 '유아'(2세미만)를 포함합니다\n- '유아'를 포함한 전체 숙박 인원이 숙소에서 수용가능한 최대인원을 넘길 경우, 이용 및 환불이 불가하오니 최대인원을 확인해주시기 바랍니다.\n\n[숙소와의 연락]\n호스트 연락처로는 통화가 어렵습니다. 문의가 있을 경우, 에어비앤비 메세지로 연락 부탁드립니다.\n(onda의 메세지 답변 가능한 시간 : 매주 평일 10:00~18:00)\n \n예약이 확정된 이후에는 숙소 연락처/주소/숙소명 을 문자메세지(sms)+에어비앤비 메세지로 보내드립니다. 예약이 확정된 고객님께서는 숙소로 직접 문의해주세요. 더 빠르고 정확한 안내가 가능합니다.\n\n숙소와 직접 연락이 힘들거나, 체크인에 중대한 문제가 있을 경우, 에어비앤비 메세지로 연락 주시거나 에어비앤비 고객센터로 접수해주시면 최대한 빠르게 도움 드리겠습니다.\n\n- 해당 숙소는 코로나19로 인한 자가격리의 목적으로 이용 불가능합니다.\n  - 예약시 한국 내에서 문자 또는 전화를 받을 수 있는 연락처를 예약내역 또는 메신저에 기입부탁드립니다.\n  * 미기재시 입실안내 또는 기타 부대시설 관련 안내를 받지 못하실 수 있습니다.\n  - 오후 7시 이후 체크인을 원하실 경우 예약완료시 전달되는 숙소의 연락처로 반드시 문자 또는 전화 부탁드립니다.\n  - 미성년자는 보호자의 동행 없이는 투숙이 불가합니다.\n  - 수영장, 욕조, 자쿠지, 월풀, 같은경우는 동절기에 사용이 불가능 할 수도 있음으로 예약전 사용 가능 여부 확인 부탁드리며, 확인 하지않은 상태로 예약진행 후 이용 불가 안내를 받으신 경우 환불이 진행 되지 않는 점 양해 부탁 드립니다.";
  defaultAccomDesc.split('\n');
  // 숙소 상세정보가 존재하지 않으면 defaultAccomDesc 넣어주기
  const accommodationDescription =
    accommodationDesc === null
      ? defaultAccomDesc
      : accommodationDesc.split('\n');

  console.log(defaultAccomDesc);
  return (
    <div className="text-1.6rem whitespace-pre-wrap">
      {accommodationDescription}
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Description;
