 # JavaScript Quiz Game

This is a JavaScript quiz game that tests your knowledge of JavaScript. The game has 50 questions, and you have to answer the first 10 questions correclty to be able to get access to more questions. You can play the game multiple times to improve your score.

### How to play

To play the game, click on the "Start" button. You will then be presented with a question and four possible answers. Click on the answer that you think is correct. If you answer correctly, you will earn 10 points. If you answer first 10 questions incorrectly, you will have to repeat the first 10 questions until answered correctly.

The game will end after you have answered all 50 questions. Your score will be displayed on the screen.

### Code explanation

The code for the game is divided into three files:

* `index.html`: This file contains the HTML code for the game.
* `game.css` and `styles.css`: This files contains the CSS code for the game.
* `game.js`: This file contains the JavaScript code for the game.

The `index.html` file contains the basic HTML code for the game. It includes the `<head>` and `<body>` tags, as well as the `<script>` tag that references the `game.js` file.

The `game.css` and `styles.css` file contains the CSS code for the game. It includes the styles for the different elements of the game, such as the questions, the answers, and the score.

The `game.js` file contains the JavaScript code for the game. It includes the code


### Constructor:
 The constructor is a special function that initializes the game's initial state. It's called automatically when you create a new `QuizGame` object. In this section, the code grabs various elements from the webpage (HTML) using their unique IDs. For instance, `this.question` is the element that will display the current question, and `this.choices` is an array of elements representing the multiple-choice options.

### Game State Variables:
 Here, the code sets up several variables that will keep track of the game's progress and user's choices. For example, `this.score` will store the player's current score, `this.questionCounter` will keep track of the number of questions answered, and `this.availableQuestions` will store the remaining questions that haven't been answered yet.

### Quiz Questions: 
An array called `this.questions` is defined to store a list of quiz questions, each with its corresponding choices and the correct answer. This data structure will be used to present questions to the player during the game.

### Constants: 
The game defines a couple of constants: `this.CORRECT_BONUS` (representing the bonus points for a correct answer) and `this.MAX_QUESTIONS `(representing the maximum number of questions in the game).

### Event Listeners: 
This section sets up event listeners to respond when certain actions occur. For instance, when the player clicks the "Start" button (`this.playButton`), the game's `startGame` function will be called. Similarly, when the player clicks a choice, the `handleChoiceClick` function will be triggered.

### Creating an Instance: 
Finally, the code creates an instance of the `QuizGame` class by assigning it to the variable `quizGame`. This instance is what kicks off the game, as it automatically runs the constructor and sets everything up for gameplay.

This class essentially bundles together all the logic needed for a quiz game, including getting elements from the webpage, tracking game state, handling user interactions, and presenting questions. It sets up the foundation for the game and enables it to run smoothly when a user starts playing.


`startGame()`: This method is responsible for setting up the game when it starts. It resets the question counter and score, prepares the available questions, hides the start screen, and displays the game screen. Then, it calls the `getNewQuestion()` method to fetch and display the first question.

`resetGame()`: This method resets the game to its initial state. It sets the score to 0, hides the game screen and end game screen, and displays the start screen. It's used when the player wants to play again.

`getNewQuestion()`: This method fetches a new question from the available questions list and displays it on the screen. It keeps track of the question counter and updates the progress bar. If the player has answered all questions or reached the maximum number of questions, it stops fetching new questions.

`handleChoiceClick(e)`: This method handles the player's choice selection. It checks if the chosen answer is correct, updates the score accordingly, and plays sound effects based on the correctness of the answer. It then schedules the display of the next question.

`incrementScore(num)`: This method adds a specified number (`num`) to the player's score and updates the score display on the screen.

`showEndGameScreen(message)`: This method displays the end game screen with a custom message and the player's final score. It hides the game screen and displays the end game screen along with the message and score.

These methods work together to manage the game flow, update the user interface, and handle player interactions. The class encapsulates all the game-related functionality, making it easier to understand and maintain the code.





