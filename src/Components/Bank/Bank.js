import React, { Component } from "react";
import Questions from "./Questions";

class Bank extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return <Questions questions={this.props.algos} bankClicked={this.props.bankClicked}/>;
  }
}

export default Bank;
