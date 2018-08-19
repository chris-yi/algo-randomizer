import React, { Component } from 'react';
import Bank from './Components/Bank/Bank';
import RandomQuestions from './Components/RandomQuestions/RandomQuestions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      algos: [
        {
          name: 'Reverse String',
          instructions:
            'Given a string, return a new string with the reversed order of characters',
          examples: [
            'reverse("apple") === "leppa"',
            'reverse("hello") === "olleh"',
            'reverse("Greetings!") === "!sgniteerG"'
          ]
        },
        {
          name: 'Palindrome',
          instructions:
            'Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.',
          examples: [
            'palindrome("abba") === true',
            'palindrome("abcdefg") === false'
          ]
        },
        {
          name: 'Reverse Integer',
          instructions:
            'Given an integer, return an integer that is the reverse ordering of numbers.',
          examples: [
            'reverseInt(15) === 51',
            'reverseInt(981) === 189',
            'reverseInt(500) === 5',
            'reverseInt(-15) === -51',
            'reverseInt(-90) === -9'
          ]
        },
        {
          name: 'Max Characters',
          instructions:
            'Given a string, return the character that is most commonly used in the string.',
          examples: [
            'maxChar("abcccccccd") === "c"',
            'maxChar("apple 1231111") === "1"'
          ]
        },
        {
          name: 'Fizz Buzz',
          instructions:
            'Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”',
          examples: ['fizzBuzz(5); ==>1 ==>2 ==>fizz ==>4 ==>buzz']
        },
        {
          name: 'Chunk',
          instructions:
            'Given an array and chunk size, divide the array into many subarrays where each subarray is of length size',
          examples: [
            'chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]',
            'chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]',
            'chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]',
            'chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]',
            'chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]'
          ]
        }
      ],
      randomQuestions: [],
      bankClicked: false,
      randomClicked: false
    };
  }

  handleBankClick = () => {
    const { randomClicked, bankClicked } = this.state;
    this.setState({
      bankClicked:
        randomClicked === false && bankClicked === false ? true : false
    });
  };

  handleRandomClick = () => {
    const { algos, randomClicked, bankClicked } = this.state;
    const questions = algos.length;
    const randomNumArr = [];
    while (randomNumArr.length < 5) {
      const randomnumber = Math.floor(Math.random() * questions);
      if (randomNumArr.indexOf(randomnumber) > -1) continue;
      randomNumArr[randomNumArr.length] = randomnumber;
    }

    const questionBank = algos;
    const randomQuestions = [];

    for (let randomNum of randomNumArr) {
      randomQuestions.push(questionBank[randomNum]);
    }

    this.setState({
      randomQuestions,
      randomClicked:
        randomClicked === false && bankClicked === false ? true : false
    });
  };

  render() {
    const { bankClicked, algos, randomClicked, randomQuestions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algo Randomizer</h1>
        </header>
        <div className="button-container">
          <button type="button" onClick={this.handleBankClick}>
            Bank
          </button>
          <button type="button" onClick={this.handleRandomClick}>
            Today's Questions
          </button>
        </div>

        <div className="main-content-container">
          <Bank bankClicked={bankClicked} algos={algos} />
          <RandomQuestions
            randomClicked={randomClicked}
            randomQuestions={randomQuestions}
          />
        </div>
      </div>
    );
  }
}

export default App;
