/*Zadaca 7.2*/
class fullName {
    constructor(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
    }
}

let person1 = new fullName("Ana", "Cvetkovski");
let person2 = new fullName("Natalija", "Satmenkovska");

console.log("People1 is " + person1.firstName + " " + person1.lastName + " and people2 is " + person2.firstName + " " + person2.lastName);
