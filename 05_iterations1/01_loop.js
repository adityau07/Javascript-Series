// Video 27: for loop with break and continue


//************** 
for(let i=1;i<=10;i++){
    const element = i;
    //console.log(element)
}

//************** 
for(let i=1;i<=10;i++){
    const element = i;
    if(element==5){
        //console.log("5 is best number")
    }
    //console.log(element)
}

//************** 

for(let i=1;i<=10;i++){
    //console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(`${i}*${j}=${i*j}`)
    }
}

//************** 

let myArray = ["Hitesh","alakh","Nishant"]

//console.log("Elements in array are: ")
for(let index=0;index<myArray.length;index++){
    const element=myArray[index];

    //console.log(element)
}

//************** 
 // break

 for(let index=1;index<=20;index++){
    if(index==5){
        //console.log("5 detected");
        break
    }
    //console.log("Value of i is: ",index);
 }

//************** continue keyword

 for(let index=1;index<=10;index++){
    if(index==5){
        console.log("5 will not be printed,but elements after 5 will be printed");
        continue
    }
    console.log("Value of i is: ",index);
 }