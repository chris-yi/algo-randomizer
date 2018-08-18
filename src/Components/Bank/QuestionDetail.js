import React from "react";

function questionDetail(props) {
  const { instructions, examples, show } = props;
  const example = examples.map((example, index) => (
    <div key={index}>{example}</div>
  ));
  const render = show ? (
    <div>
      <p>{instructions}</p>
      {example}
    </div>
  ) : null;
  return <div>{render}</div>;
}

export default questionDetail;
