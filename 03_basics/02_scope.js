// Video 21: Global and Local scope

var c = 300

let a = 45
if(true)
{
 let a = 10
 const b = 20
 var c = 30
 console.log("Inner: ",a)
}

// Execute the below lines one by one and then see the output
//console.log(a);  // o/p: a is not defined
//console.log(b);  // o/p: b is not defined
//console.log(c);    // o/p: 30

console.log(a)

//***********************Video 22: 

function one(){
    const username="Hitesh"

    function two(){
        const website="You-tube"
        console.log(username)
    }
    // console.log(website) o/p: website is not defined

    two()  // o/p: Hitesh
}

one()