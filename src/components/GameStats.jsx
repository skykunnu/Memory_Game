/* eslint-disable react/prop-types */
const GameStats = ({ timer, score, clicks, isGameOver }) => {
  return (
    <div className="absolute top-2 right-2 text-white px-10">
      {!isGameOver && (
        <>
          <div
            className="timer w-10 h-10 flex items-center justify-center rounded-full 
            bg-timer-bg font-extrabold absolute top-0 right-0"
          >
            {timer}
          </div>
          <div
            className="clicks w-10 h-10 flex items-center justify-center rounded-full 
            bg-score-bg font-extrabold absolute top-14 right-0"
          >
            {clicks}
          </div>
          <div
            className="score w-10 h-10 flex items-center justify-center rounded-full 
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
