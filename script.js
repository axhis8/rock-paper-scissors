function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        computerHand.src = "./images/rock.png";
        return "rock";
    } 
    else if (randNum > 0.33 && randNum < 0.66) {
        computerHand.src = "./images/paper.png";
        return "paper";
    } 
    else if (randNum >= 0.66) {
        computerHand.src = "./images/scissors.png";
        return "scissors";
    }
}

function checkWin(score1, score2) {
    if (score1 > score2) {
    return "You won the game!";
    } 

    else if (score1 < score2) {
    return "You lost this game.";
    }

    else if (score1 === score2) {
    return "Nobody wins. It's a tie.";
    }   
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let choice;

const hands = document.querySelector("#buttons");

hands.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            choice = "rock";
            break;
        case "paper":
            choice = "paper";
            break;
        case "scissors":
            choice = "scissors";
            break;
    }

    playRound();
    
})

const computerHand = document.querySelector("#computerHand");

const score = document.querySelector("#score");

const winText = document.querySelector("#winText");

const playedRoundDiv = document.querySelector("#roundsPlayed");


function playRound() {
    const computerChoice = getComputerChoice();

    if (choice === computerChoice) {
        winText.textContent = "It's a tie!";
    }
    else if (choice === "rock" && computerChoice === "scissors" || 
        choice === "paper" && computerChoice === "rock" ||
        choice === "scissors" && computerChoice === "paper") {
            winText.textContent = `You win! ${choice} beats ${computerChoice}!`;
            humanScore++;
    }
    else {
        winText.textContent = `You lose! ${computerChoice} beats ${choice}!`
        computerScore++;
    }

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    
    roundsPlayed++;
    playedRoundDiv.textContent = `Rounds played: ${roundsPlayed}`;

    if (roundsPlayed === 5) {
        winText.textContent = score.textContent;
        score.textContent = checkWin(humanScore, computerScore);
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
        playedRoundDiv.textContent = "5 Rounds. Game Over!";
        computerHand.src = "./images/paper.png"
    }
}

