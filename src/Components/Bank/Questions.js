import React from "react";
import QuestionCard from "./QuestionCard";

function Questions(props) {
  const {bankClicked , questions} = props;
  const renderQuestions = bankClicked ? questions.map((question, index) => (
    <QuestionCard
      key={index}
      name={question.name}
      instructions={question.instructions}
      examples={question.examples}
    />
  )) : null;

  return <div>{renderQuestions}</div>;
}

export default Questions;
