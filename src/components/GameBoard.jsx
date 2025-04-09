/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import GameStats from "./GameStats";

const GAME_DURATION = 60;
const PHOTOS = [
  "amitabh.jpg",
  "bhumi.jpg",
  "chitrangda.webp",
  "deepika.jpg",
  "shahrukh.jpg",
  "tom cruise.jpg",
];

const GameBoard = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Randomize cards
  const randomizePhotos = () => {
    const duplicatedPhotos = [...PHOTOS, ...PHOTOS];
    const shuffledPhotos = duplicatedPhotos.sort(() => 0.5 - Math.random());
    return shuffledPhotos.map((photo, index) => ({
      id: index,
      image: `/images/${photo}`,
      isFlipped: false,
      isMatched: false,
    }));
  };

  // Start game
  const startGame = () => {
    setGameStarted(true);
    setGameCards(randomizePhotos());
    setTimer(GAME_DURATION);
    setScore(0);
    setClicks(0);
    setMatchedCards([]);
    setIsGameOver(false);
  };

  // Handle card click
  const handleCardClick = (cardId) => {
    if (
      !gameStarted ||
      isGameOver ||
      flippedCards.length === 2 ||
      matchedCards.includes(cardId)
    )
      return;

    setClicks((prev) => prev + 1);

    const updatedCards = gameCards.map((card) =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    setGameCards(updatedCards);

    const currentCard = updatedCards.find((card) => card.id === cardId);
    setFlippedCards((prev) => [...prev, currentCard]);

    if (flippedCards.length === 1) {
      const prevCard = flippedCards[0];

      setTimeout(() => {
        if (prevCard.image === currentCard.image) {
          // Match found
          setMatchedCards((prev) => [...prev, prevCard.id, cardId]);
          setScore((prev) => prev + 1);
          setFlippedCards([]);
        } else {
          // No match
          setGameCards((prev) =>
            prev.map((card) =>
              card.id === prevCard.id || card.id === cardId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }
      }, 1000);
    }
  };

  // Timer and game over logic
  useEffect(() => {
    let interval;
    if (gameStarted && timer > 0 && !isGameOver) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setIsGameOver(true);
            setGameStarted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, timer, isGameOver]);

  // Win condition check
  useEffect(() => {
    if (matchedCards.length === gameCards.length && gameCards.length > 0) {
      setIsGameOver(true);
      setGameStarted(false);
    }
  }, [matchedCards, gameCards]);

  return (
    <div className="min-h-screen bg-body-bg flex flex-col items-center justify-center">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">How Good's Your Memory?</h1>
        <h4 className="text-xl">
          Find all pairs in least time & with minimum clicks
        </h4>
      </div>

      {!gameStarted && !isGameOver && (
        <button
          onClick={startGame}
          className="bg-start-btn text-black px-8 py-4 rounded-2xl 
          font-bold border-2 border-black transition-all 
          hover:shadow-none hover:translate-y-1
          shadow-start-btn"
        >
          Let's Find Out
        </button>
      )}

      {(gameStarted || isGameOver) && (
        <div
          className="bg-game-bg w-[50rem] mx-auto px-10 py-2 
          rounded-lg shadow-lg relative flex flex-col items-center"
        >
          <GameStats
            timer={timer}
            score={score}
            clicks={clicks}
            isGameOver={isGameOver}
          />

          {isGameOver ? (
            <div className="text-white text-center my-5">
              <h2 className="text-2xl font-bold">GAME OVER</h2>
              <p>Score: {score}</p>
              <button
                onClick={startGame}
                className="mt-4 bg-start-btn text-black px-4 py-2 rounded-lg"
              >
                Play Again
              </button>
            </div>
          ) : (
            <div className="game-board flex flex-wrap justify-evenly w-full">
              {gameCards.map((card) => (
                <FlipCard
                  key={card.id}
                  image={card.image}
                  isFlipped={card.isFlipped}
                  isMatched={matchedCards.includes(card.id)}
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameBoard;
