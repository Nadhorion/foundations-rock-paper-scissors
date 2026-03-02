

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

// function getHumanChoice() {
//     const humanChoice = (prompt("Pick either Rock, Paper, or Scissors:")).toLowerCase();

//     if (humanChoice === "rock"
//         || humanChoice === "paper"
//         || humanChoice === "scissors"){
//         console.log(humanChoice);
//         return humanChoice;
//     }

//     return;
// }

let humanScore = 0;
let computerScore = 0;

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
    
    if (humanScore === 5) {
        console.log('You won the game!');
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        console.log(`You lost the game D: 
                    Human Score: ${humanScore} 
                    Computer Score: ${computerScore}`);
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
// console.log(choices);
choices.forEach( choice => choice.addEventListener('click', buttonClick));
