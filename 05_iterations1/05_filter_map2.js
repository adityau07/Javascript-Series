// Video 30: part 2: continued


//****************************************** 
const myNums=[1,2,3,4,5]

const newNums = myNums.map( (num)=>num+10)
//console.log(newNums)

const newNums1 = myNums.map( (num)=>{ return num+10})
//console.log(newNums1)

//****************************************** 
// Chaining:

const myArr = [1,2,3,4,5]

const newArr = myArr
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>=41)
console.log(newArr)