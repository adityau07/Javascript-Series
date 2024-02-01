// Strings: Video 11

const name = "Hitesh"
const repoCount = 4

// console.log(name+repoCount+" abc") // we should not use this way

// string interpolation: 
// "`": this sign is called backtick
console.log(`My name is ${name} and my repo count is ${repoCount}`)

// another way of declaring a string
const gameName = new String('hitesh-hc')

console.log(gameName[0])  // H

console.log(gameName.__proto__)

//*********
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt('2'))  //t
console.log(gameName.indexOf('t'))  //2

//*********
const newString = gameName.substring(0,4) // it will go from:index 0 to 3   ** In substring we annot give negative index
console.log(newString)

//*********
const anotherString = gameName.slice(-8,4) // here we can give negative index
console.log(anotherString);

//*********
const newStringOne = "      Hitesh    "
console.log(newStringOne) // it will print the space 
console.log(newStringOne.trim())  // it will not print the space 

//*********
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))

//***  splitting the string into array based on dash

const sampleString = "Atmaram-Tukaram-Bhide"
console.log(sampleString.split('-'))

// Explore more string methods in javascript from mdn