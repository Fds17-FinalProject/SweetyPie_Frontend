import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as bookmarkAPI from '../lib/api/bookmark';
import { takeLatest } from 'redux-saga/effects';

// 액션 타입 정의 -> 북마크 api GET 요청 액션
const [
  READ_BOOKMARK,
  READ_BOOKMARK_SUCCESS,
  READ_BOOKMARK_FAILURE,
] = createRequestActionTypes('bookmark/READ_BOOKMARK');

// 액션 생성자 함수 -> 북마크
export const readBookmark = createAction(READ_BOOKMARK);

// 사가 생성 -> 북마크 GET
const readBookmarkSaga = createRequestSaga(
  // 액션 타입
  READ_BOOKMARK,
  // 요청 API
  bookmarkAPI.getBookMark,
);

// 사가 함수
export function* bookmarkSaga() {
  // 가장 마지막으로 실행된 작업을 수행
  yield takeLatest(READ_BOOKMARK, readBookmarkSaga);
}

// 초기 상태
const initialState = {
  bookmarks: [],
  error: null,
};

// 리듀서
const bookmark = handleActions(
  {
    [READ_BOOKMARK_SUCCESS]: (state, { payload: bookmarks }) => ({
      ...state,
      bookmarks: bookmarks,
    }),
    [READ_BOOKMARK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default bookmark;
