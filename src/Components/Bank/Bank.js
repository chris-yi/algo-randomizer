import React from 'react';
import Questions from './Questions/Questions';
import './Bank.css';

function Bank(props) {
  const { algos, bankClicked } = props;

  return (
    <div className="Bank-Container">
      <Questions questions={algos} bankClicked={bankClicked} />
    </div>
  );
}

export default Bank;
