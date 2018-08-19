import React from 'react';
import RandomQuestions from './RandomQuestions/RandomQuestions';

function RandomBank(props) {
  const { randomQuestions, randomClicked } = props;
  return (
    <RandomQuestions questions={randomQuestions} randomClicked={randomClicked} />
  );
}

export default RandomBank;
