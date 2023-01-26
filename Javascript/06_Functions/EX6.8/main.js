let functionVariable = function(logValue) {
    console.log(logValue);
}

functionVariable("Bojan");


functionVariableNormal = function(logValue) {
    console.log(logValue);
}

functionVariableNormal("Milkica");


function doFlexibleStuff(executeStuff) {
    executeStuff("Bojan Vasileski");
    console.log("Inside doFlexibleStuff Function");
}

doFlexibleStuff(functionVariable);

let logName = function () {
    console.log("My name is Bojan");
}
setTimeout(logName, 1000);

setInterval(() => console.log(new Date().getHours().toString(),
":", new Date().getMinutes().toString(), ":", 
new Date().getSeconds().toString()), 1000);
