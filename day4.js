
//              0        1     2       3       4
let names = ["chinmay","ram","sham","satish","ganesh"]
console.log(names[0])


for(let i = 0 ; i < names.length  ; i++){
    //console.log(i)
    console.log(names[i])

    // i ==== 0 
    // i ==== 1
    // i ==== 2
    // i ==== 3
    // i ==== 4
}

// Object ---
// Properties and Methods 

// Property --- length 

//           0         1        2          3
let city = ["pune","mumbai","banglore","kolkata"]
console.log(city.length)

// Push()
// Gym - 
//action -  exercise
//return -  health
let q1 = city.push("bhopal")
console.log(city)
console.log(q1)

// unshift()
let q2 = city.unshift("ujjain")
console.log(q2)
console.log(city)


// pop()
//             0         1       2        3
let fruits = ["apple","mango","banana","grapes"]
let q3 = fruits.pop()
console.log(fruits)
console.log(q3)

// shift()
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)


// push() ---- add the element at last ---- return new length
// unshift() ---- add the element at start --- return new lenth 
// shift() -- remove the first and return same
// pop() - removes last element and return same 
// reverse() - reversr the array and return it

// reverse()
let vegetable = ["tomato","potato","brinjal"]
let q5 = vegetable.reverse()
console.log(q5)

//includes()
let q6 = vegetable.includes("Potato")
console.log(q6)

// indexOf()
//                0        1          2
let country = ["india","pakistan","srilanka"]
let q7  = country.indexOf("{akistan")
console.log(q7)
