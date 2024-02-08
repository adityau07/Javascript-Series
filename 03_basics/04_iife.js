// Video 24: IIFE: Immediately Invoked Function Expression

// Regular function creation and execution:
function Greet(){
    console.log("Welcome");
}
Greet();

// IIFE creation and execution

(function Greeting(){
    console.log(`Welcome using IIFE`);
})();

// IIFE using arrow function
(()=>{
    console.log("Welcome using IIFE arrow")
})();

//**********
( function(){
    console.log("Hello")
})();

//**********
((name)=>{
    console.log(`Welcome ${name}`)
})("Hitesh")