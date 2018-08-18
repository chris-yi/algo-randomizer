import React from "react";
import Questions from "../Bank/Questions/Questions";

function RandomQuestions(props) {
  return <Questions questions={props.randomQuestions} randomClicked={props.randomClicked}/>
}

export default RandomQuestions;