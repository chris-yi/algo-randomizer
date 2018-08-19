import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import RandomFront from '../RandomFront/RandomFront';
import RandomBack from '../RandomBack/RandomBack';
import './RandomQuestionCard.css';

class RandomQuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      isFlipped: false
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    const { isFlipped } = this.state;
    const { name, instructions, examples } = this.props;
    return (
      <div
        className="random-question-card-container"
        onClick={this.handleClick}
      >
        <ReactCardFlip isFlipped={isFlipped}>
          <RandomFront key="front" name={name}/>
          <RandomBack
            key="back"
            instructions={instructions}
            examples={examples}
          />
        </ReactCardFlip>
      </div>
    );
  }
}

export default RandomQuestionCard;
