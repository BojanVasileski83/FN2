/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223
*/
/*let x = 32243;
let stringOfX = x.toString();
let arrayOfX = stringOfX.split("");
console.log(arrayOfX);
let reverseArrOfX = arrayOfX.reverse();
let reverseStringOfx = reverseArrOfX.join("");
let reverseX = parseInt(reverseStringOfx);
console.log(reverseX);
*/
function ReverseNumber(x) {
let stringOfX = x.toString();
let arrayOfX = stringOfX.split("");
let reverseArrOfX = arrayOfX.reverse();
let reverseStringOfx = reverseArrOfX.join("");
return parseInt(reverseStringOfx);
}
console.log(ReverseNumber(541566));
console.log(ReverseNumber(123456));
console.log(ReverseNumber(987654));
