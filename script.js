const handsContainer = document.querySelector(".buttons");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hand");

const playedRoundDiv = document.querySelector(".rounds-played");
const winText = document.querySelector(".win-text");
const score = document.querySelector(".score");

const restartButton = document.querySelector(".restart-button");
const restartButtonImage = document.createElement("img");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 5;
let restartMenu = false;
let choice;


function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        computerHand.src = "./images/rock.png";
        return "Rock";
    } 
    else if (randNum > 0.33 && randNum < 0.66) {
        computerHand.src = "./images/paper.png";
        return "Paper";
    } 
    else if (randNum >= 0.66) {
        computerHand.src = "./images/scissors.png";
        return "Scissors";
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

function playRound() {
    const computerChoice = getComputerChoice();

    if (choice === computerChoice) {
        winText.textContent = "It's a tie!";
    }
    else if (choice === "Rock" && computerChoice === "Scissors" || 
        choice === "Paper" && computerChoice === "Rock" ||
        choice === "Scissors" && computerChoice === "Paper") {
            winText.textContent = `You win! ${choice} beats ${computerChoice}!`;
            humanScore++;
    }
    else {
        winText.textContent = `You lose! ${computerChoice} beats ${choice}!`
        computerScore++;
    }

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    
    roundsPlayed--;
    playedRoundDiv.textContent = `Rounds left: ${roundsPlayed}`;

    if (roundsPlayed === 0) {
        restartMenu = true;

        winText.textContent = "Play Again?";
        playedRoundDiv.textContent = score.textContent;
        score.textContent = checkWin(humanScore, computerScore);

        hands.forEach(hand => hand.style.pointerEvents = "none");

        restartButton.appendChild(restartButtonImage);
    }

}


handsContainer.addEventListener('click', (event) => {
    if (restartMenu) {
        return;
    }

    let target = event.target;

    if (target.classList.contains("rock")) {
            choice = "Rock";

    }
    else if (target.classList.contains("paper")) {
            choice = "Paper";

    }
    else if (target.classList.contains("scissors")) {
            choice = "Scissors";
    }

    playRound();
    
})

restartButtonImage.addEventListener('click', () => {
    roundsPlayed = 5;
    humanScore = 0;
    computerScore = 0;

    playedRoundDiv.textContent = "";
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    winText.textContent = "Best of 5";

    hands.forEach(hand => hand.style.pointerEvents = "auto");

    restartMenu = false;
    restartButton.removeChild(restartButtonImage);
})