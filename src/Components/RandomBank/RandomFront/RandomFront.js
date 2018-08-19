import React from 'react';
import './RandomFront.css';

function RandomFront(props) {
  const { name, image } = props;
  return (
    <div className="random-front-container">
      <div className="front-img-container">
        <div className="question-status-front" />
        <img className="card-img" src={image} alt="card-img" />
      </div>
      <h1 className="random-front-title">{name}</h1>
      <p>Click to flip</p>
    </div>
  );
}

export default RandomFront;
