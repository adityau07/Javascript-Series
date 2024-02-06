// Video 19: Functions in JS


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName // reference
sayMyName()  // execution

//************** 

function addNumbers(number1, number2)// parameters
{
    console.log(number1+number2)
}

addNumbers(4,6)   // arguments

const result = addNumbers(3,4)
console.log("Result: ",result) // undefined

//********************

function anotherAddNum(Num1,Num2){
    let addition = Num1+Num2
    return addition
}

const addition = anotherAddNum(5,6)
console.log("Addition is: ",addition)

//************************************ 

function loginUserMessage(username){

    if(username === undefined){
        console.log("Please enter the username.")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Hitesh"))
console.log(loginUserMessage(" "))
console.log(loginUserMessage())



// Video 20: functions part 2: functions with objects and array

//**** 
function calculateCartPrice(num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400))  // 200

//**** 
function calculateCartPrice2(...num2){
    return num2
    // "..." => rest operator
}

//console.log(calculateCartPrice2(200,300,400))  // [200, 300, 400]

//**** 
function calculateCartPrice3(val1,val2, ...num3){
    return num3
    // "..." => rest operator
}

//console.log(calculateCartPrice3(200,300,400))  // [400]

// function with object

const user = {
    username: "Hitesh",
    price:999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

//handleObject(user)


// We can pass direct object also
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

handleObject({
    username: "Sam",
    price: 125
})

//************************** 

// function to return second value in array

const myNewArray = [100,200,300,400]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([10,20,30,40]))

