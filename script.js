// console.log("Hello World!");

// function to get the compter choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log(getComputerChoice());

// function to get human choice
function getHumanChoice() {
  return prompt("rock, paper, scissors? ");
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    console.log("Its a tie 🪢 each get 1 point");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!, Computer Looose");
    humanScore++;
  } else {
    console.log("You loose, Computer wins!");
    computerScore++;
  }
}

function PlayGame() {
  let numberOfRounds = 5;

  while (numberOfRounds > 0) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Player Score ${humanScore}: Computer Score ${computerScore}`);
    numberOfRounds--;
  }
}

PlayGame();
