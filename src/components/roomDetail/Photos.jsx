import React from 'react';

const Photos = ({ accommodationPictures }) => {
  return (
    <div className="mt-2.4rem h-38.8rem w-full rounded-3xl flex justify-between overflow-hidden">
      <div className="w-56.4rem ">
        <img
          className="block w-full h-full object-cover	"
          src={accommodationPictures[0].url}
          alt="accommodationPicture_01"
        />
      </div>
      <div className="w-27.4rem ml-0.8rem">
        <img
          className="block w-full h-19.4rem mb-0.8rem object-cover"
          src={accommodationPictures[1].url}
          alt="accommodationPicture_02"
        />
        <img
          className="block w-full h-19.4rem object-cover"
          src={accommodationPictures[2].url}
          alt="accommodationPicture_03"
        />
      </div>
      <div className="w-27.4rem ml-0.8rem">
        <img
          className="block w-full h-19.4rem mb-0.8rem object-cover"
          src={accommodationPictures[3].url}
          alt="accommodationPicture_04"
        />
        <img
          className="block w-full h-19.4rem object-cover"
          src={accommodationPictures[4].url}
          alt="accommodationPicture_05"
        />
      </div>
    </div>
  );
};

export default React.memo(Photos);
