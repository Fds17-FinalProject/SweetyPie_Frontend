import React from 'react';
const img = window.location.origin;

// h-60 = 15rem

// img
// object-fit: cover;
// vertical-align: bottom;
// 사진

const Photos = () => {
  return (
    <div className="mt-2.4rem h-38.8rem w-full rounded-3xl flex justify-between overflow-hidden bg-gray-500">
      <div className="w-56.4rem h-full">
        <img
          className="block w-full h-full"
          src={img + '/img/room01.jpg'}
          alt="..."
        />
      </div>
      <div className="w-27.4rem pl-4">
        <img
          className="block w-full h-22.8rem mb-10"
          src={img + '/img/room02.jpg'}
          alt="..."
        />
        <img
          className="block w-full h-22.8rem"
          src={img + '/img/room04.jpg'}
          alt="..."
        />
      </div>
      <div className="w-27.4rem pl-4">
        <img
          className="block w-full h-22.8rem mb-10"
          src={img + '/img/room03.jpg'}
          alt="..."
        />
        <img
          className="block w-full h-22.8rem"
          src={img + '/img/room05.jpg'}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Photos;
