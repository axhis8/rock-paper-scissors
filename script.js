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

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 5;
let restartMenu = false;
let choice;

const handsContainer = document.querySelector(".buttons");
const hands = document.querySelectorAll(".hand");

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

const computerHand = document.querySelector(".computer-hand");

const score = document.querySelector(".score");

const winText = document.querySelector(".win-text");

const playedRoundDiv = document.querySelector(".rounds-played");

const restartButton = document.querySelector(".restart-button");

const restartButtonImage = document.createElement("img");
restartButtonImage.src = "./images/restartButton.png";
restartButtonImage.style = "width: 240px; margin-right: 180px; cursor: pointer; transition: 0.2s;";

restartButtonImage.addEventListener('mouseenter', () => {
    if (restartMenu) {
    restartButtonImage.style.transform = "scale(1.1)";
    }
})

restartButtonImage.addEventListener('mouseleave', () => {
    if (restartMenu) {
    restartButtonImage.style.transform = "scale(1)";
    }
})

restartButtonImage.addEventListener('mousedown', () => {
    if (restartMenu) {
    restartButtonImage.style.transform = "scale(0.9)";
    }
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
    restartButtonImage.style.transform = "scale(1)";
    restartButton.removeChild(restartButtonImage);
})


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