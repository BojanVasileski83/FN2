let randomNumber = 1000;
console.log("First assigment " + randomNumber);
randomNumber = Math.random();
console.log("Second assigment " + randomNumber);
//randomNumber = randomNumber * 11;
randomNumber *= 11;
console.log("Third assigment " + randomNumber);
randomNumber = Math.floor(randomNumber);
console.log("Fourth assigment " + randomNumber);

let userInput = prompt("Enter a number between 0 and 10");
console.log("User input " + userInput + " type of: " + typeof userInput);
let userNumber = Number(userInput);
console.log("User number " + userNumber + " type of: " + typeof userNumber);
let userNumber2 = parseInt(userInput);
console.log("User number 2 " + userNumber2 + " type of: " + typeof userNumber2);

if (userNumber > randomNumber)  {
    console.log("Your number is greater then the random number");
} else if (userNumber < randomNumber) {
    console.log("Your number is smaller then the random number");
} else  {console.log("Your guessed the number!!!");
}

//ili drug nacin
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
let userInput = parseInt(prmpt("Enter number between o and 10"));

let messege = 
userInput > randomNumber ? 
"Your number is greater then the random number" : userInput < randomNumber ? 
"Your number is smaller then the random number" : "Your guessed the number!!!";
console.log(messege);