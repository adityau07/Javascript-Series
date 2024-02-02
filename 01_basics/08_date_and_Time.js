// Video 13: Date and Time in Javscript
// go through it again: explore it by yourself

// Date : Date is an object in javascript. 
let myDate = new Date
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())

// We can use various methods to convert this date into more readable value.
console.log("Another methods:")
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

// *****************************************
// let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


//*********************************************

let myDate1 = new Date("2023-01-14")
console.log(myDate1)

//** Doubt: below code 
myDate1.toLocaleString('default',{
    weekday: "long",
})
console.log(myDate1)