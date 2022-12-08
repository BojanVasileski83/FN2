let myCar = {
    marke: "Ford",
    model: "Fiesta",
    year: 2012,
    color: "green"
};
console.log("MyCar Color: ", myCar.color);

let prop = "color";
myCar[prop] = "red";
console.log("MyCar new color: ", myCar.color);

prop = "forSale";
myCar[prop] = true;

console.log(`Car ${myCar.marke} ${myCar.model} ${myCar.year}`);
console.log("For sale: ", myCar.forSale ? "Yes" : "No");
