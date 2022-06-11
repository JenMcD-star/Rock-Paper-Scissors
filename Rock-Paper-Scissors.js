const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
function getComputer() {
  return computerChoice[Math.floor(Math.random() * 3)];
}

function getUser() {
  let input = prompt("please enter rock, paper or scissors").toUpperCase();
  return input;
}

function playRound() {
  let computerSelection = getComputer();
  console.log(computerSelection);
  let playerSelection = getUser();
  whoWon(playerSelection, computerSelection);

}
let playerScore = "0";
let computerScore = "0";
function whoWon(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert (`Tie! You both picked ${computerSelection}.`);
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    ++computerScore;
    alert ("you lose! Rock beats scissors.");
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    ++computerScore;
    alert ("you lose! Paper beats rock.");
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    ++computerScore;
    alert("you lose! Scissors beats paper.");
  } else {
    ++playerScore;
    alert (`You win! ${playerSelection} beats ${computerSelection}`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `your score is ${playerScore}. The computer score is ${computerScore}`
    );
  }
  if ((i = 5)) {
    alert(`game over! Final score ${playerScore} to ${computerScore}`);
  }
}
playGame();
