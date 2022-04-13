const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS"
const RESULT_COMPUTER_WINS = "COMPUTER WINS"


let gameIsRunning = false;


const getPlayerChoice = function () {
    const selection = prompt("Rock, Paper or Scissors?","").toUpperCase(); //converting all to uppercase (matching the consts)
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

function getComputerChoice (){
    const randomValue = Math.random(); //between 0 and 1
    if( randomValue < 0.34 ){
        return ROCK;
    } else if ( randomValue < 0.67 ){
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getWinner ( computerChoice, playerChoice ){
    if(computerChoice === playerChoice){
        return RESULT_DRAW;
    } else if ( (computerChoice === ROCK && playerChoice === PAPER) || 
                (computerChoice === PAPER && playerChoice === SCISSORS) ||
                (computerChoice === SCISSORS && playerChoice === ROCK) ) {
                    return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}


startGameBtn.addEventListener("click", function startAnonFunc(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerChoice)
    console.log(winner);
});