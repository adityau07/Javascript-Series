// Concepts: getAttribute, setAttribute:

let div = document.querySelector("div")
console.log(div)

// getAttribute
let id = div.getAttribute("id")
console.log(id)

//let para = document.querySelector("p")
//console.log(para.getAttribute("class"))

// setAttribute
//console.log(para.setAttribute("class","newClass"))

//****************************** 
// changing CSS style in JS:
//let div1 = document.querySelector("div")

//div1.style.backgroundColor="purple"

//div1.style.fontSize="20px";

//div1.innerText = "Hello"


//****************************** 
// *********Creating and adding elements:*******
// adding new button at the end of div but inside div
let newButton = document.createElement("button")
newButton.innerText = "Click Me"
console.log(newButton)

let div2 = document.querySelector("div")
div.append(newButton) // also try: prepend, before and after


// Creating new heading

let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i>Hi, I am new</i>"

document.querySelector("body").prepend(newHeading)


//****************************** 
// Removing elements:

let para1=document.querySelector("p")
para1.remove();
