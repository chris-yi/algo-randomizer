import React, { Component } from 'react';
import Bank from './Components/Bank/Bank';
import RandomBank from './Components/RandomBank/RandomBank';
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
          image:
            'https://cdn-images-1.medium.com/max/1600/1*NyNysRVRPQxjKF8yhYUHeg.jpeg',
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
          image:
            'http://www.thejourneyjunkie.com/wp-content/uploads/2016/06/pali-notches-hike_oahu-8.jpg',
          examples: [
            'palindrome("abba") === true',
            'palindrome("abcdefg") === false'
          ]
        },
        {
          name: 'Reverse Integer',
          instructions:
            'Given an integer, return an integer that is the reverse ordering of numbers.',
          image: 'https://i.ytimg.com/vi/okaofXuNVcQ/maxresdefault.jpg',
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
          image:
            'https://liquipedia.net/commons/images/thumb/7/7a/MAX.Y_logo.png/600px-MAX.Y_logo.png',
          examples: [
            'maxChar("abcccccccd") === "c"',
            'maxChar("apple 1231111") === "1"'
          ]
        },
        {
          name: 'Fizz Buzz',
          instructions:
            'Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”',
          image:
            'https://www.healthline.com/assets/0x1528/hlcmsresource/images/AN_images/diet-soda-good-or-bad-1296x728-feature.jpg',
          examples: ['fizzBuzz(5); ==>1 ==>2 ==>fizz ==>4 ==>buzz']
        },
        {
          name: 'Chunk',
          instructions:
            'Given an array and chunk size, divide the array into many subarrays where each subarray is of length size',
          image:
            'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/flavors-redesign-details-2016/ecommerce-assets/pints/Chunky_Monkey_3_desktop.jpg',
          examples: [
            'chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]',
            'chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]',
            'chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]',
            'chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]',
            'chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]'
          ]
        },
        {
          name: 'Anagrams',
          instructions:
            'Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case',
          image:
            'https://cdn-images-1.medium.com/max/641/1*Dc5MaOQoPnHMp0XQzRfh8A.png',
          examples: [
            'anagrams("rail safety", "fairy tales") --> True',
            'anagrams("RAIL! SAFETY!", "fairy tales") --> True',
            'anagrams("Hi there", "Bye there") --> False'
          ]
        }
      ],
      randomQuestions: [],
      bankClicked: false,
      randomClicked: false
    };
  }

  componentDidMount() {
    const { algos } = this.state;
    const questions = algos.length;
    const randomNumArr = [];
    while (randomNumArr.length < 6) {
      const randomnumber = Math.floor(Math.random() * questions);
      if (randomNumArr.indexOf(randomnumber) > -1) continue;
      randomNumArr[randomNumArr.length] = randomnumber;
    }

    const questionBank = algos;
    const randomQuestions = [];

    randomNumArr.forEach(randomNum =>
      randomQuestions.push(questionBank[randomNum])
    );

    this.setState({
      randomQuestions
    });
  }

  handleBankClick = () => {
    this.setState({
      bankClicked: true,
      randomClicked: false
    });
  };

  handleRandomClick = () => {
    this.setState({
      randomClicked: true,
      bankClicked: false
    });
  };

  handleRefresh = () => {
    const { algos } = this.state;
    const questions = algos.length;
    const randomNumArr = [];
    while (randomNumArr.length < 6) {
      const randomnumber = Math.floor(Math.random() * questions);
      if (randomNumArr.indexOf(randomnumber) > -1) continue;
      randomNumArr[randomNumArr.length] = randomnumber;
    }

    const questionBank = algos;
    const randomQuestions = [];

    randomNumArr.forEach(randomNum =>
      randomQuestions.push(questionBank[randomNum])
    );

    this.setState({
      randomQuestions
    });
  };

  render() {
    const { bankClicked, algos, randomClicked, randomQuestions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="header-left-container">
            <h1 className="App-title">Algo Randomizer</h1>
            <div className="title-search">
              <i className="fas fa-search" />
            </div>
          </div>
          <div className="user-profile-container">
            <img
              src="https://lh5.googleusercontent.com/-UQ-2juJtDOU/AAAAAAAAAAI/AAAAAAAAAMk/lornBKtJ-wI/photo.jpg"
              alt="user-profile-pic"
              className="user-profile-pic"
            />
          </div>
        </header>
        <nav className="nav-container">
          <div className="button-container">
            <div
              className={`${
                this.state.bankClicked ? 'selected' : ''
              } nav-button`}
              onClick={this.handleBankClick}
            >
              <p>Bank</p>
            </div>
            <div
              className={`${
                this.state.randomClicked ? 'selected' : ''
              } nav-button`}
              onClick={this.handleRandomClick}
            >
              <p>Daily Random</p>
            </div>
          </div>
        </nav>

        <div className="main-content-container">
          <Bank bankClicked={bankClicked} algos={algos} />
          <RandomBank
            randomClicked={randomClicked}
            randomQuestions={randomQuestions}
            refresh={this.handleRefresh}
          />
        </div>
      </div>
    );
  }
}

export default App;
