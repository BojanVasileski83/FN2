/*1. Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/

function is_array(arr) {
    let is_array = false;

    if (Array.isArray(arr)) {
        is_array = true;
    }
    return is_array;
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));