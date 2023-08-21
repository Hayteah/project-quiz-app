const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },

  {
    question:
      "The keyword or the property that you use to refer to an object through which they were invoked is?",
    choice1: "from",
    choice2: "to",
    choice3: "this",
    choice4: "object",
    answer: 3,
  },
  {
    question: "Which of the following is correct about JavaScript?",
    choice1: "JavaScript is an Object-Based language",
    choice2: "JavaScript is Assembly-language",
    choice3: "JavaScript is an Object-Oriented language",
    choice4: "JavaScript is a High-level language",
    answer: 1,
  },
  {
    question: "Why event handlers are needed in JS?",
    choice1: "Allows JavaScript code to alter the behavior of windows",
    choice2: "Adds innerHTML page to the code",
    choice3: "Change the server location",
    choice4: "Performs handling of exceptions and occurrences",
    answer: 1,
  },
  {
    question: "Which of the following is correct about JavaScript?",
    choice1: "JavaScript is an Object-Based language",
    choice2: "JavaScript is Assembly-language",
    choice3: "JavaScript is an Object-Oriented language",
    choice4: "JavaScript is a High-level language",
    answer: 1,
  },
  {
    question: "Why are event handlers needed in JavaScript?",
    choice1: "Allows JavaScript code to alter the behavior of windows",
    choice2: "Adds innerHTML to the page",
    choice3: "Changes the server location",
    choice4: "Performs handling of exceptions and occurrences",
    answer: 1,
  },
  {
    question: "What does JavaScript ignore?",
    choice1: "Newlines",
    choice2: "Tabs",
    choice3: "Spaces",
    choice4: "All of the above",
    answer: 4,
  },
  {
    question:
      "Which JavaScript method is used to access an HTML element by id?",
    choice1: "getElementById()",
    choice2: "getElement(id)",
    choice3: "getElementById(id)",
    choice4: "elementById(id)",
    answer: 1,
  },
  {
    question:
      "Which property is used to define the HTML content of an element with a specific id?",
    choice1: "innerText",
    choice2: "innerContent",
    choice3: "elementText",
    choice4: "innerHTML",
    answer: 4,
  },
  {
    question:
      "Which is the correct JavaScript statement to print the addition of two numbers 10 and 20 in a paragraph whose id is 'result'?",
    choice1: "getElementById('result').innerHTML = 10 + 20;",
    choice2: "getElementById('result').innerHTML = '10+20';",
    choice3: "getElementById('#result').innerHTML = 10 + 20;",
    choice4: "All of the above",
    answer: 1,
  },
  {
    question: "In JavaScript, a single line comment begins with ___.",
    choice1: "#",
    choice2: "/•",
    choice3: "—>",
    choice4: "//",
    answer: 4,
  },
  {
    question:
      "In JavaScript, multi-line comments start with __ and end with ___.",
    choice1: "/* and */",
    choice2: "<!-- and -->",
    choice3: "## and ##",
    choice4: "// and //",
    answer: 1,
  },
  {
    question: "What is the default value of an uninitialized variable?",
    choice1: "0",
    choice2: "undefined",
    choice3: "null",
    choice4: "NaN",
    answer: 2,
  },
  {
    question: "Which JavaScript method is used to get a number as a string?",
    choice1: "toString()",
    choice2: "intToString()",
    choice3: "parseInteger()",
    choice4: "All of the above",
    answer: 1,
  },
  {
    question:
      "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
    choice1: "toLocaleLowerCase()",
    choice2: "toLowerCase()",
    choice3: "toString()",
    choice4: "substring()",
    answer: 1,
  },
  {
    question:
      "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
    choice1: "A - fixed()",
    choice2: "fontcolor()",
    choice3: "blink()",
    choice4: "bold()",
    answer: 2,
  },
  {
    question:
      "Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
    choice1: "pop()",
    choice2: "push()",
    choice3: "reduce()",
    choice4: "reduceRight()",
    answer: 3,
  },
  {
    question:
      "Which of the following function of String object extracts a section of a string and returns a new string?",
    choice1: "slice()",
    choice2: "split()",
    choice3: "replace()",
    choice4: "search()",
    answer: 1,
  },
  {
    question:
      "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    choice1: "concat()",
    choice2: "pop()",
    choice3: "push()",
    choice4: "some()",
    answer: 1,
  },
  {
    question:
      "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
    choice1: "reverse()",
    choice2: "shift()",
    choice3: "slice()",
    choice4: "some()",
    answer: 4,
  },
  {
    question:
      "Which of the following type of variable is visible only within a function where it is defined?",
    choice1: "global variable",
    choice2: "local variable",
    choice3: "All of the above",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question: "What is the purpose of the `setTimeout` function in JavaScript?",
    choice1: "It pauses the execution of the script for a specified time.",
    choice2:
      "It sets a timer to repeatedly execute a function at a specified interval.",
    choice3: "It waits for user input before continuing the script.",
    choice4: "It triggers an event when the page is loaded.",
    answer: 1,
  },
  {
    question:
      "What is the purpose of the `addEventListener` method in JavaScript?",
    choice1: "It adds a new HTML element to the DOM.",
    choice2: "It creates a new function in the script.",
    choice3: "It attaches an event handler to an HTML element.",
    choice4: "It creates an event object.",
    answer: 3,
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    choice1: "string",
    choice2: "boolean",
    choice3: "character",
    choice4: "number",
    answer: 3,
  },
  {
    question:
      "What does the `typeof` operator return when applied to an array?",
    choice1: "array",
    choice2: "object",
    choice3: "array",
    choice4: "list",
    answer: 2,
  },
  {
    question:
      "Which array method is used to add one or more elements to the end of an array?",
    choice1: "push()",
    choice2: "append()",
    choice3: "add()",
    choice4: "concat()",
    answer: 1,
  },
  {
    question: "What is the result of the expression: 5 + '10'?",
    choice1: "15",
    choice2: "510",
    choice3: "510",
    choice4: "5 + 10",
    answer: 2,
  },
  {
    question: "What is the purpose of the map method in JavaScript arrays?",
    choice1:
      "It iterates over an array and removes all elements that match a condition.",
    choice2:
      "It creates a new array by applying a function to each element of an existing array.",
    choice3: "It sorts the elements of an array in ascending order.",
    choice4: "It combines all elements of an array into a single string.",
    answer: 2,
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    choice1: "They are synonyms and can be used interchangeably.",
    choice2:
      "null represents an intentional absence of any value, while undefined represents a variable that has been declared but hasn't been assigned a value.",
    choice3:
      "undefined represents an intentional absence of any value, while null represents a variable that has been declared but hasn't been assigned a value.",
    choice4:
      "null represents a variable that has been declared but hasn't been assigned a value, while undefined represents an intentional absence of any value.",
    answer: 2,
  },
  {
    question: "How do you access the first element of an array named myArray?",
    choice1: "myArray[0]",
    choice2: "myArray.first()",
    choice3: "myArray.getFirst()",
    choice4: "myArray.getElement(0)",
    answer: 1,
  },
  {
    question:
      "What is the purpose of the JSON.stringify() function in JavaScript?",
    choice1: "It converts a JavaScript object into a JSON string.",
    choice2: "It converts a JSON string into a JavaScript object.",
    choice3: "It sorts the properties of a JavaScript object alphabetically.",
    choice4:
      "It removes all properties with undefined values from a JavaScript object.",
    answer: 1,
  },
  {
    question: "What is the purpose of the querySelector method in JavaScript?",
    choice1: "It selects the first HTML element with a given class name.",
    choice2: "It selects the last HTML element with a given tag name.",
    choice3: "It selects all HTML elements with a given class name.",
    choice4:
      "It selects the first HTML element that matches a specified CSS selector.",
    answer: 4,
  },
  {
    question: "What does the splice method do in JavaScript?",
    choice1: "It removes the last element from an array.",
    choice2: "It adds a new element to the beginning of an array.",
    choice3:
      "It removes a specified number of elements from an array and replaces them with new elements.",
    choice4: "It reverses the order of the elements in an array.",
    answer: 3,
  },
  {
    question:
      "How can you prevent the default behavior of an event in JavaScript?",
    choice1: "By using the default() function.",
    choice2: "By using the preventDefault() method.",
    choice3: "By setting the event.default property to false.",
    choice4: "By using the stopPropagation() method.",
    answer: 2,
  },
  {
    question: "What is the purpose of the Object.keys() method in JavaScript?",
    choice1: "It returns an array of all properties and values of an object.",
    choice2: "It returns an array of all keys of an object.",
    choice3: "It returns an array of all values of an object.",
    choice4: "It returns the number of properties in an object.",
    answer: 2,
  },
  {
    question:
      "Which loop in JavaScript does not guarantee the execution of its code block at least once?",
    choice1: "for loop",
    choice2: "while loop",
    choice3: "do..while loop",
    choice4: "forEach loop",
    answer: 1,
  },
  {
    question: "What is the purpose of the localStorage object in JavaScript?",
    choice1:
      "It is used to store data that will be deleted when the browser is closed.",
    choice2:
      "It is used to store data that is shared across different browser tabs.",
    choice3:
      "It is used to store data that persists even after the browser is closed.",
    choice4: "It is used to store data that is encrypted for security.",
    answer: 3,
  },
  {
    question: "What does the term 'hoisting' refer to in JavaScript?",
    choice1:
      "The process of elevating a function declaration to the top of its containing scope during compilation.",
    choice2:
      "The process of prioritizing asynchronous tasks over synchronous tasks.",
    choice3:
      "The process of optimizing variable assignments to reduce memory usage.",
    choice4:
      "The process of converting code from one programming language to another.",
    answer: 1,
  },
  {
    question: "What does the term 'scope' refer to in JavaScript?",
    choice1: "The visual design of a website's user interface.",
    choice2: "The range of values a variable can hold.",
    choice3: "The set of rules that govern the behavior of event listeners.",
    choice4:
      "The context in which variables are accessible and can be referenced.",
    answer: 4,
  },
  {
    question:
      "Which JavaScript method is used to remove the last element from an array?",
    choice1: "pop()",
    choice2: "removeLast()",
    choice3: "splice()",
    choice4: "shift()",
    answer: 1,
  },
  {
    question:
      "What is the purpose of the Object.create() method in JavaScript?",
    choice1:
      "It creates a new object with the same properties as the specified object.",
    choice2:
      "It creates a new object and assigns it the prototype of the specified object.",
    choice3:
      "It creates a new object and copies all properties from the specified object.",
    choice4:
      "It creates a new object and initializes it with default property values.",
    answer: 2,
  },
  {
    question:
      "What is the output of the following code?\n\nconsole.log(2 + '2');",
    choice1: "4",
    choice2: "22",
    choice3: "NaN",
    choice4: "Error",
    answer: 2,
  },
  {
    question:
      "Which of the following is NOT a primitive data type in JavaScript?",
    choice1: "number",
    choice2: "boolean",
    choice3: "array",
    choice4: "string",
    answer: 3,
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    choice1: "It refers to the current HTML document.",
    choice2: "It refers to the previous function call.",
    choice3: "It refers to the current function's scope.",
    choice4: "It refers to the context in which a function is called.",
    answer: 4,
  },
  {
    question:
      "Which of the following methods is used to add a new element to the beginning of an array?",
    choice1: "push()",
    choice2: "unshift()",
    choice3: "addFirst()",
    choice4: "append()",
    answer: 2,
  },

  {
    question: "What is the purpose of the '=== operator in JavaScript?",
    choice1: "It is used to assign a value to a variable.",
    choice2:
      "It is used to compare two values for equality, both in value and data type.",
    choice3: "It is used to create a comment in the code.",
    choice4: "It is used to define a new function.",
    answer: 2,
  },
  {
    question:
      "What is the output of the following code?\n\nconsole.log(typeof typeof 42);",
    choice1: "number",
    choice2: "string",
    choice3: "undefined",
    choice4: "object",
    answer: 2,
  },
  {
    question:
      "Which of the following statements is true about JavaScript closures?",
    choice1:
      "Closures allow variables to be private and inaccessible from outside the function.",
    choice2: "Closures can only be created with arrow functions in JavaScript.",
    choice3:
      "Closures are used to define the layout and structure of a webpage.",
    choice4: "Closures can only be used with asynchronous code.",
    answer: 1,
  },
];

//CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 50;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS)
    return window.location.assign("/end.html");
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
