// step 4

let humanScore = 0;
let computerScore = 0;

// step 2

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    randChoice = getRandomInt(3);

    if ( randChoice == 0 ){
        return "rock";
    } else if ( randChoice == 1 ){
        return "paper";
    } else {
        return "scissors";
    }
}

// step 3

function getHumanChoice(){
    let choice = prompt("Enter your move:");
    return choice;
}

// step 5

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    if ( humanChoice == computerChoice ) {
        console.log(`It's a tie! Both played ` + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + `.`);
    } else if ( humanChoice == "rock" ) {
        if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else{
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if ( humanChoice == "paper" ) {
        if (computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
        else{
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
    } else if ( humanChoice == "scissors" ) {
        if (computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else{
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
}

// step 6

function playGame(){
    for ( let i=0; i<5; i++ ){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Round ${i+1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    console.log("Final Scores:");
    console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);

    if ( humanScore > computerScore ){
        console.log("Congratulations! You win!");
    } else if ( humanScore < computerScore ){
        console.log("Sorry! You lose.");
    } else {
        console.log("It's a tie!");
    }
    
    humanScore = 0;
    computerScore = 0;
}

playGame();