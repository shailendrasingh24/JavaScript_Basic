import { firstname,lastname,age,Fun1,Fun2 } from "./module.js";
import { a,b,Fun3 } from "./module1.js";

console.log(
    `
    Name : ${firstname},
    LastName : ${lastname},
    Age : ${age}
    `
)

Fun1()
var res = Fun2(20,30)
console.log(`Result Is Sum in Two value : ${res}`)

console.log(a+" And "+b)
var res2 = Fun3()
console.log(
    `
    First Value : ${res2[0]}
    Second Value : ${res2[1]}
    Third Value : ${res2[2]}
    `
)
