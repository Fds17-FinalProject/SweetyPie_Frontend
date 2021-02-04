import React from 'react';

const ReviewProfile = ({ name, photo }) => {
  const img = window.location.origin;
  const createdDate = '2021 - 02 - 06';
  const content =
    '거실쪽은 생각보다 좁았는데 세명이 쓰기엔 괜찮았고 깔끔해서 좋았어요. 화장실도 깨끗했고 침실도 깨끗하고 폭신폭신해서 좋았습니다. 숙소뷰로 호수가 보여서 좋았구요 해 뜨는것도 보이더라구요ㅠㅠ 다음에 또 이용하고싶습니다 ㅎㅎ';

  return (
    <div className="mr-9.5rem">
      <div className="flex">
        <img
          className="w-5.6rem h-5.6rem rounded-full mr-5 mb-5"
          src={img + '/img/avatar.png'}
          alt="guest"
        />
        <div className="">
          <div className="text-1.6rem font-bold">{name}</div>
          <div className="text-1.4rem text-#717171">
            {createdDate.split(' -')[0]}년 {createdDate.split(' -')[1]}월
          </div>
        </div>
      </div>
      <div className="mb-20 text-1.6rem">{content}</div>
    </div>
  );
};

export default ReviewProfile;
