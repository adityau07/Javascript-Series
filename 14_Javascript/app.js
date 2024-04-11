// aysnchronous example:
console.log("one"); // this line will execute first
console.log("Two");  // then this

setTimeout(()=>{   // this part will run in the background and will execute after 4 seconds
    console.log("Hello")
}, 4000);        // 4seconds = 4000 miliseconds

// as the above part will run in the background till then 
//this below code will be executed and after that execution of 
//above part will be displayed
console.log("Three")
console.log("Four")

// Thus final output will be: one,two, three, four and then after 4 seconds: hello. This is the concept of Asynchronous programming.


// callback: A callback is a function passed as an argument to another function.

function sum(a,b){
    console.log(a+b);
}

function calculate(a,b,sumCallback){
    sumCallback(a,b);
}

calculate(1,2,sum);  // 3