import React from "react";

function questionDetail(props) {
  const { instructions, examples, show } = props;
  const example = examples.map((example, index) => (
    <div key={index}>Example {index + 1}: {example}</div>
  ));
  const displayDetails = show ? (
    <div>
      <p>Instructions: {instructions}</p>
      {example}
    </div>
  ) : null;
  return <div>{displayDetails}</div>;
}

export default questionDetail;
