let descriptArr = ["Strong", "Smart", "Fast", "Beautiful"];
function askName(){

    let name = prompt("Whats your name?");

    let randomNumber = Math.floor(Math.random()) * descriptArr.length;

    console.log(name + " is " + descriptArr[randomNumber]);
}
askName();