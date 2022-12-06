let randomNumber = Math.random();
randomNumber = randomNumber * 10;
RandomNumber = Math.floor(randomNumber);
console.log(randomNumber);

let userInput = prompt("Ask your question")
let answer = "";
switch (randomNumber) {
    case 0:
        answer = "Yes";
break;
case 1:
        answer = "No";
break;
case 2:
        answer = "Maybe";
break;
case 3:
        answer = "Annother question";
break;
case 4:
        answer = "You are cool";
break;
case 5:
        answer = "Are you good";
break;
default:
    break;
}
console.log(userInput);
console.log(answer);
