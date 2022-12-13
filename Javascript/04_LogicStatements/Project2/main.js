let choices = ["rock", "paper", "scissors"];

let computerChoise = Math.floor(Math.random() * 3);
let playerChoise = Math.floor(Math.random() * 3);

let showChoise = choices[computerChoise];
console.log("computer choise: " + showChoise);

showChoise = choices[playerChoise];
console.log("player choise: " + showChoise);

if (choices[computerChoise] === choices[playerChoise]) {
    console.log("It's a tie!!!");
} else if (choices[computerChoise] === "rock" && choices[playerChoise] === "paper")  {
    console.log("Player Wins!!!");
} else if (choices[computerChoise] === "paper" && choices[playerChoise] === "scissors")  {
    console.log("Player Wins!!!");
} else if (choices[computerChoise] === "scissors" && choices[playerChoise] === "rock")  {
    console.log("Player Wins!!!");
} else if (choices[playerChoise] === "rock" && choices[computerChoise] === "paper")  {
    console.log("Computer Wins!!!");
} else if (choices[playerChoise] === "paper" && choices[computerChoise] === "scissors")  {
    console.log("Computer Wins!!!");
} else if (choices[playerChoise] === "scissors" && choices[computerChoise] === "rock")  {
    console.log("Computer Wins!!!");
}

// Vtor nacin
let message = "";
switch (choices[computerChoise]) {
   case "rock":
      if (choices[playerChoise] === "rock") {
         message = "It's a tie!!!";
      } else if (choices[playerChoise] === "paper") {
         message = "Player Wins!!!";
      } else {
         message = "Computer Wins!!!";
      }
      break;
   case "paper":
      if (choices[playerChoise] === "paper") {
         message = "It's a tie!!!";
      } else if (choices[playerChoise] === "scissors") {
         message = "Player Wins!!!";
      } else {
         message = "Computer Wins!!!";
      }
      break;
   case "scissors":
      if (choices[playerChoise] === "scissors") {
         message = "It's a tie!!!";
      } else if (choices[playerChoise] === "rock") {
         message = "Player Wins!!!";
      } else {
         message = "Computer Wins!!!";
      }
      break;
   default:
      break;
}

console.log(message + "(switchStatment)");

// Tret nacin

//let choices = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random() * 3);
let player =Number( prompt("choose coresponding number: 0-rock, 1-paper, 2-scissors"));
console.log("random choice: " + choices[random]);
console.log("your choice: " + choices[player]);
// 0 > 2 > 1 > 0
if(player === random){
    console.log("Tie");
}else if((player === 0) && (random === 2)){
    console.log("player won!");
}else if((random === 0) && (player ===2)){
    console.log("player lost!");
}else if(player > random){
    console.log("player won!");
} else{
    console.log("player lost!");
}
