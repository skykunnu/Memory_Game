/* eslint-disable react/prop-types */
const GameStats = ({ timer, score, clicks, isGameOver }) => {
  return (
    <div className="absolute top-2 right-2 text-white">
      {!isGameOver && (
        <>
          <div
            className="timer py-1 px-2 md:w-10 md:h-10 m-2 sm:m-4 md:m-14 lg:w-[3rem] lg:h-[3rem] sm:w-8 sm:h-8 flex items-center justify-center rounded-full 
            bg-timer-bg font-extrabold absolute top-0 right-0"
          >
            {timer}
          </div>
          <div
            className="clicks py-1 px-3 md:w-10 md:h-10 m-2 sm:m-4 md:m-14 lg:w-[3rem] lg:h-[3rem] sm:w-8 sm:h-8 flex items-center justify-center rounded-full 
            bg-score-bg font-extrabold absolute top-14 right-0"
          >
            {clicks}
          </div>
          <div
            className="score py-1 px-3 md:w-10 md:h-10 m-2 sm:m-4 md:m-14 lg:w-[3rem] lg:h-[3rem] sm:w-8 sm:h-8 flex items-center justify-center rounded-full 
            bg-score-bg font-extrabold absolute top-28 right-0"
          >
            {score}
          </div>
        </>
      )}
    </div>
  );
};

export default GameStats;
