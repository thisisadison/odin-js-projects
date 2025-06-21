// step 4
let i = 0;
let humanScore = 0;
let computerScore = 0;
let humanChoice = null;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let playAgainBtn = document.querySelector("#playAgain");

// step 2

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice(){
    randChoice = getRandomInt(3);

    if ( randChoice == 0 ){
        convertComputerEmoji("🪨");
        return "rock";
    } else if ( randChoice == 1 ){
        convertComputerEmoji("🧻");
        return "paper";
    } else {
        convertComputerEmoji("✂️");
        return "scissors";
    }
};

// step 3

// function getHumanChoice(){
//     let rockBtn = document.querySelector("#rock");
//     let paperBtn = document.querySelector("#paper");
//     let scissorsBtn = document.querySelector("#scissors");
//     let choice = "";

//     rockBtn.addEventListener("click", () => {
//         choice = "rock";
//         console.log("You chose Rock.");
//     });
//     paperBtn.addEventListener("click", () => {
//         choice = "paper";
//         console.log("You chose Paper.");
//     });
//     scissorsBtn.addEventListener("click", () => {
//         choice = "scissors";
//         console.log("You chose Scissors."); 
//     });

//     return choice;
// }

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    convertHumanEmoji("🪨");
});
paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    convertHumanEmoji("🧻");
});
scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    convertHumanEmoji("✂️");
});
playAgainBtn.addEventListener("click", () => {
    humanChoice = "playAgain";
    convertHumanEmoji("🌚");
    convertComputerEmoji("🤖");
    convertDom("");
});
// step 5

function playRound(computerChoice){
    computerChoice.toLowerCase();

    if ( humanChoice == computerChoice ) {
        convertDom(`It's a tie! Both played ` + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + `.`);
    } else if ( humanChoice == "rock" ) {
        if (computerChoice == "paper"){
            convertDom("Lose. Paper beats Rock.");
            computerScore++;
        }
        else{
            convertDom("Win. Rock beats Scissors.");
            humanScore++;
        }
    } else if ( humanChoice == "paper" ) {
        if (computerChoice == "scissors"){
            convertDom("Lose. Scissors beats Paper.");
            computerScore++;
        }
        else{
            convertDom("Win. Paper beats Rock.");
            humanScore++;
        }
    } else if ( humanChoice == "scissors" ) {
        if (computerChoice == "rock"){
            convertDom("Lose. Rock beats Scissors.");
            computerScore++;
        }
        else{
            convertDom("Win. Scissors beats Paper.");
            humanScore++;
        } 
    } else {
        convertDom("Invalid choice. Please choose rock, paper, or scissors.");
    }
};

// step 6

function playGame(){
    playRound(getComputerChoice());
    updateScore();
    i++;

    if (i == 5) {

        if ( humanScore > computerScore ){
            convertDom("Congratulations! You win! Play again?");
        } else if ( humanScore < computerScore ){
            convertDom("Sorry! You lose. Play again?");
        } else {
            convertDom("It's a Draw! Play again?");
        }
    }
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    i = 0;
    updateScore();
};

function convertHumanEmoji(emoji) {
    let logSpan = document.getElementById("human-emoji");
    logSpan.textContent = emoji;
};

function convertComputerEmoji(emoji) {
    let logSpan = document.getElementById("computer-emoji");
    logSpan.textContent = emoji;
};

function convertDom(message){
    let logDiv = document.getElementById("score-text");
    logDiv.textContent = message;
};

function updateScore() {
    let score = document.getElementById("score");
    score.textContent = `${humanScore} : ${computerScore}`;
}
  
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);
playAgainBtn.addEventListener("click", resetGame);



// // step 4

// let humanScore = 0;
// let computerScore = 0;

// // step 2

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function getComputerChoice(){
//     randChoice = getRandomInt(3);

//     if ( randChoice == 0 ){
//         return "rock";
//     } else if ( randChoice == 1 ){
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

// // step 3

// function getHumanChoice(){
//     let rockBtn = document.querySelector("#rock");
//     let paperBtn = document.querySelector("#paper");
//     let scissorsBtn = document.querySelector("#scissors");
//     let choice = "";

//     rockBtn.addEventListener("click", () => {
//         choice = "rock";
//         console.log("You chose Rock.");
//     });
//     paperBtn.addEventListener("click", () => {
//         choice = "paper";
//         console.log("You chose Paper.");
//     });
//     scissorsBtn.addEventListener("click", () => {
//         choice = "scissors";
//         console.log("You chose Scissors."); 
//     });

//     return choice;
// }

// // step 5

// function playRound(humanChoice, computerChoice){
//     humanChoice.toLowerCase();
//     computerChoice.toLowerCase();

//     if ( humanChoice == computerChoice ) {
//         console.log(`It's a tie! Both played ` + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + `.`);
//     } else if ( humanChoice == "rock" ) {
//         if (computerChoice == "paper"){
//             console.log("You lose! Paper beats Rock.");
//             computerScore++;
//         }
//         else{
//             console.log("You win! Rock beats Scissors.");
//             humanScore++;
//         }
//     } else if ( humanChoice == "paper" ) {
//         if (computerChoice == "scissors"){
//             console.log("You lose! Scissors beats Paper.");
//             computerScore++;
//         }
//         else{
//             console.log("You win! Paper beats Rock.");
//             humanScore++;
//         }
//     } else if ( humanChoice == "scissors" ) {
//         if (computerChoice == "rock"){
//             console.log("You lose! Rock beats Scissors.");
//             computerScore++;
//         }
//         else{
//             console.log("You win! Scissors beats Paper.");
//             humanScore++;
//         }
//     } else {
//         console.log("Invalid choice. Please choose rock, paper, or scissors.");
//     }
// }

// // step 6

// function playGame(){
//     for ( let i=0; i<5; i++ ){
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`Round ${i+1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
//     }

//     console.log("Final Scores:");
//     console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);

//     if ( humanScore > computerScore ){
//         console.log("Congratulations! You win!");
//     } else if ( humanScore < computerScore ){
//         console.log("Sorry! You lose.");
//     } else {
//         console.log("It's a tie!");
//     }
    
//     humanScore = 0;
//     computerScore = 0;
// }

// playGame();

