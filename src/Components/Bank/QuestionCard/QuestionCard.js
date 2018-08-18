import React, { Component } from "react";
import QuestionDetail from "./../QuestionDetail/QuestionDetail";
import "./QuestionCard.css";

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      detailClicked: false
    };
  }

  handleClick = () => {
    this.setState({
      detailClicked: !this.state.detailClicked
    });
  };

  render() {
    const { name, instructions, examples } = this.props;
    return (
      <div className="question-card-container">
        <p>{name}</p>
        <button onClick={this.handleClick}>Details</button>
        <QuestionDetail
          name={name}
          instructions={instructions}
          examples={examples}
          show={this.state.detailClicked}
        />
      </div>
    );
  }
}

export default QuestionCard;
