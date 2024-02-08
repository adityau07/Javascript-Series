// Video 26: Control flow in Javascript

//***************

if(2=="2"){
    console.log("Executed"); // It will get executed
}

if(2==="2"){  // "===" checks the type also
    console.log("Executed");// It will not get executed
}


//***************

const score =200
if(score>100){
    const power="fly";
    console.log(`User power is: ${power}`)
}
//console.log(`User power is: ${power}`)

// Note: if we write const and let in line no 16 then line no 19 will not get executed but if we write var then it will. That's we dont use var most of the time.

//***************
const balance=1000
if(balance>500) console.log("test")
// but don't use above way


// if , else if, else 
// "&&"=> and
// "||"=> or

//************ Switch

const month = 3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;

    default:
        console.log("Not found")
        break;
}
