function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        return "rock"
    } 
    else if (randNum > 0.33 && randNum < 0.66) {
        return "paper"
    } 
    else if (randNum >= 0.66) {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = String(prompt("Enter your choice (rock, paper or scissors)")).toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return getHumanChoice(); 
    } else {
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    }

    console.log(`You: ${humanScore} \nComputer: ${computerScore}`);
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();

if (humanScore > computerScore) {
    console.log("You win!");
} 
else if (humanScore < computerScore) {
    console.log("Game Over. You lose!")
}
else {
    console.log("Nobody wins. It's a tie.")
}