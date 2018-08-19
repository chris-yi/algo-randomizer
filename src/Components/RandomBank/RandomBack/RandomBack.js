import React from 'react';
import './RandomBack.css';

function RandomBack(props) {
  const { instructions, examples } = props;
  return (
    <div className="random-back-container">
      <div>{instructions}</div>
      <div>{examples}</div>
    </div>
  );
}

export default RandomBack;
