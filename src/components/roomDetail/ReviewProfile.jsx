import React from 'react';

const ReviewProfile = ({ name, photo }) => {
  const img = window.location.origin;
  const content =
    '거실쪽은 생각보다 좁았는데 세명이 쓰기엔 괜찮았고 깔끔해서 좋았어요. 화장실도 깨끗했고 침실도 깨끗하고 폭신폭신해서 좋았습니다. 숙소뷰로 호수가 보여서 좋았구요 해 뜨는것도 보이더라구요ㅠㅠ 다음에 또 이용하고싶습니다 ㅎㅎ';
  // const createdDate = '2021 - 02 - 02';
  const createdDate = '2021년 02월';
  const guestNames = [
    '한슬',
    '영서',
    '동찬',
    '재민',
    '영원',
    '재복',
    '준철',
    'Hanseul',
    'JamJam',
    'Mark',
  ];
  const guestName = guestNames[Math.floor(Math.random() * 10)];

  return (
    <div className="mr-9.5rem">
      <div className="flex">
        <img
          className="w-5.6rem h-5.6rem rounded-full mr-5 mb-5"
          src={img + '/img/avatar.png'}
          alt="guest"
        />
        <div className="">
          {/* <div className="">{guestName}</div> */}
          <div className="text-1.6rem font-bold">{name}</div>
          <div className="text-1.4rem text-#717171">{createdDate}</div>
        </div>
      </div>
      <div className="mb-20 text-1.6rem">{content}</div>
    </div>
  );
};

export default ReviewProfile;
