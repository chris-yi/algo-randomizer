import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Bank from "./Components/Bank/Bank";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankClicked: false
    };
  }

  handleBankClick = () => {
    this.setState({
      bankClicked: !this.state.bankClicked
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Back</h1>
        </header>
        <button onClick={this.handleBankClick}>Bank</button>
        <button>Today's Questions</button>
        <Bank bankClicked={this.state.bankClicked} />
      </div>
    );
  }
}

export default App;
