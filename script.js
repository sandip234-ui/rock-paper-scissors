let userSc = 0;
let computerSc = 0;
const result = document.querySelector('#msg');
const choices = document.querySelectorAll(".choice");
const resetGameBtn = document.querySelector('#reset-btn');
const userScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //Generate Random Number
    const randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
};
const drawGame = () => {
    result.innerText = "It's a draw!";
    result.style.backgroundColor="#1b263b";
};
const updateUScore = (us,userChoice,computerChoice) => {
    if (us) {
        userSc++;
        userScore.innerText = userSc;
        result.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        result.style.backgroundColor="green";
    }
    else {
        computerSc++;
        computerScore.innerText = computerSc;
        result.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        result.style.backgroundColor="red";
    }
};
const resetGame = () => {
     // Reset the text message
    result.innerText = "Play your move";
    result.style.backgroundColor="#1b263b";
    // Reset the score Variables
    userSc = 0;
    computerSc = 0;
    // Update the Display Score
    userScore.innerText = userSc;
    computerScore.innerText = computerSc;

    // Reload the page
    // location.reload(true);
};
const playGame = (userChoice) => {
    console.log("User Choice is", userChoice);
    //Generate Computer Choice
    const computerChoice = generateComputerChoice();
    console.log("Computer Choice is", computerChoice);
    //Check for a tie
    if (userChoice === computerChoice) {
        console.log("It's a tie");
        drawGame();
        return;
    }
    //Check for a win
    else {
        if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
            updateUScore(true,userChoice,computerChoice);
            console.log("You win!");
            return;
        }
        else {
            console.log("You lose!");
            updateUScore(false,userChoice,computerChoice);
            return;
        }
    }
};
//Reset Game Button Event Listener
resetGameBtn.addEventListener("click", () => {
    resetGame();
});
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});