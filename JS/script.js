
const passengerAge = parseInt(prompt("Insert age of passenger"));

const travelDistance = parseInt(prompt("Inset how much you want to travel (in km, barbarian!)"));

let price = (travelDistance * 0.21).toFixed(2);

let discount 

if ( passengerAge < 18) {
    discount = 20;
} else if (passengerAge >= 65) {
    discount = 40;
} else {
    discount = 0;
} 

console.log(price)

let finalPrice = price - ((discount / 100) * price);

console.log(finalPrice)



document.getElementById('passenger-age').innerHTML += passengerAge;

document.getElementById('travel-distance').innerHTML += travelDistance;

document.getElementById('discount').innerHTML += discount;

document.getElementById('final-price').innerHTML += finalPrice;