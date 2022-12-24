/*
function FizzBuzz(n) {
    if (n%3==0 && n%5==0) {
        console.log("FizzBuzz");
    } else if (n%3==0) {
        
        console.log("Buzz");
    } else if(n%5==0){

        console.log("Fizz");
    }
}
FizzBuzz(45);
*/

// 1. Write a JavaScript function to print the “Hello World” message

// function helloWorld() {
//   console.log("Hello World");
// }

// helloWorld();

//2. Write a JavaScript function to print the “Hello and your name” message

// function helloName(name) {
//   console.log("Hello " + name);
// }

// helloName("Ljupcho");

// 3. Write a function that returns the square of a number

// function sqr(num) {
//   console.log(num * num);
// }

// sqr(2);

// 4. Write a function to convert Celsius to Fahrenheit

// // formula (Celsius × 9/5) + 32 = Fahrenheit`
// function convert(cel) {
//   return console.log((cel * 9) / 5 + 32);
// }

// convert(35);

// 5. Write a function to find the area of a given Rectangle

// function area(a, b) {
//   return console.log("The area of recnatgcle is:" + a * b);
// }

// area(5, 2);

// 6. Write a function to find the area and perimeter of a Circle
 function circleValues(rad) {
   return console.log(
     `Perimeter: ${2 * Math.PI * rad}, Area: ${Math.PI * rad * rad}`
   );
 }

 circleValues(4);

// 7. Write a function to calculate simple interest based on the principle amount

// 8. Write a function to generate a random number

// function genRandom(start, end) {
//   return Math.floor(Math.random() * end) + start;
// }

// console.log(genRandom(1, 6));
//Create Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator..
// function printEven(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]); //print even number
//     }
//   }
// }
// let arr1 = [13, 23, 12, 45, 22, 48, 66, 100];
// printEven(arr1);

//10.Write a JS code to calculate the sum of digits in a number
// function digitSum(num) {
//   let sum = 0;
//   while (num != 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(digitSum(4367));

//11. Write a JS code to print the Fibonacci series for a given value of N

// function fibonacci(n) {
//   let n1 = 0;
//   let n2 = 1;
//   let count = 2;
//   let n3;
//   console.log(n1);
//   console.log(n2);
//   while (count < n) {
//     n3 = n1 + n2;
//     console.log(n3); //print current element
//     n1 = n2;
//     n2 = n3;
//     count++;
//   }
// }

// n1 = parseInt(prompt("enter a numer"));

// fibonacci(n1);

//12.Create Function to find Longest Country Name of an array ["Australia", "Germany", "United States of America"]

// let arr = ["Australia", "Germany", "United States of America"];

// function Longest_Country_Name(arr) {
//   let long = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (long.length < element.length) {
//       long = element;
//     }
//   }
//   return long;
// }

//  console.log(Longest_Country_Name(arr));

// 13. Write a JavaScript program to check from three given integers
// that whether a number is greater than or equal to 20 and less than one of the others.

// function lessby20_others(x, y, z) {
//   return (
//     (x >= 20 && (x < y || x < z)) ||
//     (y >= 20 && (y < x || y < z)) ||
//     (z >= 20 && (z < y || z < x))
//   );
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));

// function lessBy(x, y, z) {
//   if (
//     (x >= 20 && (x < y || x < z)) ||
//     (y >= 20 && (y < x || y < z)) ||
//     (x >= 20 && (z < x || z < y))
//   ) {
//     console.log("Tochen e uslovot");
//   } else {
//     console.log("Ne e izvrshen uslovot");
//   }
// }

// lessBy(23, 45, 10);

//function converter(dolar) {
//  return alert("Toa se evra: " + dolar * 0.95);
//}

//input = prompt("Vnesi dolari");

//converter(input);