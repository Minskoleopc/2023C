//             0      1      2         3         4
let names = ["ram","ravi","laxman","sachin","sanket"]
console.log(names)

// Everthing in js is object 
// Object has property and methods
// Method will have action and return type
console.log(names.length)
console.log('--------------------')
// length property
for(let i = 0 ; i  < 5 ; i++){
    console.log(i)
}
// 0 ,1,2,3,4
// Length -1 is always the last index

//              0        1        2         3         4
let cities = ["pune","mumbai","banglore","kolkata","chennai"]
console.log(cities.length)

// length -1 is  always last index

for(let i = 0 ; i < cities.length ; i++){
   // console.log(i)
   console.log(cities[i])
}


// Array object 
// property and methods 

// property ---- length 

// methods 

// Method -- Gym 
// action  -- excercise
// return  -- fitness


// push()
// action - add the element to the last 
// return - new length of array


let fruits  = ["apple","mango","banana"]
let x1= fruits.push("papaya")
console.log(x1)
console.log(fruits)

// unshift()
// action - adds the element at first 
// return - new length of array

//                  0           1       2        3
let vegetables = ["cabbage","brinjal","onion","tomato"]
console.log(vegetables)
let x2 = vegetables.unshift('cauliflower')
console.log(x2)
console.log(vegetables)


// pop()
// action - removes the last element
// return - return last element

let animals = ["tiger","lion","giraffe","rabbit"]
let x3 = animals.pop()
console.log(x3)
console.log(animals)

// shift()
// action - removes the firstElement
// returns the  first element

let x4 = animals.shift()
console.log(animals)
console.log(x4)

// includes()
// action - search for the element 
// return - boolean value
let country = ["india","srilanka","pakistan","bangladesh"]
let x5  = country.includes("india")
console.log(x5)

// indexOf()
let  flowers = ["rose","lily","jasmine"]
let q5 = flowers.indexOf("Rose")
console.log(q5)


// reverse()

let j = [11,22,33,44,55,66,77,88,99]
let k = j.reverse()
console.log(k)















