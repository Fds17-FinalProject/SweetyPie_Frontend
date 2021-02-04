import React from 'react';

const Photos = () => {
  const img = window.location.origin;
  const accommodationPictures = [
    {
      url:
        'https://a0.muscache.com/pictures/1c1654ed-0f90-458f-a577-aa4a2e2c1462.jpg',
    },
    { url: 'window.location.origin/img/room01.jpg' },
    { url: 'window.location.origin/img/room02.jpg' },
    { url: 'window.location.origin/img/room03.jpg' },
    { url: 'window.location.origin/img/room04.jpg' },
    { url: 'window.location.origin/img/room05.jpg' },
  ];
  console.log(accommodationPictures);
  return (
    <div className="mt-2.4rem h-38.8rem w-full rounded-3xl flex justify-between overflow-hidden">
      <div className="w-56.4rem ">
        <img
          className="block w-full h-full object-cover	"
          src={accommodationPictures[0].url}
          alt="..."
        />
      </div>
      <div className="w-27.4rem ml-0.8rem">
        <img
          className="block w-full h-19.4rem mb-0.8rem object-cover"
          src={img + '/img/room02.jpg'}
          alt="..."
        />
        <img
          className="block w-full h-19.4rem object-cover"
          src={img + '/img/room04.jpg'}
          alt="..."
        />
      </div>
      <div className="w-27.4rem ml-0.8rem">
        <img
          className="block w-full h-19.4rem mb-0.8rem object-cover"
          src={img + '/img/room03.jpg'}
          alt="..."
        />
        <img
          className="block w-full h-19.4rem object-cover"
          src={img + '/img/room05.jpg'}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Photos;
