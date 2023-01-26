class Person {
    constructor(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
    }
}

let friend1 = new Person("Boban", "Srezovski");
let friend2 = new Person("Bojan", "Vasileski");

//console.log("Hi" + " " + friend1.firstName + " " + friend1.lastName);
//console.log("Hi" + " " + friend2.firstName + " " + friend2.lastName);

function sayHi(person) {
    console.log("Hi" + " " + person.firstName + " " + person.lastName);
}
sayHi(friend1);
sayHi(friend2);

class PersonMethods {
    constructor(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
    }

    greet() {
        console.log("Hi there! I am " + this.firstName);
    }

    compliment(name, object) {
        return "That's a wonderfull " + object + "," + name;
    }
}

let ana = new PersonMethods("Ana", "Cvetkovski");
let nate = new PersonMethods("Natalija", "Satmenkovska");


ana.greet();
nate.greet();

let anaCompliment = ana.compliment(nate.firstName, "dress");
console.log(anaCompliment);