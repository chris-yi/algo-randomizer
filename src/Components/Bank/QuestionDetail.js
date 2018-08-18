import React from "react";

function questionDetail(props) {
  const { instructions, examples } = props;
  const example = examples.map((example, index) => (
    <div key={index}>{example}</div>
  ));
  return (
    <div>
      <p>{instructions}</p>
      {example}
    </div>
  );
}

export default questionDetail;
