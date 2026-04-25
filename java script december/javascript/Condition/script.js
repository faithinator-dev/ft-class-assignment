// let drink = prompt('Which drink do you want to buy?');

// if (drink == 'Fanta') {
//     console.log('Buy 5');
// }

// else if (drink == 'Cocacola') {
//     console.log('Buy 4');
// }

// else {
//     console.log('Do not buy it, Come back home');
// }

let shop = "Faith store";
let store = "Drinks";
let buy = "";
let fantaAmount = 200;
let numOfFanta = 10;
let pepsiAmount = 150;
let numOfPepsi = 20;

alert("Welcome to faith store");
// let drink = prompt("Enter the drink you want to buy")
function drinkBtn() {
  const drink = beverage.value;

  if (drink == "fanta" || drink == "Fanta" || "FANTA") {
    buy = Number(prompt("How many did you want to buy"));
    if (buy == "" || buy >= 11) {
      alert("invalid Number or out of stock");
    } else {
      total = buy * fantaAmount;
      alert("The total price is #" + total);
    }
  } else if (drink == "Pepsi" || drink == "pepsi" || drink == "PEPSI") {
    buy = Number(prompt("How many did you want to buy"));
    if (buy == "" || buy >= 21) {
      alert("invalid Number or Out of stock");
    } else {
      total = buy * cocacolaAmount;
      alert("The total price is #" + total);
    }
  } else {
    alert("We don't have that");
  }
}
