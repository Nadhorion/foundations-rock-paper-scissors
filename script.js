let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 100 );
    let computerChoice;

    if (randomNumber <= 33) {
        computerChoice = "Rock";

    } else if (randomNumber <= 66) {
        computerChoice = "Paper";

    } else {
        computerChoice = "Scissors";

    }

    console.log(computerChoice + randomNumber)
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = (prompt("Pick either Rock, Paper, or Scissors:")).toLowerCase();

    if (humanChoice === "rock"
        || humanChoice === "paper"
        || humanChoice === "scissors"){
        
        console.log(humanChoice);
        return humanChoice;
    }

    return;
}

function playRound(humanChoice, computerChoice) {

    let isWinner;

    if ( humanChoice === computerChoice ) {
        console.log("Its a tie!");
        return;

    } else if (humanChoice === "rock") {
        isWinner = (computerChoice === "scissors") ? true : false;

    } else if (humanChoice === "paper") {
        isWinner = (computerChoice === "rock") ? true : false;

    } else if (humanChoice === "scissors") {
        isWinner = (computerChoice === "paper") ? true : false;

    }

    if (isWinner) {
        console.log("You won, " + humanChoice + " beats " + computerChoice + ".")
        humanScore++;
    } else {
        console.log("You lost, " +  computerChoice + " beats " + humanChoice + ".")
        computerScore++;
    }
    return;

}

getComputerChoice();
//getHumanChoice();
playRound("rock", "paper");
playRound("paper", "paper");
playRound("paper", "rock");
playRound("scissors", "paper");
