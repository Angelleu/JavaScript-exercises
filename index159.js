/*Create a new index159.js
Define a jeep variable and assign a literal object

Add the object a brand property and assign the following string value: Jeep Wrangler

Add the object a price property and assign the following numeric value: 34000

Show the following message as output using object dynamic properties (use variables or string literals)*/

//The %brand% is $ %price%
const jeep={
    brand:'Jeep Wrangler',
    price:34000,

}
console.log(`This ${jeep['brand']} is ${jeep['price']}`);