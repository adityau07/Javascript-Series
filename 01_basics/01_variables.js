const accountID = 154233 // can't be changed later on
let accountEmail = "adi95@gmail.com"
var accountPassword = 12345
accountCity = "Jaipur" // this is also possible (declaring variable wihout any type), but it is a bad practise

let accountState // also we can declare a variable without any value (undefined)

// accountID = 987654  // not allowed

console.log(accountID);

accountEmail = "hdfc@gmail"
accountPassword = 88888
accountCity = "Banglore"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/* In javascript if we add or don't add semicolon at the end of evry line, it doen't matters*/

/* to declare the variables in javascript there are two methods: let and var, but we don't use var often*/