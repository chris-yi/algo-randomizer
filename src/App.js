import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Bank from "./Components/Bank/Bank";

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Back</h1>
        </header>
        <button>Bank</button>
        <button>Today's Questions</button>
        <Bank/>
      </div>
    );
  }
}

export default App;
