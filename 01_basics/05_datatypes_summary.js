// Datatypes in Javascript: Video 9

// Primitive and Non Primitive (reference type)

//*******************************************/
//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Number
console.log(typeof score)
const scoreValue = 100.3 // Number
console.log(typeof scoreValue)

const isLoggedIn = false // Boolean
console.log(typeof isLoggedIn)

const outsideTemp = null 
console.log(typeof outsideTemp) // ***object

let userEmail; // undefined
console.log(typeof userEmail)

let userEmail1 = undefined // we can write in this way also

const id = Symbol('123')
console.log(typeof id)

const anotherId = Symbol('123')

console.log(id === anotherId);  // false (Symbol represents a unique identifier)

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber)



//************************************************ */

// Reference (non primitive)

// Array, Objects, Functions

const names = ["Alias", "John", "Mohan"] // Array
console.log("Datatype of names is: ",typeof names) // object
// Object: { Inside these, there can be any datatype}

let myObj = {
    name: "Aditya",
    age: 22,
}
console.log("Datatype of myObj is: ",typeof myObj)

// Function

const myFunction = function(){
    console.log("Hello World");
}
console.log("Datatype of myFunction is: ",typeof myFunction) // called as function object


// Link to typeof operator: https://262.ecma-international.org/5.1/#sec-11.4.3



//*****************************/
/* Is Javascript Dynamically typed language or Statically typed language ?

Answer: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

Example:
// Dynamically typed
let myVariable = 10; // myVariable is initially a number
console.log(myVariable); // Output: 10

myVariable = "Hello, World!"; // Now myVariable is a string
console.log(myVariable); // Output: Hello, World!

In the example above, myVariable starts as a number, and later in the program, its value is changed to a string. JavaScript allows this kind of flexibility, and the interpreter figures out the data type during runtime.
*/



//************** Video 10: Stack and Heap Memory in Javascript *******/

// Stack (Primitive), Heap (Non primitive)


//*** Stack - copy
let myYoutubename = "HiteshChoudhary"

let anotherName = myYoutubename
anotherName = "ChaiaurCode"

console.log(myYoutubename)
console.log(anotherName)

//***** Heap - reference

let userOne = {
    email:"user@gmail.com",
    upi: "abc@ybl",
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)

/*datatypes are based on memory allocation

Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it. */