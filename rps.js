
console.log("Hello, console.");

let message = "It is time to play Rock Paper Scissors";
alert(message);

// Write a function called getComputerChoice that randomly returns Rock, Paper, or Scissors

//create the global variables for computerSelection and playerSelection (a value is optional at this point)
let computerSelection;
let playerSelection;

// - use a Math.random function to randomly select a number 1, 2, or 3. These will evaluate to Rock, Paper, and Scissors. Save this result as computerSelection and log it.
function getComputerChoice() {

// random # *3 plus 1. if 1, compSel = rock; 2, compSel = paper; 3, compSel = scissors
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";        
    }
// log it
console.log("The computer has selected: " + computerSelection);
    
}
// invoke the function!
getComputerChoice();

// log it again to confirm that the computerSelection assignment persists outside of the getComputerChoice() function
console.log(computerSelection); //it does

// write a function to prompt for player input, convert to lower, and perform form validation (so make sure they didn't input something other than rock/paper/scissors)
function getSelection() {
    playerSelection = prompt("Please enter either Rock, Paper, or Scissors", "Type here");

    // log it
    console.log("Player has inputted: " + playerSelection);

    // write a function that takes the player input and performs toLowerCase() for comparison purposes
    playerSelection = playerSelection.toLowerCase();

    // log it
    console.log(playerSelection + " should be all lowercase now"); //it is

    // need to confirm that playerSelection is ONLY one of rock, paper or scissors
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    
    } else {
    alert("Please limit your response to either Rock, Paper, or Scissors - thank you!");
    getSelection();
    }
}

// invoke it
getSelection();
// log it again
console.log("Player has properly inputted: " + playerSelection);



// Write a function that takes 2 parameters, playerSelection and computerSelection, and then returns a string that declares the winner of a round: "You Lose! Paper beats Rock"
// Make sure playerSelection is case-insensitve (so convert it to all lowers or something for purposes of comparison - inputs of Rock, ROCK and rOcK all need to evaluate the same)
// this function needs to return a result which can used later


/* function playRound (playerSelection, computerSelection) {
switch (Math.floor(Math.random() * 3 + 1)) {
//if statement with nested switch statements?
if:  computer has rock
            case player has rock;  tie 
            case player has scissors;  computer wins
            case player has paper;  player wins
    else if: computer has paper
            case player has rock; computer wins 
            case player has scissors;  player wins
            case player has paper; tie
    else: computer has scissors
            case player has rock; player wins 
            case player has scissors;  tie
            case player has paper; computer wins   

    


    // - use prompt() to get input from the user. Convert user input to lowercase. Use a switch statement to iterate all the possible matchups (including ties): if playerSelection === rock && computerSelection === paper, "You Lose! Paper beats Rock." We can do some bundling here - all the wins/losses/ties can have the same output for the first sentence (You lose/You win/It's a tie), and the second sentence declaration of the outcome can be the result of separate logic.
} */

// Write a new function called game(). Call the playRound function inside of the game() function to play a 5 round game that keeps score and reports the winner or lose at the end
// That means a loop is in order!
/* for (let i=0; 1<5; i++) {
    // game() will call playRound, and at the end of each round it will log the current score; after 5 rounds it will log the final score and report the winner
} */

// Use console.log() to display the result of each round and the winner at the end. Variables playerScore and computerScore will need to update at the conclusion of each round.
  // "Player: " + playerScore + "; Computer: " + computerScore