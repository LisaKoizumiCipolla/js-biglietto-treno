
//Retrieve user name

let userName = (prompt ("Insert user name"))

//Retrieve user age
const passengerAge = parseInt(prompt("Insert age of passenger"));

//Retrieve travel distance
const travelDistance = parseInt(prompt("Inset how much you want to travel (in km, barbarian!)"));

 //Retrieve lottery number
const UserLotteryNumber = parseInt(prompt ("Insert your lucky number from 9 to 1, something goos might happen!"));

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

console.log(price);

//Lottery calculator
const systemLotteryNumber = Math.floor(Math.random() * (9 - 1) + 1);
console.log( systemLotteryNumber)

//Calc final price
let finalPrice = price - ((discount / 100) * price).toFixed(2);

if (UserLotteryNumber == systemLotteryNumber){
    finalPrice = 0
}

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