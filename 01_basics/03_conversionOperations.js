let score = 33
console.log(typeof score)
console.log(typeof(score)) // we can write in this way also
console.log(score)

console.log("\n")

let score1 = "33"
let valueInNumber = Number(score1) // conversion
console.log(typeof valueInNumber)
console.log(valueInNumber)

console.log("\n")

let score2 = "33abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)


// "33" => 33
// "33abc" => NaN (Not a Number)
//  true => 1; false => 0

let isLoggedIn = 1
let boolisLoggedIn = Boolean(isLoggedIn)
console.log("The type of isLoggedIn ",typeof isLoggedIn)
console.log("The value in isLoggedIN is",isLoggedIn)

console.log("\n")
// after conversion
console.log("Type of boolisLoggedIn is ", typeof boolisLoggedIn)

console.log("The value in boolisLoggedIn is",boolisLoggedIn)

// conclusion of above boolean conversion
// 1 => true; 0 => false
// "" => false
// "abc" => true 


// Number to string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber) 


//*********** Operations ***********
let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " World"
let str3 = str1+str2
console.log(str3);

 //console.log("1" + 2);
 //console.log(1 + "2");
 //console.log("1" + 2 + 2);
 //console.log(1 + 2 + "2");

 //console.log(true)  //true
 //console.log(+true) // 1
 //console.log(+" ")  // 0

 let gameCounter = 100
 gameCounter++
 console.log(gameCounter)

 let gameCounter1 = 100
 ++gameCounter1  // same output as above
 console.log(gameCounter1);

 // learn about prefix and postfix on: js mdn 
 // Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


 // link to study conversion topic:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion