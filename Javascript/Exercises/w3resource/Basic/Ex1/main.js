/*
1. Write a JavaScript program to display the 
current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
// console.log('Today is : $("Tuesday")');
let Denovi = ["Nedela", "Ponedelnik", "Vtornik", "Sreda", "Cetvrtok", "Petok", "Sabota"];

let IndexZaDen = new Date().getDay();
console.log('Denes e : ${Denovi[IndexZaDen]}');
//console.log(new Date).getDay());

let datum = new Date();
let saat = datum.getHours();
let minuti = datum.getMinutes();
let sekundi = datum.getSeconds();
let saatNov;
let amPm;
if (saat > 12)  {
    saatNov = saat - 12;
    amPm = "PM"
}   else {
    saatNov = saat;
    amPm = "AM"
}
console.log('Momentalnoto vreme e : ${saatNov} ${amPm} : ${minuti} : ${sekundi}');

