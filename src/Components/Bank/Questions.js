import React from "react";
import QuestionCard from "./QuestionCard";

function Questions(props) {
  console.log(props);
  const questions = props.questions.map((question, index) => (
    <QuestionCard
      key={index}
      name={question.name}
      instructions={question.instructions}
      examples={question.examples}
    />
  ));

  return <div>{questions}</div>;
}

export default Questions;
