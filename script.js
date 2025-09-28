function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        return "rock"
    } 
    else if (randNum > 0.33 && randNum < 0.66) {
        return "paper"
    } 
    else if (randNum >= 0.66) {
        return "scissor"
    }
}

function getHumanChoice() {
    let choice = String(prompt("Enter your choice (rock, paper or scissor)")).toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        console.log("Error");
        return getHumanChoice(); 
    } else {
        console.log("Success");
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissor" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanChoice++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerChoice++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);