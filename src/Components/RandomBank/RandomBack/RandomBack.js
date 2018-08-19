import React from 'react';
import './RandomBack.css';

function RandomBack(props) {
  const { instructions, examples } = props;
  const example = examples.map(e => <p className="examples">{e}</p>);
  return (
    <div className="random-back-container">
      <p className="instructions">{instructions}</p>
      <p>Examples:</p>
      {example}
    </div>
  );
}

export default RandomBack;
