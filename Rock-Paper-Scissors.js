// create function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(){
    let computerSelection = ['Rock','Paper','Scissors'];
    let randomIndex = computerSelection[Math.floor(Math.random() * 3)]; 
    return randomIndex;
}
//console log the above results/

console.log (computerPlay());

//playerSelection/
let playerSelection = prompt("please choose rock, paper or scissors").toUpperCase();
console.log(playerSelection);



/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection*/
//function playRound (computerSelection, playerSelection) {
    
}


//return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"


//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
