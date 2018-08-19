import React from 'react';
import RandomQuestions from './RandomQuestions/RandomQuestions';

function RandomBank(props) {
  const { randomQuestions, randomClicked, refresh } = props;
  return (
    <div>
      <RandomQuestions
        questions={randomQuestions}
        randomClicked={randomClicked}
        refresh={refresh}
      />
    </div>
  );
}

export default RandomBank;
