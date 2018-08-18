import React, { Component } from "react";
import Questions from "./Questions/Questions";
import "./Bank.css"

class Bank extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="Bank-Container">
          <Questions questions={this.props.algos} bankClicked={this.props.bankClicked}/>
      </div>
    )
  }
}

export default Bank;
