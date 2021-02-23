import React from 'react';
import WishListCard from './WishListCard';

const WishListTemplate = ({ bookmarks, loading }) => {
  return (
    <div className="max-w-screen-2xl mt-3.6rem px-32 pb-6.5rem">
      <section>
        <h1 className="text-3.2rem mb-10 pl-6 font-semibold">저장 목록</h1>
        <div className="max-w-screen-2xl mx-6 h-0.5 border-t"></div>
        <ul className="flex flex-wrap justify-start items-center content-center">
          {/* 저장 목록 */}
          {loading === false &&
            bookmarks.length &&
            bookmarks.map(bookmark => (
              <WishListCard
                key={bookmark.bookmarkId}
                bookmark={{ ...bookmark }}
              />
            ))}
          {/* 저장 목록이 없다면 보여줄 화면 */}
          {!bookmarks.length && loading === false && (
            <div className="py-96">
              <p className="text-2.4rem text-center font-semibold">
                저장된 숙소가 없습니다.
              </p>
            </div>
          )}
        </ul>
      </section>
    </div>
  );
};

export default WishListTemplate;
