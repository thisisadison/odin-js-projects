// step 4
let i = 0;
let humanScore = 0;
let computerScore = 0;
let humanChoice = null;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

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
    convertDom("You chose Rock.");
    
})
paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    convertDom("You chose Paper.");
})
scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    convertDom("You chose Scissors.");
})

// step 5

function playRound(computerChoice){
    computerChoice.toLowerCase();

    if ( humanChoice == computerChoice ) {
        convertDom(`It's a tie! Both played ` + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + `.`);
    } else if ( humanChoice == "rock" ) {
        if (computerChoice == "paper"){
            convertDom("You lose! Paper beats Rock.");
            computerScore++;
        }
        else{
            convertDom("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if ( humanChoice == "paper" ) {
        if (computerChoice == "scissors"){
            convertDom("You lose! Scissors beats Paper.");
            computerScore++;
        }
        else{
            convertDom("You win! Paper beats Rock.");
            humanScore++;
        }
    } else if ( humanChoice == "scissors" ) {
        if (computerChoice == "rock"){
            convertDom("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else{
            convertDom("You win! Scissors beats Paper.");
            humanScore++;
        }
    } else {
        convertDom("Invalid choice. Please choose rock, paper, or scissors.");
    }
}

// step 6

function playGame(){
    playRound(getComputerChoice());
    convertDom(`Round ${i+1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    convertDom("---------------------+-------------------+--------------");
    i++;

    if (i == 5) {
        convertDom("Final Scores:");
        convertDom(`Human: ${humanScore} vs Computer: ${computerScore}`);

        if ( humanScore > computerScore ){
            convertDom("Congratulations! You win!");
        } else if ( humanScore < computerScore ){
            convertDom("Sorry! You lose.");
        } else {
            convertDom("It's a tie!");
        }
        
        humanScore = 0;
        computerScore = 0;
        i = 0;
        convertDom("---------------------+-------------------+--------------");
    }
}

function convertDom(message) {
    const logDiv = document.querySelector("#game-log");
    const div = document.createElement("div");
    div.textContent = message;
    logDiv.appendChild(div);
  }
  
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);



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

