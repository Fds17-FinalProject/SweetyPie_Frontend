import React from 'react';
import SimpleHeaderContainer from '../../containers/SimpleHeaderContainer';
import CommonFooter from '../common/CommonFooter';
import WishListCard from './WishListCard';

const WishListTemplate = ({ bookmarks, loading }) => {
  return (
    <>
      <SimpleHeaderContainer />
      <div className="px-32 pb-6.5rem pt-32 h-screen">
        <section>
          <h1 className="text-3.2rem font-semibold py-16">저장 목록</h1>
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
              <div className="py-96 w-full">
                <p className="text-2.4rem text-center font-semibold flex justify-center">
                  저장된 숙소가 없습니다.
                </p>
              </div>
            )}
          </ul>
        </section>
      </div>
      <CommonFooter />
    </>
  );
};

export default WishListTemplate;
