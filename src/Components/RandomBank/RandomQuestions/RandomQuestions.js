import React from 'react';
import { Line } from 'rc-progress';
import RandomQuestionCard from '../RandomQuestionCard/RandomQuestionCard';
import './RandomQuestions.css';

function RandomQuestions(props) {
  const { questions, randomClicked, refresh } = props;
  const renderQuestions = randomClicked
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

  return (
    <div>
      {randomClicked ? (
        <div className="refresh-container">
          <div className="refresh-button" onClick={refresh}>
            <i className="fas fa-redo" />
          </div>
        </div>
      ) : null}
      <div className="Random-Questions-Container">{renderQuestions}</div>
      {randomClicked ? (
        <div className="progress-bar-container">
          <p className="progress-bar-percentage">60%</p>
          <Line
            className="progress-bar"
            percent="60"
            strokeWidth=".75"
            strokeColor="#F18432"
          />
        </div>
      ) : null}
    </div>
  );
}

export default RandomQuestions;
