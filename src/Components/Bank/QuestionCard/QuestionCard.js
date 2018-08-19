import React, { Component } from 'react';
import QuestionDetail from '../QuestionDetail/QuestionDetail';
import ReactCardFlip from 'react-card-flip';
import './QuestionCard.css';

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      detailClicked: false,
      isFlipped: false
    };
  }

  handleClicker = () => {
    this.setState(prevState => ({
      detailClicked: !prevState.detailClicked
    }));
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    const { name, instructions, examples } = this.props;
    const { detailClicked } = this.state;
    return (
      <div className="question-card-container" onClick={this.handleClick}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front">
            <p>{name}</p>
            <button type="button" onClick={this.handleClicker}>
              Details
            </button>
            <button>Click to flip</button>
          </div>
          <div key="back" onClick={this.handleClick}>
            <QuestionDetail
              name={name}
              instructions={instructions}
              examples={examples}
              show={true}
            />
            <button>Click to flip</button>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default QuestionCard;
