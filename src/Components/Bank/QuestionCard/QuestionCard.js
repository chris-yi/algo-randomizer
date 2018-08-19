import React, { Component } from 'react';
import QuestionDetail from '../QuestionDetail/QuestionDetail';
import './QuestionCard.css';

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      detailClicked: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      detailClicked: !prevState.detailClicked
    }));
  };

  render() {
    const { name, instructions, examples } = this.props;
    const { detailClicked } = this.state;
    return (
      <div className="question-card-container">
        <p>{name}</p>
        <button type="button" onClick={this.handleClick}>
          Details
        </button>
        <QuestionDetail
          name={name}
          instructions={instructions}
          examples={examples}
          show={detailClicked}
        />
      </div>
    );
  }
}

export default QuestionCard;
