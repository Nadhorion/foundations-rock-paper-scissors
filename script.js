console.log("hello darkness");

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

getComputerChoice();

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

getHumanChoice()
