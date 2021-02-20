import { Link } from '@material-ui/core';
import React from 'react';

const WishListCard = () => {
  return (
    <li className="px-6 w-1/3">
      <div className="mt-6 mb-8 rounded-2xl shadow-before hover:transition-shadow hover:shadow-after">
        <Link to={`/accommodation/`}>
          <div>
            <img
              // src={accommodationPicture.url}
              alt="#"
              className="h-72 w-full rounded-t-2xl object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col flex-grow mt-10">
          <p className="text-2.2rem font-semibold my-2 px-10 truncate">
            {/* {gu && `${gu}`} {city && `, ${city}`} */}
          </p>
          <div className="mt-2 flex flex-col flex-1">
            <div className="flex flex-row items-center h-24 px-10">
              <img
                // src={accommodationPicture.url}
                alt="#"
                className="h-16 w-16 rounded-xl mr-6"
              />
              {/* <p className="text-1.4rem truncate flex-1">{title}</p> */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WishListCard;
