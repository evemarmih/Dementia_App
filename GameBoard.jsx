// src/GameBoard.js
import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import Card from './Card';
import { generateBoard } from './utils';

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCards(generateBoard());
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setFlippedCards([]);
        if (matchedCards.length + 2 === cards.length) {
          setGameOver(true);
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(generateBoard());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <div className="game-board">
      <div className="header">
        <h1>Memory Game</h1>
        <button onClick={resetGame}>Restart</button>
        <p>Moves: {moves}</p>
      </div>
      <div className="board">
        {cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            card={card}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {gameOver && <div className="game-over">You won in {moves} moves!</div>}
    </div>
  );
};

export default GameBoard;
