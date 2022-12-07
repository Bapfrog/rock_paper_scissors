
console.log("Hello, console. Let's (paper/scissors/)rock.");

let playerName = prompt("Hello there, friend; what's your name?");
alert( "Nice to meet you, " + playerName + "! I challenge you to a game of Rock Paper Scissors!");

//create some global variables (they don't all need a value right now)
let computerSelection;
let playerSelection = "";
let outcome;

// Write a function that randomly returns Rock, Paper, or Scissors
function getComputerChoice() {

    // random# times 3 plus 1. resulted determines if computer selects rock, paper, or scissors
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
    return computerSelection;
}

// Write a function to prompt for player input, convert same to lowercase, and validate the input
function getSelection() {
    playerSelection = prompt("Please enter either Rock, Paper, or Scissors", "Type here");

    // log it
    console.log("Player has inputted: " + playerSelection);

    // perform toLowerCase() for comparison purposes
    playerSelection = playerSelection.toLowerCase();

    // need to confirm that playerSelection is ONLY one of rock, paper or scissors
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        alert("Um, " + playerName + "--please limit your response to either Rock, Paper, or Scissors (and be careful to spell it right) - thank you!");

        getSelection();

        return playerSelection;
    }
}

// Write a function that takes 2 parameters, playerSelection and computerSelection, and then returns a string that declares the winner of a round. It needs to return a result outcome

 function playRound (playerSelection, computerSelection) {

    // variables to keep things cleaner down below
    const rockWins = "Rock defeats Scissors";
    const paperWins = "Paper defeats Rock";
    const scissorsWins = "Scissors defeats Paper";
    const youLose = " - you lose!";
    const youWin = " - you win!";
    let tieGame = "We each chose " + playerSelection + " - it's a tie!";

    // if statements with nested switch statements to determine outcome
    if (computerSelection === "rock")  {
        switch (playerSelection) {
            case "rock":
                outcome = tieGame;
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
                outcome = tieGame;
                break;  
        }        
    }

    if (computerSelection === "scissors") {
        switch (playerSelection) {
            case "rock":
                outcome = rockWins + youWin;
                break;           
            case "scissors":
                outcome = tieGame;
                break;  
            case "paper": 
                outcome = scissorsWins + youLose;
                break;  
        }       
    }   
    console.log(outcome);
    alert(outcome);
    return outcome;
}

// game() will call the functions to get computer selection, player selection, and play a round. At the end of each round it will log the current score. After 5 rounds it will log the final score and report the winner
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let scoreUpdate;

    for (let i=0; i<5; i++) {
        getComputerChoice();
        getSelection();
        playRound(playerSelection, computerSelection);

        if (outcome.includes("win")) {
            ++playerScore;
        } else if (outcome.includes ("lose")) {
            ++computerScore;
        } else {
             ++tieScore;
        }
        scoreUpdate = "Player: " + playerScore + "; Computer: " + computerScore + "; Tie: " + tieScore;
        console.log(scoreUpdate);
    }

    let finalScore = "The final score is " + scoreUpdate + "."
    if (playerScore > computerScore) {
        console.log("Congratulations, You Won! " + finalScore)
    } else if (computerScore > playerScore) {
        console.log("Sorry, You Lost! " + finalScore)
    } else {
        console.log(finalScore + " Tie score, seriously? I demand a rematch!")
    }
}

// Run it!
game();  //It works as expected!