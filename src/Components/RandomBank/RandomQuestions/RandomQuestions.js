import React from 'react';
import RandomQuestionCard from '../RandomQuestionCard/RandomQuestionCard';
import "./RandomQuestions.css"

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
          image={question.image}
        />
      ))
      : null;

  return <div className="Random-Questions-Container">{renderQuestions}</div>;
}

export default RandomQuestions;
