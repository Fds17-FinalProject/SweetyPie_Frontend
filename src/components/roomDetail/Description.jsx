import React from 'react';

const Description = ({ accommodationDesc }) => {
  accommodationDesc.split('\n');

  return (
    <div className="text-1.6rem whitespace-pre-wrap">
      {accommodationDesc}
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Description;
