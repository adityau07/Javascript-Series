// Video 15: Array part 2

// concat
const arr1 = ["Omkar","Pratik","Swayam"]
const arr2 = ["Chaitanya", "Pranit","Ankit"]
const arr3 = arr1.concat(arr2)

console.log("\n","1: ",arr1,"\n","2: ",arr2,"\n","3: ",arr3)

//push
console.log("\n")
arr1.push(arr2)
console.log("Original arr1 after push operation: ","\n",arr1)
console.log(arr1[3])
console.log(arr1[3][1])


// spread opearotor: "..."
console.log("\n Spread operator")
const arr4 = ["abc","pqr","xyz"]
const arr5 = ["rohan","alias","mohit"]
const arr6 = [...arr4, ...arr5]
console.log("Joining arr4 and arr5 using spread: ",arr6)

// flat
const arr7 = [1,2,3, [4,5,6],7,[6,7, [4,5]]]
const arr8 = arr7.flat(Infinity)
console.log("arr7 after flat method: ", arr8)

//********************
console.log(Array.isArray("Hitesh")) // false

// converting the above to array:
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"})) //interesting

//****************
console.log(Array.isArray(["Hitesh"])) //true

//**********************
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



