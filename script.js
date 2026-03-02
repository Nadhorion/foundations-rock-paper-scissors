

function getComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 100 );
    let computerChoice;

    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log(computerChoice + randomNumber)
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
const resultsText = document.querySelector('#results');
const scoresDiv = document.querySelector('#scores');

function playRound(humanChoice, computerChoice) {
    let isWinner;

    if ( humanChoice === computerChoice ) {
        resultsText.textContent = "Its a tie!";
        return;
    } else if (humanChoice === "rock") {
        isWinner = (computerChoice === "scissors") ? true : false;
    } else if (humanChoice === "paper") {
        isWinner = (computerChoice === "rock") ? true : false;
    } else if (humanChoice === "scissors") {
        isWinner = (computerChoice === "paper") ? true : false;
    }

    if (isWinner) {
        resultsText.textContent = 
            "You won, " + humanChoice + " beats " + computerChoice + ".";
        humanScore++;
    } else {
        resultsText.textContent = 
            "You lost, " +  computerChoice + " beats " + humanChoice + ".";
        computerScore++;
    }
    
    scoresDiv.textContent = 
    "Human Score: " + humanScore + ", Computer Score: " + computerScore;

    if (humanScore === 5) {
        resultsText.textContent = 'You won the game!';
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        resultsText.textContent = 'You lost the game D:';
        humanScore = 0;
        computerScore = 0;
    }

    return;
}   

function buttonClick(event) {
    const humanChoice = event.target.id;
    playRound(humanChoice, getComputerChoice());
}

const choices = document.querySelectorAll('button');
choices.forEach( choice => choice.addEventListener('click', buttonClick));
