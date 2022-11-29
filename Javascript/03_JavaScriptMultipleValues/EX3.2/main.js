//kreiranje na prazen arej
let shoppingList = [];
//dodavanje na vrednosti vo arejot
shoppingList.push("Milk", "Bread", "Apples");

//naogjanje na pozicijata vo vrednosta "Bread"
let indexBread = shoppingList.indexOf("Bread");
//nacin za apdejtiranje na odredena vrednost vo arej
//arr.splice(index na pozicijata kade sakame da dodademe
//          broj na elementi sto sakame da gi izbriseme
//              )
shoppingList.splice(indexOfBread, 1,"Bannanas", "Egges");
console.log(shoppingList.pop());
shoppingList.sort();
console.log(shoppingList.indexOf("Milk"));
let indexOfBanana = shoppingList.indexOf("Bananas");
shoppingList.splice(indexOfBanana + 1, 0,"Carrots", "Lettuce");
let newshoppinglist = ["Juice", "Pop"];
let combinedShoppinglist = shoppingList.concat(newshoppinglist, newshoppinglist);
console.log(lastIndexOf);
console.log(combinedShoppinglist);

