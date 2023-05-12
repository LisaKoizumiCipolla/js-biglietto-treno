
//Retrieve user name

let userName = (prompt ("Insert user name"))

//Retrieve user age
const passengerAge = parseInt(prompt("Insert age of passenger"));

//Retrieve travel distance
const travelDistance = parseInt(prompt("Inset how much you want to travel (in km, barbarian!)"));

//Starting price
let price = (travelDistance * 0.21).toFixed(2);

// Calc discount
let discount 

if ( passengerAge < 18) {
    discount = 20;
} else if (passengerAge >= 65) {
    discount = 40;
} else {
    discount = 0;
} 

console.log(price)

//Calc final price
let finalPrice = price - ((discount / 100) * price);

if (userName == "Riccardo"){
    finalPrice = price * 3;
}

console.log(finalPrice)

//Insert results on html to show result to the user

document.getElementById('user-name').innerHTML += userName

document.getElementById('passenger-age').innerHTML += passengerAge;

document.getElementById('travel-distance').innerHTML += travelDistance;

document.getElementById('discount').innerHTML += discount;

document.getElementById('final-price').innerHTML += finalPrice;