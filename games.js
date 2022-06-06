//const userScore = 0;
//const computerScore = 0;
//const won't let us change the scores so we use "let"
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//this is just a variable to store "dumb" HTML elements
//the "_span" tells us it's a span tag element; it's just someone
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
// We are referring to the paragraph(p) part of the div
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
//const images1_div = document.getElementById("user")
//const images2_div = document.getElementById("comp")
//purpose of these is to give everything a variable so we don't call "documentbyId" or "querySelector" everytime.


function getComputerChoice() {
 const choices = ['Rock', 'Paper', 'Scissors'];
 const randomNumber = (Math.floor(Math.random() * 3));
 return choices[randomNumber];
}
console.log(getComputerChoice());
//We want the computer to pick random numbers
//The computer picks randomly from 0 to 1 (never reaches 3), so we multiply by 3 to get a number between 0-3 (it will never reach 3)
//We 'floor' it to round down the decimals picked by the computer

function win(userChoice, computerChoice){
    //console.log("WIN");
    userScore ++;
    //console.log(userScore); we don't want to show it on the console but on the screen
    //so we will call out the span tag from the beginning of the js codes to update our span tag scores
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!🤩`; 
    //we want to form a variable below to avoid repetition:
    //userChoice_div = document.getElementById(userChoice);
    userChoice.classList.add('green-glow');
    //DsetTimeout(function() {userChoice_div.classList.remove('green-glow') }, 500);
    //we want to give a style (glows) to whatever choice the user picks, either they win, lose or draw
}

//setTimeout(function() { console.log("Hello")}, 3000)
//the above is a timer that displays "Hello" in the console after 3000 milliseconds
function lose(userChoice, computerChoice){
   // console.log("LOST");
   computerScore ++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You lost... ☹`
}

function draw(userChoice, computerChoice){
   //console.log("DRAW");
   //userScore_span.innerHTML = userScore;
   //computerScore_span.innerHTML = computerScore;
   //the last two lines are not necessary
   result_p.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw🤨`
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //console.log("user choice => " + userChoice)
 // console.log("computer choice => " + computerChoice);
 switch(userChoice + computerChoice) {
     case "RockScissors":
     case "PaperRock":
     case "ScissorsPaper":
       //console.log("USER WINS.");
       win(userChoice, computerChoice);
       break;
      // this is to show win cases. The break is there to stop the console sentence from repeating

     case "RockPaper":
     case "PaperScissors":
     case "ScissorsRock":
        // console.log("USER LOSES.");
       lose(userChoice, computerChoice);
         break;

     case "RockRock":
     case "PaperPaper":
     case "ScissorsScissors":
         //console.log("It's a draw.");
         draw(userChoice, computerChoice);
         break;    
 }

 /*How switch works: it's similar to the if statement
   switch(name);
     case "Dave":
       console.log("Hello Dave");
       break;
    case "Tos":
      console.log("Hey Tos")   
      break;
 so it's like saying "If user name is Dave, print Hello Dave" */
}

//this is to define variable "game" for user's input
//game gives room for user's choice and for any chice a user picks, there's a message in one of the divs below

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    })
    //if you call this function, it goes into the "function game(userChoice)" line and prints whatever message the function prints
    paper_div.addEventListener('click', function() {
        game("Paper");
    })
     scissors_div.addEventListener('click', function() {
       game("Scissors");
    })   
}

main();
