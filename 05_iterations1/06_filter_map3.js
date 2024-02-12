// Video 29: part 3: continued: reduce

const myArr = [1,2,3]

const myTotal = myArr.reduce( function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval;
},0)
console.log(myTotal)

// above same using arrow function:
const total = myArr.reduce((acc, currval)=>acc+currval,0)

console.log("Solution using array function: ",total)

// ********* Example:

const myCourses = [
    {
        itemName: "JS course",
        price:2999,
    },
    {
        itemName: "Python course",
        price:999,
    },
    {
        itemName: "Data science course",
        price:12999,
    },
    {
        itemName: "Mobile dev course",
        price:5999,
    },
]

const TotalCoursePrice = myCourses.reduce((acc,item)=>acc+item.price,0)

console.log("Total amount of your courses is: ",TotalCoursePrice)