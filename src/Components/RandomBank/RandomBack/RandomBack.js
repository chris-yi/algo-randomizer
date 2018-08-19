import React from 'react';

function RandomBack(props) {
  const { instructions, examples } = props;
  return (
    <div>
      <div>{instructions}</div>
      <div>{examples}</div>
    </div>
  );
}

export default RandomBack;
