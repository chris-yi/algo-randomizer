import React from 'react';
import RandomQuestionCard from '../RandomQuestionCard/RandomQuestionCard';

function RandomQuestions(props) {
  const { bankClicked, questions, randomClicked } = props;
  const renderQuestions =
    bankClicked || randomClicked
      ? questions.map((question, index) => (
        <RandomQuestionCard
          key={index}
          name={question.name}
          instructions={question.instructions}
          examples={question.examples}
        />
      ))
      : null;

  return <div className="Questions-Container">{renderQuestions}</div>;
}

export default RandomQuestions;
