//const userScore = 0;
//const computerScore = 0;
//const won't let us change the scores so we use "let"
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//this is just a variable to store "dumb" HTML elements
//the "_span" tells us it's a span tag element; it's just someone's way of saving variables
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
// We are referring to the paragraph(p) part of the div
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
// const showIcon = document.querySelector('.show-img'); 
// const computerShowIcon = document.querySelector('.computer img');
// const buttons = document.querySelectorAll('.choices button');
//const images1_div = document.getElementById("user")
//const images2_div = document.getElementById("comp")
//purpose of these is to give everything a variable so we don't call  "documentbyId" or "querySelector" everytime.




function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = (Math.floor(Math.random() * 3));  //the "randomNumber" will produce a number
  return choices[randomNumber]; /*the number is passed into the square bracket which turns to 
  a postional array (i.e choices[1]) to call an object in choices' array*/
 } 
 //We want the computer to pick random numbers
 //The computer picks randomly from 0 to 1 (never reaches 3), so we multiply by 3 to get a number between 0-3 (it will never reach 3)
 //We 'floor' it to round down the decimals picked by the computer

 
 function win(userChoice, computerChoice){
     //console.log("WIN");
     const userChoice_div = document.getElementById(userChoice);
     userScore ++;
     //console.log(userScore); we don't want to show it on the console but on the screen
     //so we will call out the span tag from the beginning of the js codes to update our span tag scores
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!🤩`; 
     //we want to give a style (glows) to whatever choice the user picks, either they win, lose or draw
     userChoice_div.classList.add('green-glow');  //classList is a method that exists in the DOM that gives you an array of all the classes in that element you called. e.g green-glow has like 2 elements
     setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300)
 }
 
 //setTimeout(function() { console.log("Hello")}, 3000)
 //the above is a timer that displays "Hello" in the console after 3000 milliseconds
 function lose(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
    // console.log("LOST");
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You lost... ☹`
    userChoice_div.classList.add('red-glow');  //classList is a method that exists in the DOM that gives you an array of all the classes in that element you called. e.g green-glow has like 2 elements
    setTimeout( ()=> userChoice_div.classList.remove('red-glow'), 300)
 }
 
 function draw(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
    //console.log("DRAW");
    //userScore_span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    //the last two lines are not necessary
    result_p.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw🤨`
    userChoice_div.classList.add('gray-glow');  //classList is a method that exists in the DOM that gives you an array of all the classes in that element you called. e.g green-glow has like 2 elements
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 300)
 }

 
 function game(userChoice) {
   const computerChoice = getComputerChoice();
   console.log("user choice => " + userChoice)
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
 //game gives room for user's choice and for any choice a user picks, there's a message in one of the divs below
 
 function main() {
     rock_div.addEventListener('click', (e) => {
         game("Rock"); //green glow here? 
     })
     
     paper_div.addEventListener('click', (e) => {
         game("Paper");
     })
      scissors_div.addEventListener('click', function() {
        game("Scissors");
     })   //to make rock paper scissors images active as buttons
   } //I used two ways of writing functions in main()

main(); 
 




/*const rockIcon = "rock";
const paperIcon = "paper";
const scissorsIcon = "scissors";
const choices = [rockIcon, paperIcon, scissorsIcon];

const win = ()=>{
  result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!🤩`; 
}

const lose = ()=>{
  result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You lost... ☹`
}

const tie = ()=>{
  result_p.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw🤨` 
}

// Game Functionality.
const game = () =>{
  buttons.forEach(btn =>{
      btn.addEventListener('click',(e)=>{
      // Random rock paper scissor for the computer and clicked ones for the player
         let clickedBtn = e.target.className;
         showIcon.className = clickedBtn;
         let randomNumber = Math.floor(Math.random() * choices.length);
         //let randomNum = Math.floor(Math.random() * randomClasses.length);
         computerShowIcon.className =  choices[randomNumber];;

         // If it's a Tie .
         if(showIcon.className === computerShowIcon.className){
             userScore_span.innerHTML = userScore_span.innerHTML;
             computerScore_span.innerHTML = computerScore_span.innerHTML;
             tie();
         }

         // if it's not a Tie.
         else if(showIcon.className === rock_div && computerShowIcon.className === scissorsIcon){
          //console.log(userScore); we don't want to show it on the console but on the screen
          //so we will call out the span tag from the beginning of the js codes to update our span tag scores
          userScore_span.innerHTML = userScore;
          userScore ++;
             win();
         }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
          computerScore_span.innerHTML = computerScore;
          computerScore ++;
            lose()
         }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
          computerScore_span.innerHTML = computerScore;
          computerScore ++;
             lose();
         }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
          userScore_span.innerHTML = userScore;
          userScore++
          win()
         }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
          computerScore_span.innerHTML = computerScore;
          computerScore ++;
          lose();
         }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
          userScore_span.innerHTML = userScore;
          userScore++
          win();
        }
     });
  });
}

// Run the game.
game();*/























