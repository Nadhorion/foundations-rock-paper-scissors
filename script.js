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

getComputerChoice();
getHumanChoice()
