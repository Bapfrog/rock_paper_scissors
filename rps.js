
console.log("Hello, console. Let's Do This.");

let playerName = prompt("Hello there, friend; what's your name?");
alert( "Mucho gusto, " + playerName + "! It is time to play Rock Paper Scissors!");

// Write a function called getComputerChoice that randomly returns Rock, Paper, or Scissors

//create the global variables for computerSelection and playerSelection (a value is optional at this point)
let computerSelection;
let playerSelection = ""
let outcome;

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
console.log("Confirming that " + computerSelection  +(", the computer's selection, persists outside of the function")); //it does

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
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        alert("Um, " + playerName + "--please limit your response to either Rock, Paper, or Scissors (and be careful to spell it right) - thank you!");

        getSelection();

        return playerSelection;
    }
}

// invoke it
getSelection();
// log it again now that is definitely an acceptable input
console.log("Player has properly inputted: " + playerSelection);

// Write a function that takes 2 parameters, playerSelection and computerSelection, and then returns a string that declares the winner of a round: "You Lose! Paper beats Rock"
// this function needs to return a result which can used later

 function playRound (playerSelection, computerSelection) {

    //some variables to keep things cleaner down below
    const rockWins = "Rock defeats Scissors";
    const paperWins = "Paper defeats Rock";
    const scissorsWins = "Scissors defeats Paper";
    const youLose = " - you lose!";
    const youWin = " - you win!";
    let tieGame = "We each chose " + playerSelection + " - it's a tie!";


    //if statements with nested switch statements?
    if (computerSelection === "rock")  {
        switch (playerSelection) {
            case "rock":
                outcome = tieGame; //"We each chose Rock - it's a tie!";
                break;                  
            case "scissors":
                outcome = rockWins + youLose;
                break;  
            case "paper": 
                outcome = paperWins + youWin;
                break;  
        } 
    }

    if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                outcome = paperWins + youLose;
                break;               
            case "scissors":
                outcome = scissorsWins + youWin;
                break;  
            case "paper": 
                outcome = tieGame; //"We each chose Paper - it's a tie!";
                break;  
        }        
    }

    if (computerSelection === "scissors") {
        switch (playerSelection) {
            case "rock":
                outcome = rockWins + youWin;
                break;           
            case "scissors":
                outcome = tieGame; //"We each chose Scissors - it's a tie!";
                break;  
            case "paper": 
                outcome = scissorsWins + youLose;
                break;  
        }       
    }   
    console.log(outcome);
    alert(outcome);
}

// invoke playRound()
playRound(playerSelection, computerSelection);

//does the outcome variable keep its value outside of the playRound() function?
console.log("confirming outcome persists outside of function: " + outcome);  //it does

/*
    // - Use a switch statement to iterate all the possible matchups (including ties): if playerSelection === rock && computerSelection === paper, "You Lose! Paper beats Rock." We can do some bundling here - all the wins/losses/ties can have the same output for the first sentence (You lose/You win/It's a tie), and the second sentence declaration of the outcome can be the result of separate logic.
} */

// Write a new function called game(). Call the playRound function inside of the game() function to play a 5 round game that keeps score and reports the winner or lose at the end
// That means a loop is in order!
/* for (let i=0; 1<5; i++) {
    // game() will call playRound, and at the end of each round it will log the current score; after 5 rounds it will log the final score and report the winner
} */

// Use console.log() to display the result of each round and the winner at the end. Variables playerScore and computerScore will need to update at the conclusion of each round.
  // "Player: " + playerScore + "; Computer: " + computerScore