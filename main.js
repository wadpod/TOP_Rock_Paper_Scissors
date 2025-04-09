// Game state
let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
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

function updateScore(result) {
    if (result === "human wins") {
        playerScore++;
    } else if (result === "computer wins") {
        computerScore++;
    }
    
    document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    
    if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        endGame();
    }
}

function updateResult(result, humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    let message = '';
    
    if (result === "human wins") {
        message = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else if (result === "computer wins") {
        message = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    } else {
        message = "It's a tie!";
    }
    
    resultDiv.textContent = message;
    console.log(message);
}

function endGame() {
    const gameOverDiv = document.getElementById('game-over');
    const buttons = document.querySelectorAll('.buttons button');
    
    // Disable buttons
    buttons.forEach(button => button.disabled = true);
    
    // Announce winner
    if (playerScore > computerScore) {
        gameOverDiv.textContent = "Game Over! You win the game!";
    } else {
        gameOverDiv.textContent = "Game Over! Computer wins the game!";
    }
}

function playRoundWithChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateResult(result, humanChoice, computerChoice);
    updateScore(result);
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRoundWithChoice('rock'));
document.getElementById('paper').addEventListener('click', () => playRoundWithChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => playRoundWithChoice('scissors'));

