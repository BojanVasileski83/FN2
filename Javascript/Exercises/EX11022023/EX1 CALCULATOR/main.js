function display(val) {
    document.getElementById("result").value += val;
    return val;
  }
  function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
  }
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  
  
  
  
  6:35
  let x = 10;
  let y = 20;
  let text = "x * y";
  let result = eval(text);        