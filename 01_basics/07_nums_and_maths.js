// Video 12: Number and Maths in Javascript


// ++++++++++++++++++++ Numbers++++++++++++++++

const score =100
console.log(score)

const samplenum = new Number(100)
console.log(samplenum)

const anothernum = samplenum.toString()
console.log(anothernum)
console.log(typeof anothernum)
console.log(anothernum.length)


//************** toFixed
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

//******** Precision

const num1 = 23.8967
console.log(num1.toPrecision(3))

const num2 = 123.8967
console.log(num2.toPrecision(3))

//************ .toLocaleString
const num3 = 1000000
console.log(num3.toLocaleString()) // US
console.log(num3.toLocaleString('en-IN')) //Indian rupee



// ++++++++++++++++++++ Maths ++++++++++++++++


//**********
console.log(Math)
// try this above on console, you will see their different properties


//**********  abs
console.log(Math.abs(-4)) // Only -ve value changes to +ve. Vice versa doesn't works
console.log(Math.abs(4)) // +ve will remain +ve

//********** round
console.log(Math.round(5.3)) // 5
console.log(Math.round(5.6)) // 6

console.log(Math.ceil(7.2)) // round off to upper value
console.log(Math.floor(7.9)) // round off to lower value

//***** 
console.log("min, max, sqrt") 
console.log(Math.min(8,6,9,4,1))
console.log(Math.max(2,3,4,6,9,5))
console.log(Math.sqrt(9))

//******
console.log(Math.random()) // gives random value between 0 to 1

console.log((Math.random()*10)+1)  // 1 isliye dala hai kyuki agar value 0.04 rhegi to we will get 0 that's why by adding one we are sure that min value we can get will be 1.

console.log(Math.floor((Math.random()*10)+1)) // will give random numbers from 1 to 10

//*** defining random values between 10 to 20

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)

//----------------------------------------------------