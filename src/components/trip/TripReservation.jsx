import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const TripReservation = ({ tab }) => {
  // path에 따라 색상 지정
  const [checkedPath, setCheckedPath] = useState(true);

  const history = useHistory();

  // path를 upcoming으로 설정
  const moveToUpcoming = () => {
    setCheckedPath(true);
    history.push('/reservation?tab=upcoming');
  };

  // path를 past로 설정
  const moveToPast = () => {
    setCheckedPath(false);
    history.push('/reservation?tab=past');
  };

  return (
    <div className="flex">
      {checkedPath ? (
        <button className="p-6 mr-2 text-1.6rem font-semibold text-airbnb">
          예정된 예약
        </button>
      ) : (
        <button
          className="p-6 mr-2 text-1.6rem font-semibold text-gray-500"
          onClick={moveToUpcoming}
        >
          예정된 예약
        </button>
      )}
      {!checkedPath ? (
        <button className="p-6 ml-2 text-1.6rem font-semibold text-airbnb">
          이전 예약
        </button>
      ) : (
        <button
          className="p-6 ml-2 text-1.6rem font-semibold text-gray-500"
          onClick={moveToPast}
        >
          이전 예약
        </button>
      )}
    </div>
  );
};

export default TripReservation;
