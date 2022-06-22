const rock = document.getElementById("ROCK");
const paper = document.getElementById("PAPER");
const scissors = document.getElementById("SCISSORS");
const computerChoice = ["ROCK", "PAPER", "SCISSORS"];


function getComputer() {
  return computerChoice[Math.floor(Math.random() * 3)];
}


rock.addEventListener('click', function() {
  let computerSelection = getComputer();
  console.log(computerSelection);
  playRound("ROCK", computerSelection)
});

paper.addEventListener('click', function(){
let computerSelection = getComputer();
  console.log(computerSelection);
playRound("PAPER", computerSelection)
})

scissors.addEventListener('click', function(){
  let computerSelection = getComputer();
  console.log(computerSelection);
  playRound("SCISSORS", computerSelection)
})


function playRound(playerSelection, computerSelection) {
let playerScore = "0";
let computerScore = "0";
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

