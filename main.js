// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // converts to lower csas
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  // hand one wins
  if (
    // Scissors cuts paper.
    (hand1 === "scissors" && hand2 === "paper") ||
    // Paper covers rock.
    (hand1 === "paper" && hand2 === "rock") ||
    // Rock crushes lizard.
    (hand1 === "rock" && hand2 === "lizard") ||
    // Lizard poisons Spock.
    (hand1 === "lizard" && hand2 === "spock") ||
    // Spock smashes scissors.
    (hand1 === "spock" && hand2 === "scissors") ||
    // Scissors decapitates lizard.
    (hand1 === "scissors" && hand2 === "lizard") ||
    // Lizard eats paper.
    (hand1 === "lizard" && hand2 === "paper") ||
    // Paper disproves Spock.
    (hand1 === "paper" && hand2 === "spock") ||
    // Spock vaporizes rock.
    (hand1 === "spock" && hand2 === "rock") ||
    // Rock crushes scissors.
    (hand1 === "rock" && hand2 === "scissors")
  ) {
    return "Hand one wins!";

  // hand two wins
  } else if ( 
    // Scissors cuts paper.
    (hand2 === "scissors" && hand1 === "paper") ||
    // Paper covers rock.
    (hand2 === "paper" && hand1 === "rock") ||
    // Rock crushes lizard.
    (hand2 === "rock" && hand1 === "lizard") ||
    // Lizard poisons Spock.
    (hand2 === "lizard" && hand1 === "spock") ||
    // Spock smashes scissors.
    (hand2 === "spock" && hand1 === "scissors") ||
    // Scissors decapitates lizard.
    (hand2 === "scissors" && hand1 === "lizard") ||
    // Lizard eats paper.
    (hand2 === "lizard" && hand1 === "paper") ||
    // Paper disproves Spock.
    (hand2 === "paper" && hand1 === "spock") ||
    // Spock vaporizes rock.
    (hand2 === "spock" && hand1 === "rock") ||
    // Rock crushes scissors.
    (hand2 === "rock" && hand1 === "scissors")
  ) {
    return "Hand two wins!";

    // it is a tie
  } else if (hand1 === hand2) {
    return "It's a tie!";

    // undefined message
  } else {
    return "---  Ooops something went wrong. Please check the spelling in the next round.  ---"
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
   console.log("rock, paper, scissors, lizard, spock") // ;)
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      assert.equal(rockPaperScissors('lizard', 'lizard'), "It's a tie!");
      assert.equal(rockPaperScissors('spock', 'spock'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock', 'spock'), "Hand two wins!");
      assert.equal(rockPaperScissors('spock', 'lizard'), "Hand two wins!");
      assert.equal(rockPaperScissors('lizard', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
