
const computerChoice = ["rock", "paper", "scissors"];

function getRandomChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


let playerScore = 0

let computerScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win, rock beats scissors!")
        playerScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win, scissors beats paper!")
        playerScore++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win, paper beats rock!")
        playerScore++
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    } else {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        computerScore++
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose paper rock or scissors!").toLowerCase();
        const computerSelection = getRandomChoice()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        console.log(`You win! the score is ${playerScore} to ${computerScore}`)
    } else if (playerScore === computerScore) {
        console.log(`It's a tie!! the score is ${computerScore} to ${playerScore}`)
    } else {
        console.log(`You lose!! the score is ${computerScore} to ${playerScore}`)
    }
}

game()
