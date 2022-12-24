let num1 = 10;
let num2 = 15;
operator = "-";

function calculator(n1, n2, op){
    let res;

    switch (op) {
        case "-":
            res = n1 - n2;
            break;
        case "+":
            res = n1 + n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            res = n1 / n2;
            break;    
        default:
            res  = n1 + n2;
            break;
    }
    return res;
}
//console.log(calculator(num1, num2, operator));
console.log(calculator(5, 5, "*"));
console.log(calculator(3, 7));

function sumOfTwoNumbers(n1, n2) {
    let res = n1 +n2;
    return res;
}
sumOfTwoNumbers(5, 1);

let sumOfTwoNumbers2 = function(n1, n2) {
    let res = n1 + n2;
    return res;
}
sumOfTwoNumbers2(5, 2);

let sumOfTwoNumbers3 = (n1, n2) =>  n1 + n2;
console.log(sumOfTwoNumbers3(5, 3));
