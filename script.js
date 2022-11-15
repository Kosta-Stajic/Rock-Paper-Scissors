
const computerChoice = ["rock", "paper", "scissors"];

function getRandomChoice() {
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}


const playerSelection = prompt("Choose paper rock or scissors!")
const computerSelection = getRandomChoice ()

function playRound (playerSelection,computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log ("You win, rock beats scissors!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log ("You win, scissors beats paper!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log ("You win, paper beats rock!")
    } else if (playerSelection === computerSelection) {
        console.log ("It's a tie!")
    } else {
        console.log (`You lose, ${computerSelection} beats ${playerSelection}`)
    }
}
console.log (playRound (playerSelection, computerSelection))


