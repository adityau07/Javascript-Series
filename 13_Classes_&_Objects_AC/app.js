// Objects & Prototypes:
const student = {
    fullName: "Aditya Ubale",
    marks: 93.2,
    printMarks: function(){
        console.log("marks = ",this.marks)
    },
};

const employee = {
    calTax(){
        console.log("Tax rate is 10%")
    },
}

const karanArjun = {
    salary:50000,
};

karanArjun.__proto__ = employee;

// class:

class ToyotaCar{
    start(){
        console.log("Start")
    }

    stop(){
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar();

// Inheritance:
// Example 1:
class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}

let obj = new Child();  // obj.hello() --> Hello

// Example 2:
class Person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }

    work(){
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solves Problem");
    }
}

let adityaObj = new Engineer();

// Super keyword example:

class PersonTwo{
    constructor(){
        //console.log("enter parent constructor");
        this.species = "Homo Sapiens";
    }

    eat(){
        console.log("Eat");
    }
}

class EngineerTwo extends PersonTwo{
    constructor(branch){
        //console.log("enter child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;
        //console.log("exit child constructor");
    }

    workTwo(){
        console.log("Problem solving");
    }
}

let enggObj = new EngineerTwo("Chemical Engg");


// Practise problem 1 & 2:

let data = "secret information";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ", data)
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        data = "some new value";
    }
}

let student1 = new User("Aman", "abc@gmail.com")
let student2 = new User("Shraddha", "xyz@gmail.com")

let admin1 = new Admin("Admin","admin@college.com")


// error handling concept:

let a = 5;
let b = 10;
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);
}catch(err){
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
