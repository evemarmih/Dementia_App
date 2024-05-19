// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card, index, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? card : ''}
    </div>
  );
};

export default Card;
