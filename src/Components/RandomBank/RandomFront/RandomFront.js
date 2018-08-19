import React from 'react';
import './RandomFront.css';

function RandomFront(props) {
  const { name } = props;
  return <div className="random-front-container">{name}</div>;
}

export default RandomFront;
