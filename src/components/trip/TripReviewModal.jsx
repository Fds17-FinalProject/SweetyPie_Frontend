import TripReviewRating from './TripReviewRating';

const TripReviewModal = ({
  hideModal,
  modalElement,
  ratings,
  changeRating
}) => {
  return (
    <div
      id="1"
      ref={modalElement}
      onClick={hideModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div
        className="w-1/3 h-2/3 px-6 py-20 z-50 bg-white relative top-0 
        overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <h3 className="text-2.4rem font-semibold">
          호스트 Juny님의 숙소를 평가해주세요.
        </h3>
        <p className="mt-1 text-#717171 text-1.2rem">
          응답하신 내용은 호스트에게만 전달되며, 후기 여러 건을 총체적으로
          취합한 정보만 에어비앤비에 전달됩니다.
        </p>
        <div className="mt-10">
          {/* 별점에 따라 텍스트 내용 바뀌어야 함 */}
          <p className="text-gray-700 text-2xl font-semibold">좋았어요</p>
        </div>
        <div className="mt-5 mb-14 flex">
          {ratings.map((rating, i) =>
            rating ? (
              <TripReviewRating
                id={i}
                key={`star-${i}`}
                changeRating={changeRating}
              />
            ) : (
              <TripReviewRating
                id={i}
                key={`star-${i}`}
                changeRating={changeRating}
                unchecked
              />
            )
          )}
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="세부정보 추가하기"
          className="text-1.2rem border-2 p-4 rounded-xl"
        ></textarea>
        <div className="mt-10 text-right">
          <button
            className="bg-gray-400 h-14 w-28 px-5 m-2 text-xl text-white font-bold rounded-xl"
            id="1"
          >
            취소
          </button>
          <button
            className="bg-black h-14 w-28 px-5 m-2 text-xl text-white font-bold rounded-xl"
            id="1"
            onClick={hideModal}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripReviewModal;
