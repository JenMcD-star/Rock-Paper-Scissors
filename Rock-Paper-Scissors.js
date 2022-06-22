const rock = document.getElementById("ROCK");
const paper = document.getElementById("PAPER");
const scissors = document.getElementById("SCISSORS");
const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
const scores = document.getElementById('scores');


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

let playerScore = "0";
let computerScore = "0";

let isGameOver = (score) => {
  if (playerScore === 5 || computerScore === 5) {
    rock.setAttribute("disabled", 1);
    paper.setAttribute("disabled", 1);
    scissors.setAttribute("disabled", 1);
    return true;
    
  }
  else
  return false;
}
function playAgain (){
    playerScore = 0;
    computerScore = 0;
    rock.removeAttribute("disabled");  paper.removeAttribute("disabled");  scissors.removeAttribute("disabled");
    return document.getElementById('end').innerHTML = ''
  }

 
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alerts.innerHTML = `Tie! You both picked ${computerSelection}.`;
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
  ++computerScore;
    alerts.innerHTML = "You lose! ROCK beats SCISSORS.";
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    ++computerScore;
    alerts.innerHTML = "You lose! PAPER beats ROCK.";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
   ++computerScore;
    alerts.innerHTML = "You lose! SCISSORS beats PAPER.";
  } else {
  ++playerScore;
    alerts.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
  }
  document.getElementById('scores').innerHTML =`Player Score: ${playerScore} Computer Score: ${computerScore}`
  if ( isGameOver() ) {
  if (computerScore > playerScore){
    return document.getElementById('end').innerHTML = `Game over! You lose. <button onclick="playAgain()">Click here to play again</button>`;
}else if (playerScore > computerScore){
  return document.getElementById('end').innerHTML = `Game over! You win. <button onclick="playAgain()">Click here to play again</button>`;

}
  }
}


