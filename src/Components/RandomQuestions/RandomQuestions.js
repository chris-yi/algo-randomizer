import React from "react";
import Questions from "../Bank/Questions";

function RandomQuestions(props) {
  return <Questions questions={props.algos} bankClicked={props.randomClicked}/>
}

export default RandomQuestions;