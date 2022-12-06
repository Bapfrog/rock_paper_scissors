//Your Javascript goes here


console.log("Hello, world!");

let message = 'Hola! Me llamo pop-up!';
alert(message);

// Write a function called getComputerChoice that randomly returns Rock, Paper, or Scissors
// tip: console.log() (or use Watch function of debugger!) to make sure this is happening as expected.
// - use a math.random function to randomly select a number 1, 2, or 3. These will evaluate to Rock, Paper, and Scissors. Save this result as computerSelection and log it.

/* function getComputerChoice {
// random # *3 plus 1.
// if 1, compSel = rock; 2, compSel = paper; 3, compSel = scissors
// log compSel
 } */

// Write a function that takes 2 parameters, playerSelection and computerSelection, and then returns a string that declares the winner of a round: "You Lose! Paper beats Rock"
// Make sure playerSelection is case-insensitve (so convert it to all lowers or something for purposes of comparison - inputs of Rock, ROCK and rOcK all need to evaluate the same)
// this function needs to return a result which can used later


/* function playRound (playerSelection, computerSelection) {
    // - use prompt() to get input from the user. Convert user input to lowercase. Use a switch statement to iterate all the possible matchups (including ties): if playerSelection === rock && computerSelection === paper, "You Lose! Paper beats Rock." We can do some bundling here - all the wins/losses/ties can have the same output for the first sentence (You lose/You win/It's a tie), and the second sentence declaration of the outcome can be the result of separate logic.
} */

// Write a new function called game(). Call the playRound function inside of the game() function to play a 5 round game that keeps score and reports the winner or lose at the end
// That means a loop is in order!
/* for (let i=0; 1<5; i++) {
    // game() will call playRound, and at the end of each round it will log the current score; after 5 rounds it will log the final score and report the winner
} */

// Use console.log() to display the result of each round and the winner at the end. Variables playerScore and computerScore will need to update at the conclusion of each round.
  // "Player: " + playerScore + "; Computer: " + computerScore