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
        },
        {
          name: 'Capitalize String',
          instructions:
            'Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.',
          image:
            'http://blog.writeathome.com/wp-content/uploads/2013/03/chalkboard_rules_caps-300x200.jpg',
          examples: [
            'capitalize("a short sentence") --> "A Short Sentence"',
            'capitalize("a lazy fox") --> "A Lazy Fox"',
            'capitalize("look, it is working!") --> "Look, It Is Working!"'
          ]
        },
        {
          name: 'Steps',
          instructions:
            'Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!',
          image:
            'https://securityintelligence.com/wp-content/uploads/2018/06/successbusinessconceptpe_574977-630x330.jpg',
          examples: [
            'steps(2)',
            '   "# " ',
            '    "##"',
            'steps(3)',
            '    "#  "',
            '    "## "',
            '    "###"',
            'steps(4)',
            '    "#   "',
            '    "##  "',
            '    "### "',
            '    "####"'
          ]
        },
        {
          name: 'Pyramid',
          instructions:
            'Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides',
          image:
            'https://hyperallergic.com/wp-content/uploads/2016/02/12555952_844385449003278_549523339_n.jpg',
          examples: [
            'pyramid(1)',
            '"#"',
            'pyramid(2)',
            '" # "',
            '"###"',
            'pyramid(3)',
            '"  #  "',
            '" ### "',
            '"#####"'
          ]
        },
        {
          name: 'Vowels',
          instructions:
            'Write a function that returns the number of vowels used in a string.  Vowels are the characters "a", "e" "i", "o", and "u".',
          image:
            'https://www.henbeastore.com/236-large_default/pre-writing-vowels.jpg',
          examples: [
            'vowels("Hi There!") --> 3',
            'vowels("Why do you ask?") --> 4',
            'vowels("Why?") --> 0'
          ]
        },
        {
          name: 'Spiral Matrix',
          instructions:
            'Write a function that accepts an integer N and returns a NxN spiral matrix.',
          image:
            'http://2.bp.blogspot.com/_vpX-AEPw2SY/TDWgsf65nsI/AAAAAAAAABI/i6_B8NzzAsU/s1600/spiral+matrix+3.bmp',
          examples: [
            'matrix(2)',
            '[[1, 2]',
            '[4, 3]]',
            'matrix(3)',
            '[[1, 2, 3]',
            '[8, 9, 4]',
            '[7, 6, 5]]',
            'matrix(4)',
            '[[1,   2,  3, 4]',
            '[12, 13, 14, 5]',
            '[11, 16, 15, 6]',
            '[10,  9,  8, 7]]'
          ]
        },
        {
          name: 'Fibonnaci',
          instructions:
            'Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.',
          image:
            'https://media.daysoftheyear.com/20171223112042/fibonacci-day1.jpg',
          examples: ['fib(4) === 3']
        },
        {
          name: 'Queue',
          instructions:
            'Create a queue data structure.  The queue should be a class with methods "add" and "remove". Adding to the queue should store an element until it is removed',
          image:
            'https://stevejbicknell.files.wordpress.com/2013/01/fotolia_28865636_xs-queue.jpg',
          examples: [
            'const q = new Queue();',
            'q.add(1);',
            'q.remove(); // returns 1;'
          ]
        },
        {
          name: 'Queue Weave',
          instructions:
            '1) Complete the task in weave/queue.js 2) Implement the "weave" function.  Weave receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the *alterating* content of the two queues.  The function should handle queues of different lengths without inserting "undefined" into the new one. *Do not* access the array inside of any queue, only use the "add", "remove", and "peek" functions.',
          image:
            'https://smhttp-ssl-44887.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/sa-bsksohogryths.jpg',
          examples: [
            '',
          ]
        },
        {
          name: 'Stack',
          instructions:
            'Create a stack data structure.  The stack should be a class with methods "push", "pop", and "peek".  Adding an element to the stack should store it until it is removed.',
          image:
            'https://www.technologysolutions.net/wp-content/uploads/2017/09/use-case-graphic_full-stack-provisioning.png',
          examples: [
            '',
          ]
        },
        {
          name: 'Queue from Stack',
          instructions:
            'Implement a Queue datastructure using two stacks. *Do not* create an array inside of the "Queue" class. Queue should implement the methods "add", "remove", and "peek". For a reminder on what each method does, look back at the Queue exercise.',
          image:
            'https://is5-ssl.mzstatic.com/image/thumb/Purple69/v4/17/c0/f6/17c0f677-114e-87ff-72bd-69dc3e000bcb/mzl.psuvwams.jpg/246x0w.jpg',
          examples: [
            '',
          ]
        },
        {
          name: 'Linked List',
          instructions:
            'Implement a Linked List',
          image:
            'https://cdn3.iconfinder.com/data/icons/web-and-internet-icons/512/Link-512.png',
          examples: [
            'insertFirst()',
            'size()',
            'getFirst()',
            'getLast()',
            'clear()',
            'removeFirst()',
            'removeLast()',
            'insertLast',
            'getAt()',
            'removeAt()',
            'insertAt()',
            'forEach()',
          ]
        },
        {
          name: 'Midpoint Linked List',
          instructions:
            'Return the "middle" node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.',
          image:
            'https://c1.staticflickr.com/1/35/95137658_1404c284a8_b.jpg',
          examples: [

          ]
        },
        {
          name: 'Circular Linked List',
          instructions:
            'Given a linked list, return true if the list is circular, false if it is not.',
          image:
            'https://blog.hubspot.com/hs-fs/hub/53/file-23117129-png/blog/images/closed-loop-marketing.png?t=1535641303031',
          examples: [

          ]
        },
        {
          name: 'N from Last Linked List',
          instructions:
            'Given a linked list, return the element n spaces from the last node in the list.  Do not call the "size" method of the linked list.  Assume that n will always be less than the length of the list.',
          image:
            '',
          examples: [

          ]
        },
        {
          name: 'Tree',
          instructions:
            '1) Create a node class.  The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. The node class should have methods "add" and "remove". 2) Create a tree class. The tree constructor should initialize a "root" property to null. 3) Implement "traverseBF" and "traverseDF" on the tree class.  Each method should accept a function that gets called with each element in the tree',
          image:
            'https://www.goodfreephotos.com/albums/vector-images/colorful-natural-tree-vector-clipart.png',
          examples: [

          ]
        },
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
