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

const button = document.querySelector("#buttons");

button.addEventListener('click', (event) => {
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


function playRound() {
    const computerChoice = getComputerChoice();

    if (choice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (choice === "rock" && computerChoice === "scissors" || 
        choice === "paper" && computerChoice === "rock" ||
        choice === "scissors" && computerChoice === "paper") {
            console.log(`You win! ${choice} beats ${computerChoice}!`);
            humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${choice}!`)
        computerScore++;
    }

    console.log(`You: ${humanScore} \nComputer: ${computerScore}`);
    
    // checkWin(humanScore, computerScore);
}


//function playGame() {
    //for (let i = 0; i < 5; i++) {
        //playRound();
    //}
//}

//playGame();

