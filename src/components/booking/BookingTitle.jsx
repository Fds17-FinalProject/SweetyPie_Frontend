import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateBefore } from 'react-icons/md';

const BookingTitle = () => {
  return (
    <div className="flex items-center pb-7 px-32 pt-6.4rem mx-48">
      <div className="w-20 h-20 -ml-8 flex items-center justify-center rounded-half hover:bg-#f7f7f7">
        <Link>
          <MdNavigateBefore className="w-10 h-10" />
        </Link>
      </div>
      <h1 className="ml-10 text-3.2rem font-semibold">예약 수정하기</h1>
    </div>
  );
};

export default BookingTitle;
