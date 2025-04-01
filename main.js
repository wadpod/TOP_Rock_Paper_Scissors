console.log("hello frome external js file");

function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 0.34) {
        computerChoice = "rock";
    } else if (randomNumber <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let userChoice = "rock";
    userChoice = prompt("What is your choice?").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        return "invalid";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human wins";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human wins";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human wins";
    } else {
        return "computer wins";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "human wins") {
            humanScore++;
            console.log("You win! " + humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1) + " beats " + computerSelection + ". Human score: " + humanScore + ". Computer score: " + computerScore);
        } else if (roundResult === "computer wins") {
            computerScore++;
            console.log("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + humanSelection + ". Human score: " + humanScore + ". Computer score: " + computerScore);
        } else {
            console.log("It's a tie! Human score: " + humanScore + ". Computer score: " + computerScore);
        }
    }

    if (humanScore > computerScore) {
        console.log("You win the game! Human score: " + humanScore + ". Computer score: " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose the game! Human score: " + humanScore + ". Computer score: " + computerScore);
    } else {
        console.log("It's a tie! Human score: " + humanScore + ". Computer score: " + computerScore);
    }
}

playGame();

