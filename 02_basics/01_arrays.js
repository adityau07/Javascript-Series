// Video 14: Array in Javascript

//************************************* 
const myArray1 = [10,20,30,40]
console.log(myArray1[3])

const myArray2 = ["abc","xyz","pqr"]
console.log(myArray2[1]);

const myArray3 = new Array(21,31,45,"abc","xyz")
console.log(myArray3[3])

//************************************* 

// Array methods:

const myArr = [1,2,3,4,5]
myArr.push(6)
console.log(myArr);

myArr.pop()  // it will remove the last element
console.log(myArr)

myArr.unshift(9) // 9 will be added at the start of the array
console.log(myArr)

//************************************* 

const sampleArr = [20,30,40,50]
console.log("Original Array: ")
console.log(sampleArr)

// shift
sampleArr.shift()
console.log("Array after shift method: ")
console.log(sampleArr)

console.log(sampleArr.includes(40))

console.log(sampleArr.indexOf(50));
console.log(sampleArr.indexOf(78)); // if element is not present in the array, it will return -1

//***************************** */
// join
const newArr = sampleArr.join()
console.log(sampleArr)
console.log(newArr)
console.log(typeof newArr)

//*************************** */
// difference between slice and splice (Interview question)
const arr1 = [10,20,30,40,50]
console.log("Original Array: ",arr1)
console.log("Array after slice: ",arr1.slice(1,3))
console.log("Again original array after slice: ",arr1)

console.log("Array after splice: ",arr1.splice(1,3))
console.log("Original Array after splice: ",arr1)



