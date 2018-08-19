import React from 'react';
import Questions from '../Bank/Questions/Questions';

function RandomQuestions(props) {
  const { randomQuestions, randomClicked } = props;
  return (
    <Questions questions={randomQuestions} randomClicked={randomClicked} />
  );
}

export default RandomQuestions;
