// Video 29: High Order Array Loops

// for of loop

let myArr = [1,2,3,4,5]

for (const num of myArr) {
    //console.log(num)
}

//***********

const greetings = "Hello World"

for (const greet of greetings) {
    //console.log(`Each char is: ${greet}`)
}

//*************************** 
//Maps
const states = new Map()
states.set('IN', "India")
states.set('USA', "Unites States of America")
states.set('FR', "France")
states.set('IN', "India") // No repition, only unique values

//console.log(states) // Printing map elements directly

// Printing map elemnts using for of
for (const key of states) {
    //console.log(key)
}
for (const [key,value] of states) {
    //console.log(key,':-',value)
}


//*************************** 

const myObject={
    js:"Javascript",
    cpp:"c++",
    rb:"rubby",
    py:"Python"
}

for (const key in myObject) {
    //console.log(key)
}
for (const key in myObject) {
    //console.log(myObject[key])
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

//*************************** 
// "for in" loop: array

const programming = ['c++','python','javascript','java']

for (const key in programming) {
    //console.log(key) // it will return the index
    //console.log(programming[key]) // it will return the values in array
}

//*************************** 
// foreach

const samplearr = ["dbms","cns","oops",]

samplearr.forEach( function (val){
    //console.log(val)
})

//*************************** 
// for each: arrow function

samplearr.forEach((item)=>{
    //console.log(item)
})

function printMe(item){
    //console.log(item);
}

//samplearr.forEach(printMe)

//
samplearr.forEach((item,index,samplearr)=>{
    //console.log(item,index,samplearr)
})

//********************************************

const myCoding = [
    {
     name: "Java",
     filename:".java",
    },
    {
     name: "C++",
     filename:".cpp",
    },
    {
     name: "Python",
     filename:".py",
    }]

myCoding.forEach((item)=>{
    console.log(item.name)
    console.log(item.filename)

})
