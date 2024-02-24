/*Question 1: Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag */


/*Question 2: Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.*/

let newButton = document.createElement("button")
newButton.innerText = "Click Me"
newButton.style.backgroundColor="red"
newButton.style.color="white"

let body = document.querySelector("body")
body.prepend(newButton)


//************************** 
// concept: classList
// Question 2:

let para = document.querySelector("p")
para.classList.add("newClass")

