function computerPlay(){
    let computerSelection = ['ROCK','PAPER','SCISSORS'];
    let randomIndex = computerSelection[Math.floor(Math.random() * 3)]; 
    return randomIndex;
}
console.log (computerPlay());


let computerSelection = (computerPlay());


let playerSelection = prompt("please choose rock, paper or scissors").toUpperCase();
console.log(playerSelection);



function playRound (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
    alert(`tie! You both picked ${computerSelection}.`);
     return ("0");
} else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS'){
    alert("you lose! Rock beats scissors.");
    return ("-1");
} else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
    alert("you lose! Paper beats rock.");
    return ("-1");
} else if (computerSelection === 'SCISSORS' && playerSelection=== 'PAPER') {
    alert("you lose! Scissors beats paper.");
    return ("-1");
}else{    
    alert(`you win! ${playerSelection} beats ${computerSelection}!`);
    return ("1");

}
    }

playRound(computerSelection, playerSelection);



function game () {
    let playerScore = '0';
    let computerScore = '0';
    let roundResult = playRound(computerSelection, playerSelection);

    for (let counter = 0; counter <=5; ++counter) {
        playRound();
    if (roundResult === "1") {
         ++playerScore;
    }else if (roundResult=== "-1"){
        ++computerScore;
    }else {
        return ('Tie.');
    }
}
console.log(playerScore, computerScore);
}
