/* eslint-disable react/prop-types */
const FlipCard = ({ image, isFlipped, isMatched, onClick }) => {
  return (
    <div
      className={`flip-card bg-transparent w-[22%] h-[150px] my-2 perspective-1000 cursor-pointer ${
        isMatched ? "pointer-events-none" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`flip-card-inner w-full h-full relative transition-transform duration-200
          ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div
          className={`flip-card-front absolute w-full h-full bg-card-front ${
            isFlipped ? "rotate-y-180 hidden" : "rotate-y-0"
          }`}
        >
          <img
            src="/images/questionMark.jpg"
            alt="Question Mark"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`flip-card-back absolute w-full h-full transform ${
            isFlipped ? "rotate-y-180" : "rotate-y-0 hidden "
          }`}
        >
          <img
            src={image}
            alt="Card"
            className={`w-full h-full border border-gray-100 p-[0.15rem] object-cover ${
              isMatched ? "matched" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
