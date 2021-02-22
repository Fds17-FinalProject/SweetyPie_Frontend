import React from 'react';

const ReviewProfile = ({ name, reviews, profileImage }) => {
  const { content, createdDate } = reviews;
  return (
    <div className="">
      <div className="flex">
        <img
          className="w-5.6rem h-5.6rem rounded-full mr-5 mb-5"
          src={profileImage}
          alt="게스트 프로필 이미지"
        />
        <div className="">
          <div className="text-1.6rem font-bold">{name}</div>
          <div className="text-1.4rem text-#717171">
            {createdDate.split('-')[0]}년 {createdDate.split('-')[1]}월
          </div>
        </div>
      </div>
      <div className="mb-20 text-1.6rem">{content}</div>
    </div>
  );
};

export default ReviewProfile;
