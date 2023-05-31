

const button1 = document.querySelector("#rock")

const button2 = document.querySelector("#paper")

const button3 = document.querySelector("#scissors")

const computerChoice = ["rock", "paper", "scissors"];

const body = document.querySelector("body")

const p = document.querySelector("#results")
body.appendChild(p)

//Take a random choice for the computer//
function getRandomChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}



let playerScore = 0
let computerScore = 0


//buttons for playing//
button1.addEventListener("click", () => {
    const computerSelection = getRandomChoice()
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection)
    console.log(playerSelection)
    console.log(computerSelection)
});
button2.addEventListener("click", () => {
    const computerSelection = getRandomChoice()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
    console.log(playerSelection)
    console.log(computerSelection)
});
button3.addEventListener("click", () => {
    const computerSelection = getRandomChoice()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection)
    console.log(playerSelection)
    console.log(computerSelection)
});

function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        //Figure out how to select the div and feed it the text form the console.log//

        p.textContent = `You win rock beats scissors!`+ " " + `the score is ${playerScore} - ${computerScore}`


    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        p.textContent = `You win, scissors beats paper! `+ " " + `the score is ${playerScore} - ${computerScore}`


    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        p.textContent = `You win, paper beats rock!`+ " " + `the score is ${playerScore} - ${computerScore}`


    } else if (playerSelection === computerSelection) {
        p.textContent = (`It's a tie!`)+ " " + `the score is ${playerScore} - ${computerScore}`

    } else {
        computerScore++
        p.textContent = (`You lose, ${computerSelection} beats ${playerSelection}`) + " " + `the score is ${playerScore} - ${computerScore}`

    } if (playerScore === 5 && computerScore < 5) {
        p.textContent = `Congratulations, you win the game! The score was ${playerScore} to ${computerScore}! Refresh the page to play again!`
    } else if (playerScore < 5 && computerScore === 5) {
        p.textContent = `Too bad, you lose the game! The score was ${playerScore} to ${computerScore}! Refresh the page to play again!`
    } 
}

document.getElementById("results").textContent = playRound();


/* function game() {
    
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

game()*/
