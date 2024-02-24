/* Create a H2 heading element with text - “Hello JavaScript”
. Append “from Apna College
students” to this text using JS.  */

/*Create 3 divs with common class name - “box”. Access them & add some unique text to each
of them. */

let heading = document.querySelector("h2")
console.dir(heading)

heading.innerText = heading.innerText + " from Apna College Students !!"

let divs = document.querySelectorAll(".box");

//divs[0].innerText = "New unique value 1";
//divs[1].innerText = "New unqiue value 2";
//divs[2].innerText = "New unique value 3";

// using for of loop instead of above three lines

let idx = 1
for(div of divs){
    div.innerText = `New Unique Value ${idx} `
    idx++
}
