function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        return "rock";
    } 
    else if (randNum > 0.33 && randNum < 0.66) {
        return "paper";
    } 
    else if (randNum >= 0.66) {
        return "scissors";
    }
}

function checkWin(score1, score2) {
    if (score1 > score2) {
    console.log("You win!");
    } 
    else if (score1 < score2) {
    console.log("Game Over. You lose!");
    }
    else {
    console.log("Nobody wins. It's a tie.");
    }   
}

let humanScore = 0;
let computerScore = 0;
let choice;

const hands = document.querySelector("#buttons");

hands.addEventListener('click', (event) => {
    event.stopPropagation();
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

const score = document.querySelector("#score");

const winText =document.querySelector("#winText");



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
    
    // checkWin(humanScore, computerScore);
}


//function playGame() {
    //for (let i = 0; i < 5; i++) {
        //playRound();
    //}
//}

//playGame();

