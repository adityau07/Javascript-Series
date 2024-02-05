// Video 16: Objects in Javacsript

// There are two ways of declaring object: literal and constructor

// singleton
// Object.create   (constructor)

// object literals

const mySym1 = Symbol("key 1")

const mySym2 = Symbol("Key 2")

const JsUser = {
    name: "Hitesh",
    "Full Name": "Hitesh Choudhary",
    mySym1: "Key 1",
    [mySym2]: "Key 2",
    age: 18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["Full Name"])  // we cannot access this using "." as in line no 20, hence we should use "[]" brackets for such cases as specified in line 21

console.log(JsUser.mySym1)

console.log(typeof JsUser.mySym1) // here datatype will not be symbol, it will be string

// that means mySym is not used as Symbol

// if we want to use mySym as symbol we want to specify it in square brackets in object: [mySym]

console.log(JsUser[mySym2])
console.log(typeof JsUser[mySym2]) // here it will be string only


// changing the value of items in object:
// Eg: chaning the mail: 

JsUser.email = "HiteshChoudhary@gmail.com"
console.log(JsUser["email"])

// if we want that no one can change the value of items in the object then we will use freeze

Object.freeze(JsUser)
JsUser.email = "abc@gail.com" // now this change will not be updated as we have freeze the object
console.log(JsUser)


//***************

const user4 = {
    name: "abc",
    age: 18,
    email4: "abc@gmail.com" ,
}

user4.greeting = function(){
    console.log("Hello JS User");
}

console.log(user4.greeting)
console.log(user4.greeting())


//*********** 
user4.greetingtwo = function(){
    console.log(`Hello user4, ${this.name}`)
}

console.log(user4.greetingtwo())