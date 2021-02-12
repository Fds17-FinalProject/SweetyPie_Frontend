import SVG from '../../assets/Svg';

const TripReviewGetModal = ({ hideRevModal, review, hostName }) => {
  const { ratings, content } = review;
  const ratingArray = ['_', '_', '_', '_', '_'];

  return (
    <div
      data-name="modal"
      onClick={hideRevModal}
      className="w-screen h-screen flex justify-center items-center bg-modal text-white fixed top-0"
    >
      <div
        className="w-1/3 h-2/3 px-6 py-20 bg-white relative top-0
        overflow-y-auto flex flex-col text-black rounded-3xl border border-#b0b0b0"
      >
        <h3 className="text-2.4rem font-semibold">
          {`호스트 ${hostName}님의 숙소에 대한 평가입니다.`}
        </h3>
        <div className="mt-16 mb-14 flex">
          {ratings &&
            ratingArray.map((item, i) =>
              i < ratings ? (
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
              ) : (
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
              ),
            )}
        </div>

        <div className="text-2rem">{content}</div>
        <div className="text-right">
          <button
            data-name="close"
            className="bg-gray-400 h-14 w-28 px-5 m-2 text-xl text-white font-bold rounded-xl absolute bottom-20 right-6"
            id="1"
            onClick={hideRevModal}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripReviewGetModal;
