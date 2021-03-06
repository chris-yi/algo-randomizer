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
            'https://steemitimages.com/DQmd2Y1JGYBdC6PF99P2PYAQ3tSCcVpT1Rhzirv5zcJq2iM/last.png',
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
        {
          name: 'Implement a Binary Search Tree',
          instructions:
            '1) Implement the Node class to create a binary search tree.  The constructor should initialize values "data", "left", and "right". 2) Implement the "insert" method for the Node class.  Insert should accept an argument "data" then create an insert a new node at the appropriate location in the tree. 3) Implement the "contains" method for the Node class.  Contains should accept a "data" argument and return the Node in the tree with the same value.',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/2000px-Binary_search_tree.svg.png',
          examples: [

          ]
        },
        {
          name: 'Implement Bubble Sort',
          instructions:
            '',
          image:
            'https://cdn-images-1.medium.com/max/1386/1*zXKGjfhfBx-Jo4v0blt7zg.jpeg',
          examples: [

          ]
        },
        {
          name: 'Implement a Selection Sort',
          instructions:
            '',
          image:
            'https://atmanco.com/wp-content/uploads/2015/11/employee-recruitment-and-selection.png',
          examples: [

          ]
        },
        {
          name: 'Implement a Merge Sort',
          instructions:
            '',
          image:
            'https://vignette.wikia.nocookie.net/central/images/4/4f/500px-Merge_sign.svg.png/revision/latest?cb=20121024105541',
          examples: [

          ]
        },
        {
          name: 'Frequency Counter',
          instructions:
            'Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.',
          image:
            'https://www.highfrequencysthlm.com/wp-content/uploads/2017/08/HIGHFREQUENCY_SYMBOLISM.png',
          examples: [
            'same([1,2,3], [4,1,9]) // true',
            'same([1,2,3], [1,9]) // false',
            'same([1,2,1], [4,4,1]) // false (must be same frequency)'
          ]
        },
        {
          name: 'Sum Zero',
          instructions:
            'Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist',
          image:
            'http://www.getcoloringpages.com/images/sm/smwbgc6.png',
          examples: [
            'sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]',
            'sumZero([-2,0,1,3]) // undefined',
            'sumZero([1,2,3]) // undefined'
          ]
        },
        {
          name: 'Count Unique Values',
          instructions:
            'Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.',
          image:
            'https://thumbs.dreamstime.com/z/i-special-man-holding-sign-standing-out-crowd-different-uniqu-words-held-as-unique-exceptional-rare-uncommon-39236599.jpg',
          examples: [
            'countUniqueValues([1,1,1,1,1,2]) // 2',
            'countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7',
            'countUniqueValues([]) // 0',
            'countUniqueValues([-2,-1,-1,0,1]) // 4'
          ]
        },
        {
          name: 'Max Subarray Sum',
          instructions:
            'Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.',
          image:
            'https://www.signel.ca/wp-content/uploads/2017/05/P-070-2-90-1.jpg',
          examples: [
            'maxSubarraySum([1,2,5,2,8,1,5],2) // 10',
            'maxSubarraySum([1,2,5,2,8,1,5],4) // 17',
            'maxSubarraySum([4,2,1,6],1) // 6',
            'maxSubarraySum([4,2,1,6,2],4) // 13',
            'maxSubarraySum([],4) // null'
          ]
        },
        {
          name: 'Same Frequency',
          instructions:
            'Write a function called sameFrequency.   Given two positive integers, find out if the two numbers have the same frequency of digits',
          image:
            'https://thefrequencydc.com/wp-content/uploads/Frequency-Logo-200-1.png',
          examples: [
            'sameFrequency(182, 281) // True',
            'sameFrequency(34, 14) // False',
            'sameFrequency(3589578, 5879385) // True',
            'sameFrequency(22, 222) // False',
          ]
        },
        {
          name: 'Are There Duplicates?',
          instructions:
            'Implement a function called, areThereDuplicates which accepts a variable of arguments, and checks whether there are any duplicates among the arguments passed in',
          image:
            'https://www.vtexperts.com/wp-content/uploads/2016/07/duplicate-content.png',
          examples: [
            'areThereDuplicates(1, 2, 3) // False',
            'areThereDuplicates(1, 2, 2) // True',
            'areThereDuplicates("a", "b", "c", "d") // True',
          ]
        },
        {
          name: 'Average Pair',
          instructions:
            'Write a function called averagePair.  Given a sorted array of integers and a target average, determine if there is a piar of values in the array where the average of the pair equals the target average.  There may be more than one pair that matches the average target',
          image:
            'https://www.featurepics.com/StockImage/20070814/pear-pair-stock-photo-413291.jpg',
          examples: [
            'averagePair([1, 2, 3], 2.5) // True',
            'averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // True',
            'averagePair([-1, 0, 3, 4, 5, 6], 4.1) // False',
            'averagePair([], 4) // False',
          ]
        },
        {
          name: 'Is Subsequence',
          instructions:
            'Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.  In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/51gFpuIyT8L.jpg',
          examples: [
            'isSubsequence("hello", "hello world") // True',
            'isSubsequence("sing", "sting") // True',
            'isSubsequence("abc", "abracadabra") // True',
            'isSubsequence("abc", "acb") // false',
          ]
        },
        {
          name: 'Jewels and Stones (Leet Easy)',
          instructions:
            'You"re given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels. The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".',
          image:
            'https://thumbs.dreamstime.com/z/oval-cut-precious-stones-sparkle-11836670.jpg',
          examples: [
            'Input: J = "aA", S = "aAAbbbb" //Output: 3',
            'Input: J = "z", S = "ZZ" //Output: 0',
          ]
        },
        {
          name: 'Single Number (Leet Easy)',
          instructions:
            'Given a non-empty array of integers, every element appears twice except for one. Find that single one. Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?',
          image:
            'https://www.seton.com/media/catalog/product/cache/4/image/85e4522595efc69f496374d01ef2bf13/1435184113/4/-/4-digit-blank-placards-46082-lg.png',
          examples: [
            'Input: [2,2,1] //Output: 1',
            'Input: [4,1,2,1,2] //Output: 4',
          ]
        },
        {
          name: 'Move Zeroes (Leet Easy)',
          instructions:
            'Given an array nums, write a function to move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.',
          image:
            'https://www.dhresource.com/0x0s/f2-albu-g4-M00-02-B0-rBVaEVc6A4WAKO2MAABbLb0HCNk479.jpg/move-zero-vol-1-by-john-bannon-and-big-blind.jpg',
          examples: [
            'Input: [0,1,0,3,12] //Output: [1,3,12,0,0]',
          ]
        },
        {
          name: 'Majority Element (Leet Easy)',
          instructions:
            'Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times. You may assume that the array is non-empty and the majority element always exist in the array.',
          image:
            'https://electology.org/sites/default/files/plurality-majority.jpg',
          examples: [
            'Input: [3,2,3] //Output: 3',
            'Input: [2,2,1,1,1,2,2] //Output: 2',
          ]
        },
        {
          name: 'Binary Search (Sorted Array)',
          instructions:
            'Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.  Otherwise, return -1',
          image:
            'https://libertarianvindicator.files.wordpress.com/2018/02/divide-conquer.jpg?w=840',
          examples: [
            'binarySearch([1, 2, 3, 4, 5], 2) // 1',
            'binarySearch([1, 2, 3, 4, 5], 3) // 2',
            'binarySearch([1, 2, 3, 4, 5], 5) // 4',
            'binarySearch([1, 2, 3, 4, 5], 6) // -1',
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
    console.log(this.state.algos)
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
