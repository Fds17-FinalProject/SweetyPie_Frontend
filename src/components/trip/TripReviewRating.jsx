import React from 'react';
import SVG from '../../assets/SVG';

const TripReviewRating = ({ unchecked, id, changeRating }) => {
  return (
    <>
      {unchecked ? (
        <label
          htmlFor={id}
          className="mr-3 cursor-pointer"
          onClick={() => changeRating(id)}
        >
          <input id={id} className="a11y-hidden" type="checkbox" />
          <SVG
            name="ratingBlank"
            width="36px"
            height="36px"
            viewBox="0 0 32 32"
            color="none"
            stroke="#b0b0b0"
            strokeWidth="1.3333"
            xmlns="http://www.w3.org/2000/svg"
          />
        </label>
      ) : (
        <label
          htmlFor={id}
          className="mr-3 cursor-pointer"
          onClick={() => changeRating(id)}
        >
          <input id={id} className="a11y-hidden" type="checkbox" />
          <SVG
            name="ratingBlank"
            width="36px"
            height="36px"
            viewBox="0 0 32 32"
            color="#ff385c"
            stroke="#ff385c"
            strokeWidth="1.3333"
            xmlns="http://www.w3.org/2000/svg"
          />
        </label>
      )}
    </>
  );
};

export default TripReviewRating;
