
//Event using js: node.event= ()=>
let btn3 = document.querySelector("#btn3");

btn3.onclick = ()=>{
    console.log('button 3 was clicked')
    let a =25;
    a++;
    console.log(`Value of a is: ${a}`) //26
}


// Event Listener:
let btn4 = document.querySelector("#btn4")

btn4.addEventListener("click", ()=>{
    console.log('button 4 was clicked')
})

btn4.addEventListener("click", ()=>{
    console.log('button 4 was clicked - handler 2')
})

btn4.addEventListener("click", (evt)=>{   // evt: Event object
    console.log('button 4 was clicked, event object example')
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);

})