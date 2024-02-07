// Video 23: This and arrow function
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage()

console.log(this)  // o/p: {}

//*********** Arrow function

//*** Basic arrow function:
 const addTwo = (num1, num2) => {
     return num1 + num2
 }

 console.log(addTwo(3,4))

 //*** 
 const addthree = (num3,num4,num5)=>num3+num4+num5

 console.log(addthree(2,4,3))

 //******** 
 //const addTwo = (num1, num2) => ( num1 + num2 ) 

 //******** 
 const addTwo2 = (num1, num2) => ({name: "hitesh"})
console.log(addTwo2(3,4))