// Video 17: Objects part 2

// Singleton and constructor concept:

//***************************

const tinderUser1 = new Object()  // singleton object
//console.log(tinderUser1)

const tinderUser2 = {} // non singleton object
//console.log(tinderUser2)  // Both will give same output

//***************************

const swiggyUser3 = {}
swiggyUser3.id = "123abc"
swiggyUser3.name = "Sammy"
swiggyUser3.isLoggedIn = false

// console.log(swiggyUser3)

//********************************* 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

//console.log(regularUser.fullName)
//console.log(regularUser.fullName.userfullname)
//console.log(regularUser.fullName.userfullname.firstname)
//console.log(regularUser.fullName.userfullname.lastname)

//************************************* 
const obj1 = {name:"abc", id:"18"}
const obj2 = {name2:"xyz", id2:"28"}
const obj3 = {obj1, obj2}
//console.log(obj3)

//*********************** */
const obj4 = {name:"abc", id:"18"}
const obj5 = {name2:"xyz", id2:"28"}
const obj6 = Object.assign({},obj1,obj2)
//console.log(obj6)

// Another method: "spread"
const obj7 = {...obj4, ...obj5}
//console.log(obj7)

//************ Array of object
const users = [
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"h@gmaik.com",
    },
    {
        id:3,
        email:"h@gmaik.com",
    }
]

//****************
//console.log(swiggyUser3)
//console.log(Object.keys(swiggyUser3))
//console.log(Object.values(swiggyUser3))
//console.log(Object.entries(swiggyUser3))

//console.log(swiggyUser3.hasOwnProperty('isLoggedIn'))
//console.log(swiggyUser3.hasOwnProperty('isLoggedOut'))


//****************************

// Video 18: Object de structure

//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor) 

const {courseInstructor} = course
console.log(courseInstructor)

const {coursename: cname} = course
console.log(cname)

// ************************

// API and JSON talk: video 17: 6:21 timestamp



