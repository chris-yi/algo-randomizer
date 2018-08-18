import React from "react";
import QuestionDetail from "./QuestionDetail";

function QuestionCard(props) {
  const { name, instructions, examples } = props;
  return (
    <div>
      <p>{name}</p>
      <QuestionDetail
        name={name}
        instructions={instructions}
        examples={examples}
      />
    </div>
  );
}

export default QuestionCard;
