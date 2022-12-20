//Write a JS code to print numbers from 1 to 10 in single line;

//let i = 0;
//let arry = [];
//while (i <= 10) {
//  arry.push(i);
//  i++;
//}

//console.log(`The numbers: ${arr}`);

//Write a JS code to find the number of digits in a number

// let num = 587999;

// let count = 0;

// while (num != 0) {
//   num = Math.floor(num / 10);

//   count++;
// }

//num1 = 587999;

//console.log(`The number of digits of the number: ${num1} is ${count}`);

//prints the Fibonacci series for the given range N using 
// let n1 = 0;
// let n2 = 1;
// let n3;
// let fibnum = 12;
// count = 2;

// while (count <= fibnum) {
//   n3 = n1 + n2;
//   console.log(n3);
//   n1 = n2;
//   n2 = n3;

//   count++;
// }

//-print the odd number from 1 to 100 use array to store the numbers
//let array = [];
//let i = 1;

//while (i <= 100) {
//  if (i % 2 != 0) array.push(i);
//  i++;
//}

//console.log(array);

//- Write a JS code to print numbers from given range by input

//let input1 = parseInt(prompt("Enter a first number"));
//let input2 = parseInt(prompt("Enter a second number"));
// do {
//   console.log(input1);
//   input1++;
// } while (input1 <= input2);

 // Guess a generated secret number between 1 and 10
// const MIN = 1;
// const MAX = 10;

// let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

// let guesses = 0; // for storing the number of guesses
// let hint = ""; // for storing hint
// let number = 0;
// do {
   // get input from user
//   let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

   // get the integer
//   number = parseInt(input);

   // increase the number of guesses
//   guesses++;

//   // check input number with the secret number provide hint if needed
//   if (number > secretNumber) {
//     alert("To high");
//     alert(secretNumber);
//   } else if (number < secretNumber) {
//     alert("To low");
//     alert(secretNumber);
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guess(es).`);
//   }
// } while (number != secretNumber);

//Make a loop of two numbers and print the sum of them;

// for (i = 0; i < 10; i++) {
//   for (j = 0; j < 9; j++) {
//     console.log(`The sum of ${i} and ${j} is: ${i + j}`);
//   }
// }

//Write a JS code to print Even numbers in given array

// let array = [1, 2, 6, 7, 9];

// for (i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//   }
// }

// -Make a product of two arrays of the same size using for loop.

// let arr1 = [2, 4, 6, 7, 8];

// let arr2 = [4, 6, 1, 5, 0];

// let product = [];

// for (i = 0; i < arr1.length; i++) {
//   product[i] = arr1[i] * arr2[i];

//   console.log(` The product of ${arr1[i]} and ${arr2[i]} is: ${product[i]}`);
// }

// Write a JS code to find the largest number in an array

// let array = [1, 2, 70, 3, 10, 5, 0];

// let largest = 0;

// for (i = 0; i < array.length; i++) {
//   if (array[i] > largest) {
//     largest = array[i];
//   }
// }
// console.log(largest);

// let array = [1, 2, 70, 3, 10, 5, 0];
// let minnumber = array[0];

// for (i = 0; i < array.length; i++) {
//   if (array[i] < minnumber) {
//     minnumber = array[i];
//   }
// }

// console.log(minnumber);

// -Write a JS code to count all letters in a word

//  Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
// for (var i = 1; i <= 45; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   }
// }

// List the all elements from the array cars =[BMW,AUDI,FIAT, MECEDES, LAMBURGINI,TESLA];
// cars = ["BMW", "AUDI", "FIAT", "MECEDES", "LAMBURGINI", "TESLA"];

// for (x of cars) {
//   console.log(x);
// }

// 5.The for in Loop

// List the property from the following object:
// Restaurant = {
//   Name: "REMO",
//   Cake: "CheeseCake",
//   Ingidients: ["Cream Chese", "Sugar", "Vanila Extract"],
// };

// for (elements in Restaurant) {
//   console.log(elements);
// }

//List the ingridients

// for (elements in Restaurant.Ingidients) {
//   console.log(Restaurant.Ingidients[elements]);
// }

   