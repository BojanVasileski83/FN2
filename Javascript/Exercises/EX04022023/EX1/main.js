//1.1 Encode URL using encodeURI() function example
// let uri = "https://javaguides.net/?x=шеллы";

// let encoded = encodeURI(uri);

// console.log(encoded);​
// try {
//   let decode = decodeURI(encoded);
//   console.log(decode);
// } catch (e) {
//   console.error(e);
// }

//1.2 Encode URL Component using encodeURIComponent() function
// var uri = "https://javaguides.net/my test.html?name=ram&age29";
// console.log("before encode :: " + uri);
// var encode = encodeURIComponent(uri);
// console.log("after encode :: " + encode);

// var decode = decodeURIComponent(encode);
// console.log("after decode :: " + decode);

//2.1 ParseInt

// let x = "100";

// let y = parseInt(x);

// let z = y * 2;
// console.log(z);

//2.2	ParseFloat

// let x = "82.5";

// let y = parseFloat(x);

// console.log(typeof y, typeof x);

// 3.1 defining an aray
var fruits = ["Apple", "Bananna", "Grape"];

// filling eveey element of the array with "Cherry"

fruits.fill("Cherry");

console.log(fruits);

//output
//["Cherry", "Cherry", "Cherry"];

//3.2 Java script array join
let message = ["JavaScript", "is", "fun."];
//join all elements of array using space
let joinMessage = message.join(" ");
console.log(joinMessage);
//Output: JvaScript id fun.

//3.3 Java script array cocncat
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]
//join two arrays
let joinedArrays = primeMumbers.concat(evenNumbers);
console.log(joinedArrays);
/*Output:
[2, 3, 5, 7,
2, 4, 6, 8
]
*/

//3.4 Java script array find()
let numbers = [1, 3, 4, 9, 8];
//function to chek even number
function isEven(element) {
    return element % 2 == 0;
}
//get the firs even numbers
let evenNumber = numbers.fund(isEven);
console.log(evenNumber);
//Output: 4

//3.5 Java script array map()
let numbers = [2, 4, 6, 8, 10];
//function to return the square of the number
function square(number) {
    return number * number;
}

//apply square() function to each item of the numbers list
let  square_numbers = numbers.map(square);
console.log(square_numbers);

//Output: [4, 16, 36, 64, 100 ]

//3.3 Java script array forEach
let numbers = [1, 3, 4, 9, 8];
//function to complete square of each number
function computeSquare(elemnet) {
    console.log(element * element);
}

//compute square root of each element
numbers.forEach(computeSquare);
//Output:
1
9
16
81
64
*/

//4.1 JavaScript Math.min()
//min() with negative numbers
let numbers1 = Math.min(-1, -11, -132);
console.log(numbers1); 

//min() with positive numbers
let numbers2 = Math.min(0.465, 135, 500);
console.log(numbers2);
//Output:
//-132
//0.465

//4.2 Math.min() with Arrays
let numbers = [4, 1, 2, 55, 9];

//min() with a sparred operator
let minMum = Math.min(...numbers);
console.log(minNum);
//Output: 1

//4.3 Math.max()
//max() with negative numbers
let numbers1 = Math.max(-1, -11, -132);
console.log(numbers1);
//max() with positive numbers
let numbers2 = Math.max(0.456, 135, 500);
console.log(numbers2);
//Output: 
//-1
// 500

//4.4 Math.max() with Arrays
let numbers = [4, 1, 2, 55, 9];
//max() with a spared operator
let maxNum = Math.max(...numbers);
console.log(maxNum);
//Output: 55

//4. Format the date
//program to format the date
//get current date
let currentDate = newDate();

//get the day from the date
let day = currentDate.getDate();

//get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

//get the year from the date
let year = currentDate.getFullYear();

//if day is less than 10, and 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}

//if month is less than 10, and 0 
if (month < 10) {
    month = '0' + month;
}

// //4.1 JavaScript Math.min()
// // min() with negative numbers
// let numbers1 = Math.min(-1, -11, -132);
// console.log(numbers1);

// // min() with positive numbers
// let numbers2 = Math.min(0.456, 135, 500);
// console.log(numbers2);

// // Output:
// // -132
// // 0.456

// //4.2 Math.min() with Arrays

// let numbers = [4, 1, 2, 55, 9];

// // min() with a spread operator
// let minNum = Math.min(...numbers);
// console.log(minNum);

// // Output: 1

// //4.3  Math max()
// // max() with negative numbers
// let numbers1 = Math.max(-1, -11, -132);
// console.log(numbers1);

// // max() with positive numbers
// let numbers2 = Math.max(0.456, 135, 500);
// console.log(numbers2);

// // Output:
// // -1
// // 500
// //4.4  Math.max() with Arrays

// let numbers = [4, 1, 2, 55, 9];

// // max() with a spread operator
// let maxNum = Math.max(...numbers);
// console.log(maxNum);

// // Output: 55

//Date
// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

// get the year from the date
let year = currentDate.getFullYear();

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
  day = "0" + day;
}

// if month is less than 10, add 0
if (month < 10) {
  month = "0" + month;
}

// display in various formats
const formattedDate1 = month + "/" + day + "/" + year;
console.log(formattedDate1);

const formattedDate2 = month + "-" + day + "-" + year;
console.log(formattedDate2);

const formattedDate3 = day + "-" + month + "-" + year;
console.log(formattedDate3);

const formattedDate4 = day + "/" + month + "/" + year;
console.log(formattedDate4);

